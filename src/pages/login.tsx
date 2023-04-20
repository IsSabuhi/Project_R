import React from 'react'
import WideLayout from '../components/layouts/WideLayout/WideLayout'
import InfoGraphic from '../modules/Auth/InfoGraphic/InfoGraphic'
import { loginBenefits } from '../data/LoginBenefits'
import { Box, Button } from '@chakra-ui/react'
import FormHeader from '@/modules/Auth/FormHeader'
import styles from '@/styles/Login.module.scss'
import InputField from '@/components/InputField/InputField'

const LoginForm = () => {
  return (
    <div className={styles.login_container}>
      <FormHeader
        title="Составьте свое резюме и подайте заявку на работу своей мечты в 2 раза быстрее"
        hideTitle={false}
      />
      <div className={styles.divider}>Авторизация</div>
      <form>
        <InputField id="login" name="login" type="text" placeholder="Логин" />
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <Button
          type="submit"
          variant="solid"
          colorScheme="blue"
          textAlign="center"
          width="100%"
          mb="4"
          loadingText="Вход в систему"
        >
          Войти
        </Button>
      </form>
    </div>
  )
}

const Login = () => {
  return (
    <WideLayout>
      <InfoGraphic
        title="Войдите в систему, чтобы создать свое первое резюме"
        benefitList={loginBenefits}
      />
      <LoginForm />
    </WideLayout>
  )
}

export default Login
