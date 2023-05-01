import React, { useState } from 'react'
import { Status } from '@/constants'
import { useAuthLoginMutation } from '@/generated/projectR-hasura'
import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Link,
  Stack,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useRouter } from 'next/router'
import { APP_URLS } from '@/configs/urls'
import styles from '@/styles/Login.module.scss'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

interface IAuthProps {
  login: string
  password: string
}

const initialAuth: IAuthProps = { login: '', password: '' }

const SignIn = () => {
  const router = useRouter()

  const { enqueueSnackbar } = useSnackbar()

  const [status, setStatus] = useState<Status>(Status.idle)

  const { startAuthSession } = useAuthContext()

  const [showPassword, setShowPassword] = useState(false)

  const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
    onCompleted(data) {
      startAuthSession(data.login_handler?.access_token!)
      setStatus(Status.success)
      router.push('/home')
      return enqueueSnackbar('Авторизация прошла успешно', {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Неверный логин или пароль', { variant: 'error' })
      setStatus(Status.error)
      console.log(error.message)
    },
  })

  const formik = useFormik({
    initialValues: initialAuth,
    enableReinitialize: true,
    onSubmit: () => {
      authLoginMutation({
        variables: {
          login: formik.values.login,
          password: formik.values.password,
        },
      })
    },
  })
  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'}>
        <form className={styles.login_container} onSubmit={formik.handleSubmit}>
          <Heading fontSize={'2xl'} textAlign="center" paddingBottom="30px">
            Войдите в систему, чтобы создать свое первое резюме
          </Heading>

          <Input
            id="login"
            name="login"
            type="text"
            placeholder="Логин"
            onChange={formik.handleChange}
            value={formik.values.login}
          />

          <InputGroup>
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Запомнить меня</Checkbox>
              <Link color={'blue.500'}>Забыли пароль?</Link>
            </Stack>
            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              loadingText="Вход в систему"
              isLoading={loading}
            >
              Войти
            </Button>
          </Stack>
        </form>
        <Text textAlign="center">
          У вас нет учетной записи?{' '}
          <Link color="blue.500" href={APP_URLS.SIGN_UP}>
            Зарегистрироваться
          </Link>
        </Text>
      </Stack>
    </Flex>
  )
}

const Login = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <SignIn />
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Login
