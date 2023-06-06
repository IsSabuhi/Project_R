import React, { useState } from 'react'
import styles from './Account.module.scss'
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { useChangePasswordMutation } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'

interface IAccountProps {
  newPassword: string
  oldPassword: string
  confirmPassword: string
}

const initialFormChangePassword: IAccountProps = {
  newPassword: '',
  oldPassword: '',
  confirmPassword: '',
}

const Account = () => {
  const { userId, accessToken } = useAuthContext()

  const { enqueueSnackbar } = useSnackbar()

  const [passwordError, setPasswordError] = useState('')
  const [isFieldsFilled, setIsFieldsFilled] = useState(false)

  const handleChange = (e: any) => {
    formik.handleChange(e)
    setIsFieldsFilled(!!formik.values.newPassword)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    formik.handleSubmit()
    setIsFieldsFilled(true)
  }

  const [changePasswordMutation] = useChangePasswordMutation({
    onCompleted(data) {
      formik.resetForm()
      return enqueueSnackbar('Пароль успешно изменен', {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Не удалось изменить пароль', { variant: 'error' })
    },
  })

  const formik = useFormik({
    initialValues: initialFormChangePassword,
    enableReinitialize: true,
    onSubmit: () => {
      changePasswordMutation({
        variables: {
          access_token: accessToken,
          account_id: userId,
          newPassword: formik.values.newPassword,
          oldPassword: formik.values.oldPassword,
        },
      })
    },
  })

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Text fontWeight="semibold" fontSize="xl">
        Изменить пароль
      </Text>
      <Divider mt={1} mb={2} />
      <Flex gap={4}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="oldPassword">
            Старый пароль*
          </FormLabel>
          <Input
            id="oldPassword"
            name="oldPassword"
            type="password"
            placeholder="Введите текущий пароль"
            fontSize="sm"
            size="lg"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="password">
            Новый пароль*
          </FormLabel>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="Введите новый пароль*"
            fontSize="sm"
            size="lg"
            value={formik.values.newPassword}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="confirmPassword">
            Подтвердите пароль*
          </FormLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
            fontSize="sm"
            size="lg"
            value={formik.values.confirmPassword}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            disabled={!isFieldsFilled}
            required
          />
          {formik.values.newPassword !== formik.values.confirmPassword && (
            <FormHelperText>
              <Text style={{ color: 'red' }}>Пароли не совпадают</Text>
            </FormHelperText>
          )}
        </FormControl>
      </Flex>

      <Button
        type="submit"
        colorScheme="blue"
        variant="solid"
        isDisabled={
          formik.values.newPassword !== formik.values.confirmPassword ||
          formik.values.newPassword === '' ||
          formik.values.oldPassword === ''
        }
        bg="teal.300"
        h="45"
        mb="5px"
        color="white"
        _hover={{
          bg: 'teal.200',
        }}
        _active={{
          bg: 'teal.400',
        }}
        marginLeft="auto"
      >
        Изменить пароль
      </Button>
    </form>
  )
}

export default Account
