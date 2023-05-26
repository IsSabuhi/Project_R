import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './Contacts.module.scss'
import {
  Jobseeker,
  Resumes,
  UpdateContactsMutationVariables,
  useGetJobseekerContactsQuery,
  useUpdateContactsMutation,
} from '@/generated/projectR-hasura'
import { useRouter } from 'next/router'
import { joinName } from '@/utils/joinName'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'

const initialFormContacts: UpdateContactsMutationVariables = {
  email: '',
  phone: '',
}

function Contacts() {
  const router = useRouter()

  const { enqueueSnackbar } = useSnackbar()

  const resume_id = router.query.id

  const { userId } = useAuthContext()

  // const [values, setValues] = React.useState(initialFormContacts)

  const { data, loading, error } = useGetJobseekerContactsQuery({
    variables: {
      _eq: resume_id as string,
    },
    onCompleted(data) {
      // setValues(data.jobseeker[0])
    },
  })

  const userData = data?.jobseeker[0]!

  const [updateContactsMutation] = useUpdateContactsMutation({
    onCompleted() {
      return enqueueSnackbar('Данные сохранены успешно', {
        variant: 'success',
      })
    },
    onError() {
      return enqueueSnackbar('Произошла непредвиденная ошибка', {
        variant: 'error',
      })
    },
  })

  const formik = useFormik({
    initialValues: initialFormContacts,
    enableReinitialize: true,
    onSubmit: () => {
      updateContactsMutation({
        variables: {
          _eq: userId,
        },
      })
    },
  })

  const handleChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(name, value)
  }

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <Flex gap={4} mt={5}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="fullName">
            Полное имя
          </FormLabel>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваше полное имя"
            value={joinName(
              userData?.lastName!,
              userData?.name!,
              userData?.middleName!
            )}
            disabled
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="email">
            Адрес электронной почты
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваш email"
            value={formik.values.email || ''}
            onChange={(event) => {
              handleChangeField(event as React.ChangeEvent<HTMLInputElement>)
            }}
          />
        </FormControl>
      </Flex>

      <Flex gap={4} mt={5}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="phone">
            Номер телефона
          </FormLabel>
          <Input
            id="phone"
            name="phone"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваш номер телефона"
            value={formik.values.phone || ''}
            onChange={(event) => {
              handleChangeField(event as React.ChangeEvent<HTMLInputElement>)
            }}
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="fullName">
            Личный сайт или релевантная ссылка
          </FormLabel>
          <Input
            id="myLink"
            name="myLink"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="http://www.mysite.com"
          />
        </FormControl>
      </Flex>
      <Button
        type="submit"
        colorScheme="blue"
        variant="solid"
        loadingText="Сохранение"
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
        Сохранить
      </Button>
    </form>
  )
}

export default Contacts
