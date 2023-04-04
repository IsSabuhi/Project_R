import dayjs from 'dayjs';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useCallback, useContext, useEffect } from 'react';
import client from '../../apollo-client';
import { APP_URLS } from '../configs/urls';
import { AUTH_TOKEN } from '../constants';
import { useMutationAuthUserMutation } from '../generated/projectR-hasura';
import { parseJwt } from '../utils/parse-jwt';

const KEY = AUTH_TOKEN;

interface AuthState {
  isAuthorized: boolean;
  accessToken?: string;
  gettingDate?: Date;
  userId?: string;
  jobseekerId?: string;
}

interface IAuthContext extends AuthState {
  startAuthSession: (token: string) => void;
  stopAuthSession: () => void;
  mutationAuthUserMutation: () => void;
}

const authContext = React.createContext<IAuthContext | null>(null);

/** Получить время в секундах, через которые токен устареет на основе даты выдачи и времени его жизни*/
const getTokenExpirationTime = (
  gettingAccessTokenDate: Date,
  accessTokenLifeTime: number
) =>
  dayjs(dayjs(gettingAccessTokenDate)).diff(new Date(), 'seconds') +
  accessTokenLifeTime * 60;

/** Получение токена из кеша если он там есть */
const getFromCache = () => {
  try {
    const storeDataString = localStorage.getItem(KEY);
    if (!storeDataString) return;

    const storeData: Partial<AuthState> = JSON.parse(storeDataString);

    const lastAccessToken = storeData.accessToken;
    const tokenLastDate = storeData.gettingDate;

    if (lastAccessToken && tokenLastDate) {
      if (getTokenExpirationTime(tokenLastDate, 600) > 30)
        return storeData as AuthState;
    }
  } catch {}

  return null;
};

//** Атом состояние авторизации. По умолчанию значение берется из кэша (если он есть) */
const authAtom = atom<AuthState>(
  getFromCache() || {
    isAuthorized: false,
  }
);

/** Атом авторизации с записью кэша в LocalStorage */
const authAtomWithPersistence = atom<AuthState, [AuthState], void>(
  (get) => get(authAtom),
  (_, set, newVal) => {
    set(authAtom, newVal);
    localStorage.setItem(KEY, JSON.stringify(newVal));
  }
);

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const tokenUpdaterTimer = React.useRef<NodeJS.Timeout | null>(null);
  const [authState, setAuthData] = useAtom(authAtomWithPersistence);

  const router = useRouter();

  const startAuthSession = useCallback(
    async (token: string, newTimeToRequest?: number) => {
      const { userID, jobseekerId } = parseJwt(token);

      if (tokenUpdaterTimer.current) clearTimeout(tokenUpdaterTimer.current);

      /** Периодически обновляю токен, чтоб не устаревал */
      tokenUpdaterTimer.current = setTimeout(() => {
        // mutationAuthUserMutation(); // тут будет рефреш
      }, (newTimeToRequest || 60) * 1000 * 10); // обновляю токен за 30 сек до смерти

      setAuthData({
        ...authState,
        isAuthorized: true,
        accessToken: token,
        gettingDate: new Date(),
        userId: userID,
        jobseekerId: jobseekerId,
      });
    },
    [authState]
  );

  const stopAuthSession: IAuthContext['stopAuthSession'] = useCallback(() => {
    setAuthData({ isAuthorized: false });
    router.push(APP_URLS.SIGN_OUT);
  }, []);

  const [mutationAuthUserMutation, { data, loading, error }] =
    useMutationAuthUserMutation({
      client: client,
      onError: (e) => {
        setAuthData({
          ...authState,
          isAuthorized: false,
        });
        if (tokenUpdaterTimer.current) clearInterval(tokenUpdaterTimer.current);
      },
      onCompleted: ({ login_handler }) => {
        startAuthSession(login_handler!.access_token!);
      },
    });

  useEffect(() => {
    window.addEventListener('focus', () => mutationAuthUserMutation());
    if (
      authState.isAuthorized &&
      authState.accessToken &&
      authState.gettingDate
    ) {
      const cachedTokenTimeLife = getTokenExpirationTime(
        authState.gettingDate,
        600
      );
      if (cachedTokenTimeLife > 30) {
        startAuthSession(
          authState.accessToken,
          Math.min(cachedTokenTimeLife, 1 / 6)
        );
      } else mutationAuthUserMutation();
    } else mutationAuthUserMutation();

    return () => {
      window.removeEventListener('focus', () => mutationAuthUserMutation());
    };
  }, []);

  return (
    <authContext.Provider
      value={{
        ...authState,
        stopAuthSession,
        mutationAuthUserMutation,
        startAuthSession,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(authContext);
  if (context === null) throw new Error('Отсутствует AuthProvider');
  return context;
}
