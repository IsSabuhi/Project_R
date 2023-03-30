import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import AuthFormHeader from '@/components/FormHeader';
import InfoGraphic from '@/components/InfoGraphic';
import InputField from '@/components/InputField/InputField';
import WideLayout from '@/components/layouts/WideLayout';
import styles from '@/styles/Login.module.scss';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import { useMutationAuthUserMutation } from '@/generated/projectR-hasura';
import { useAuthContext } from '../hooks/use-auth-context';
import { useRouter } from 'next/router';
import { loginBenefits } from '../configs/loginBenefits';

interface IAuth {
  login: string;
  password: string;
}

const initialAuth: IAuth = { login: '', password: '' };

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const { stopAuthSession, startAuthSession } = useAuthContext();

  const [mutationAuthUserMutation, { loading }] = useMutationAuthUserMutation({
    onCompleted(data) {
      startAuthSession(data.login_handler?.access_token!);
      enqueueSnackbar('Успешно вошел в систему', { variant: 'success' });
      return router.push('/home');
    },
    onError(error) {
      enqueueSnackbar('Неверный логин или пароль', { variant: 'error' });
      console.log(error.message);
    },
  });

  const formik = useFormik({
    initialValues: initialAuth,
    enableReinitialize: true,
    onSubmit: () => {
      mutationAuthUserMutation({
        variables: {
          login: formik.values.login,
          password: formik.values.password,
        },
      });
    },
  });

  return (
    <Box
      className={styles.container}
      p={{ base: '2rem', md: '4rem', lg: '3rem 6.5rem' }}
    >
      <AuthFormHeader
        title='Составьте свое резюме и подайте заявку на работу своей мечты в 2 раза быстрее!'
        hideTitle={false}
      />
      <div className={styles.separator}>Авторизация</div>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          id='login'
          name='login'
          type='text'
          placeholder='Логин'
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        <InputField
          id='password'
          name='password'
          type='password'
          placeholder='Пароль'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          type='submit'
          variant='solid'
          colorScheme='blue'
          textAlign='center'
          width='100%'
          mb='4'
          isLoading={loading}
          loadingText='Вход в систему'
        >
          Войти
        </Button>
      </form>
    </Box>
  );
};

const Login = () => {
  return (
    <WideLayout>
      <InfoGraphic
        title='Войдите в систему, чтобы создать свое первое резюме'
        benefitList={loginBenefits}
      />
      <LoginForm />
    </WideLayout>
  );
};

export default Login;
