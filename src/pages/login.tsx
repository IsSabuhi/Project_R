import { Box } from "@chakra-ui/layout";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect, useState } from "react";
import { useCustomToast } from "../hooks/useCustomToast";
import SEO from "../modules/SEO";
import { loginSeo } from "../modules/SEO/pages.config";
import mp from "../services/mixpanel";
import WideLayout from "../components/layouts/WideLayout";
import { loginBenefits } from "../data/LoginBenefits";
import InfoGraphic from "../modules/Auth/AuthBenefits";
import AuthFormFooter from "../modules/Auth/FormFooter";
import AuthFormHeader from "../modules/Auth/FormHeader";
import divider from "../styles/dividerWithText.module.css";
import { Button } from "@chakra-ui/react";
import { coldStartServer } from "@/apis/server";
import MotionBox from "../components/layouts/MotionBox";
import VerifyEmailNotice from "../modules/Auth/VerifyEmailNotice";
import InputField from "../components/common/InputField";
import LinkText from "../components/common/LinkText";

interface IAuth {
  login: string;
  password: string;
}

const initialAuth: IAuth = { login: "", password: "" };

const Login: NextPage = () => {
  const [withEmail, setWithEmail] = useState<boolean>(false);
  const { createToast } = useCustomToast();
  const router = useRouter();

  useEffect(() => {
    coldStartServer();
    mp.track("Просмотр страницы входа в систему");
  }, []);

  const LoginForm = () => {
    return (
      <Box
        display="flex"
        flexDir="column"
        p={{ base: "2rem", md: "4rem", lg: "3rem 6.5rem" }}
        flex="1 0"
        flexBasis="40%"
      >
        <AuthFormHeader
          title="Добро пожаловать! Составьте свое резюме и подайте заявку на работу своей мечты в 2 раза быстрее!"
          hideTitle={withEmail}
        />
        <div className={divider.separator}>Авторизация</div>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VerifyEmailNotice />
          <form>
            <InputField label="Логин" name="login" type="text" />
            <InputField label="Пароль" name="password" type="password" />
            <Button
              type="submit"
              isFullWidth
              variant="solid"
              colorScheme="blue"
              textAlign="center"
              mb="4"
              loadingText="Logging in"
            >
              Войти
            </Button>
          </form>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="4"
            color="GrayText"
          >
            <LinkText fontSize="sm" href="/LoginHelp">
              Забыли пароль?
            </LinkText>
          </Box>
        </MotionBox>
        <AuthFormFooter page="LOGIN" />
      </Box>
    );
  };

  return (
    <>
      <SEO {...loginSeo} />
      <WideLayout>
        <InfoGraphic
          title="Войдите в систему, чтобы создать свое первое резюме"
          benefitList={loginBenefits}
        />
        <LoginForm />
      </WideLayout>
    </>
  );
};

export default Login;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //получение токена из файлов cookie.
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  //Если токен существует, всегда направляйтесь на /домашнюю страницу.
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/home"
      }
    };
  }

  //Если токена нет, то ничего не делаем
  return {
    props: {} as never
  };
};
