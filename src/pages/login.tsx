import { Box } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useCustomToast } from '../hooks/useCustomToast'
import WideLayout from '../components/layouts/WideLayout'
import { loginBenefits } from '../data/LoginBenefits'
import InfoGraphic from '../modules/Auth/AuthBenefits'
import AuthFormHeader from '../modules/Auth/FormHeader'
import divider from '../styles/dividerWithText.module.css'
import { Button } from '@chakra-ui/react'
import LinkText from '../components/common/LinkText'
import { useAuthContext } from '../hooks/use-auth-context'
import { useMutationAuthUserMutation } from '../generated/projectR-hasura'
import { useFormik } from 'formik'
import { Status } from '../utils/constants'
import InputField from '../components/common/InputField'

interface IAuth {
  login: string
  password: string
}

const initialAuth: IAuth = { login: '', password: '' }

const Login = () => {
  const { createToast } = useCustomToast()

  const router = useRouter()
  const { userId: myUserId, startAuthSession } = useAuthContext()

  const [status, setStatus] = useState<Status>(Status.idle)

  const [mutationAuthUserMutation] = useMutationAuthUserMutation({
    onCompleted(data) {
      startAuthSession(data.login_handler?.access_token!)
      setStatus(Status.success)
      createToast('Успешно вошел в систему', 'success')
      return router.push('/home')
    },
    onError(error) {
      createToast('Неверный логин или пароль', 'error')
      setStatus(Status.error)
      console.log(error.message)
    },
  })

  const formik = useFormik({
    initialValues: initialAuth,
    enableReinitialize: true,
    onSubmit: () => {
      mutationAuthUserMutation({
        variables: {
          login: formik.values.login,
          password: formik.values.password,
        },
      })
    },
  })

  const LoginForm = () => {
    return (
      <Box
        display="flex"
        flexDir="column"
        p={{ base: '2rem', md: '4rem', lg: '3rem 6.5rem' }}
        flex="1 0"
        flexBasis="40%"
      >
        <AuthFormHeader
          title="Составьте свое резюме и подайте заявку на работу своей мечты в 2 раза быстрее!"
          hideTitle={false}
        />
        <div className={divider.separator}>Авторизация</div>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            id="login"
            name="login"
            type="text"
            placeholder="Логин"
            onChange={formik.handleChange}
            value={formik.values.login}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            type="submit"
            variant="solid"
            colorScheme="blue"
            textAlign="center"
            width="100%"
            mb="4"
            isLoading={status === Status.loading}
            loadingText="Вход в систему"
          >
            Войти
          </Button>
        </form>
        <LinkText fontSize="sm" href="/LoginHelp">
          Забыли пароль?
        </LinkText>
      </Box>
    )
  }

  return (
    <>
      <WideLayout>
        <InfoGraphic
          title="Войдите в систему, чтобы создать свое первое резюме"
          benefitList={loginBenefits}
        />
        <LoginForm />
      </WideLayout>
    </>
  )
}

export default Login

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   //получение токена из файлов cookie.
//   const cookies = nookies.get(ctx);
//   const token = cookies.token;

//   //Если токен существует, всегда направляйтесь на /домашнюю страницу.
//   if (!token) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/home"
//       }
//     };
//   }

//   //Если токена нет, то ничего не делаем
//   return {
//     props: {} as never
//   };
// };
