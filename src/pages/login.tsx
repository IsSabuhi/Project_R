import React, { useState } from 'react'
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
  Box,
  useColorModeValue,
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

  const titleColor = useColorModeValue('teal.300', 'teal.200')

  const { userId, isAuthorized, startAuthSession } = useAuthContext()

  const [showPassword, setShowPassword] = useState(false)

  const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
    onCompleted(data) {
      startAuthSession(data.login_handler?.access_token!)
      router.push(APP_URLS.getHomePage(userId!))
      // return enqueueSnackbar('Авторизация прошла успешно', {
      //   variant: 'success',
      // })
    },
    onError(error) {
      enqueueSnackbar('Неверный логин или пароль', { variant: 'error' })
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

  React.useEffect(() => {
    if (isAuthorized) {
      router.push(APP_URLS.getHomePage(userId!))
    }
  }, [router])

  return (
    <Flex p={8} flex={1} align={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'}>
        <form className={styles.login_container} onSubmit={formik.handleSubmit}>
          <Heading fontSize={'2xl'} textAlign="center" paddingBottom="30px">
            Войдите в систему, чтобы создать свое первое резюме
          </Heading>

          <Input
            id="login"
            name="login"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Логин"
            onChange={formik.handleChange}
            value={formik.values.login}
          />

          <InputGroup>
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              fontSize="sm"
              size="lg"
              placeholder="Пароль"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputRightElement h={'full'}>
              <Button
                variant={'unstyled'}
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
              <Link color={titleColor} ms="5px" fontWeight="bold">
                Забыли пароль?
              </Link>
            </Stack>
            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              loadingText="Вход в систему"
              isLoading={loading}
              disabled={loading}
              bg="teal.300"
              w="100%"
              h="45"
              mb="20px"
              color="white"
              mt="20px"
              _hover={{
                bg: 'teal.200',
              }}
              _active={{
                bg: 'teal.400',
              }}
            >
              Войти
            </Button>
          </Stack>
        </form>
        <Text textAlign="center">
          У вас нет учетной записи?{' '}
          <Link
            color={titleColor}
            ms="5px"
            fontWeight="bold"
            href={APP_URLS.SIGN_UP}
          >
            Зарегистрироваться
          </Link>
        </Text>
      </Stack>
    </Flex>
  )
}

const Login = () => {
  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: '100px', md: '0px' }}
      >
        <SignIn />
        <Box
          display={{ base: 'none', md: 'block' }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          >
            {/* <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          /> */}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Login
