import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'
import { GrAttachment } from 'react-icons/gr'
import React from 'react'
import styles from './GeneralInfo.module.scss'
import { useGetJobseekerByIdQuery } from '@/generated/projectR-hasura'
import { useUpdateJobseekerProfileMutation } from '@/generated/projectR-hasura'
import { useFormik } from 'formik'
import { UpdateJobseekerProfileMutationVariables } from '@/generated/projectR-hasura'
import { useSnackbar } from 'notistack'
import { useAuthContext } from '@/hooks/use-auth-context'

const initialForm: UpdateJobseekerProfileMutationVariables = {
  dateBirth: '',
  email: '',
  gender: '',
  lastName: '',
  middleName: '',
  name: '',
  phone: '',
}

const GeneralInfo = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { userId } = useAuthContext()

  const [values, setValues] = React.useState(initialForm)

  const { data, loading, error } = useGetJobseekerByIdQuery({
    variables: {
      _eq: userId,
    },
    onCompleted(data) {
      setValues(data.jobseeker[0])
    },
  })

  const userData = data?.jobseeker[0]

  const [updateJobseekerProfileMutation] = useUpdateJobseekerProfileMutation({
    onCompleted(data) {
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
    initialValues: values,
    enableReinitialize: true,
    onSubmit: () => {
      updateJobseekerProfileMutation({
        variables: {
          dateBirth: formik.values.dateBirth,
          email: formik.values.email,
          gender: formik.values.gender,
          lastName: formik.values.lastName,
          middleName: formik.values.middleName,
          name: formik.values.name,
          phone: formik.values.phone,
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
      <div className={styles.container_settings}>
        <div className={styles.container_settings_top}>
          <div className={styles.container_settings_inputs}>
            <Text fontWeight="semibold" fontSize="2xl">
              Общая информация
            </Text>
            <Flex gap={4}>
              <FormControl as="fieldset">
                <FormLabel as="legend" htmlFor="lastName">
                  Фамилия
                </FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  placeholder="Фамилия"
                  value={userData?.lastName!}
                  disabled
                />
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel as="legend" htmlFor="name">
                  Имя
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  placeholder="Имя"
                  value={userData?.name}
                  disabled
                />
              </FormControl>
            </Flex>
            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor="middleName">
                Отчество
              </FormLabel>
              <Input
                id="middleName"
                name="middleName"
                type="text"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                placeholder="Отчество"
                disabled
                value={userData?.middleName}
              />
            </FormControl>
            <Flex gap={4}>
              <FormControl>
                <FormLabel as="legend" htmlFor="dateBirth">
                  Дата рождения
                </FormLabel>
                <Input
                  id="dateBirth"
                  name="dateBirth"
                  placeholder="Дата рождения"
                  type="date"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  value={formik.values.dateBirth!}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel as="legend" htmlFor="gender">
                  Пол
                </FormLabel>
                <Select
                  placeholder="Пол"
                  id="gender"
                  name="gender"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  value={formik.values.gender!}
                  onChange={formik.handleChange}
                >
                  <option value="Мужской">Мужской</option>
                  <option value="Женский">Женский</option>
                </Select>
              </FormControl>
            </Flex>
            <Flex gap={4}>
              <FormControl>
                <FormLabel as="legend" htmlFor="gender">
                  Электронная почта
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  value={formik.values.email || ''}
                  onChange={(event) => {
                    handleChangeField(
                      event as React.ChangeEvent<HTMLInputElement>
                    )
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel as="legend" htmlFor="gender">
                  Телефон
                </FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  value={formik.values.phone || ''}
                  onChange={(event) => {
                    handleChangeField(
                      event as React.ChangeEvent<HTMLInputElement>
                    )
                  }}
                />
              </FormControl>
            </Flex>
          </div>

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
        </div>

        <div className={styles.container_settings_avatar}>
          <div className={styles.container_settings_avatar_top}>
            <Image
              h={'200px'}
              w={'450px'}
              src={
                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              }
              objectFit={'cover'}
              borderTopRadius="20px"
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'2xl'}
                name={userData?.account?.login}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5} gap={2}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {userData?.account?.login || 'Имя пользователя'}
                </Heading>
                <Text color={'gray.500'}>{userData?.email}</Text>
                {/* <Text color={'gray.500'}>Frontend Developer</Text> */}
              </Stack>
            </Box>
          </div>
          <div className={styles.container_settings_avatar_input}>
            <Text fontWeight="semibold" fontSize="xl">
              Выберите фото профиля
            </Text>
            <Box className={styles.container_settings_avatar_input_update}>
              <Avatar name="И C" size="lg" />
              <GrAttachment />
              <div
                className={styles.container_settings_avatar_input_update_texts}
              >
                <Text>Выберите изоражение</Text>
                <Text>JPG, GIF или PNG.</Text>
                <Text>Максимальный размер 800К</Text>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </form>
  )
}

export default GeneralInfo
