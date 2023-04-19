import React from 'react'
import WideLayout from '../components/layouts/WideLayout'
import InfoGraphic from '../modules/Auth/InfoGraphic'
import { loginBenefits } from '../data/LoginBenefits'

const Login = () => {
  return (
    <WideLayout>
        <InfoGraphic
          title="Войдите в систему, чтобы создать свое первое резюме"
          benefitList={loginBenefits}
        />
        {/* <LoginForm /> */}
      </WideLayout>
  )
}

export default Login