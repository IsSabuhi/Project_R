import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import AuthFormHeader from '../components/FormHeader';
import InfoGraphic from '../components/InfoGraphic';
import InputField from '../components/InputField/InputField';
import WideLayout from '../components/layouts/WideLayout';
import { loginBenefits } from '../configs/loginBenefits';
import styles from '../styles/Login.module.scss';

interface IAuth {
  login: string;
  password: string;
}

const initialAuth: IAuth = { login: '', password: '' };

const LoginForm = () => {
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
      <form>
        <InputField
          id='login'
          name='login'
          type='text'
          placeholder='Логин'
          //   onChange={formik.handleChange}
          //   value={formik.values.login}
        />
        <InputField
          id='password'
          name='password'
          type='password'
          placeholder='Пароль'
          //   onChange={formik.handleChange}
          //   value={formik.values.password}
        />
        <Button
          type='submit'
          variant='solid'
          colorScheme='blue'
          textAlign='center'
          width='100%'
          mb='4'
          // isLoading={status === Status.loading}
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
