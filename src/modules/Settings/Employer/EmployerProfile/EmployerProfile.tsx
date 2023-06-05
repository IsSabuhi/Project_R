import React, { useState } from 'react'
import styles from './EmployerProfile.module.scss'
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
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { BiUpload } from 'react-icons/bi'
import { useAuthContext } from '@/hooks/use-auth-context'
import {
  UpdateEmployerMutationVariables,
  UpdateOrganizationMutationVariables,
  useGetOrganizationByIdQuery,
  useUpdateEmployerMutation,
  useUpdateOrganizationMutation,
} from '@/generated/projectR-hasura'
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import { useSnackbar } from 'notistack'
import { useFormik } from 'formik'
import DefaultIcon from '@/assets/icons/user.png'

const initialOrganizationForm: UpdateOrganizationMutationVariables = {
  legal_address: '',
}

const initialEmployerForm: UpdateEmployerMutationVariables = {
  email: '',
  phone: '',
}

const EmployerProfile = () => {
  const { userId } = useAuthContext()

  const { enqueueSnackbar } = useSnackbar()

  const [values, setValues] = React.useState({
    organizationForm: initialOrganizationForm,
    employerForm: initialEmployerForm,
  })

  const { data, loading, error } = useGetOrganizationByIdQuery({
    variables: {
      _eq: userId,
    },
    onCompleted(data) {
      setValues((prevValues) => ({
        ...prevValues,
        organizationForm: data.organization[0] || prevValues.organizationForm,
        employerForm:
          data.organization[0]?.organization_employer ||
          prevValues.employerForm,
      }))
    },
  })

  const employerData = data?.organization[0]

  const [updateOrganizationMutation] = useUpdateOrganizationMutation({
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

  const [updateEmployerMutation] = useUpdateEmployerMutation({})

  const formik = useFormik({
    initialValues: {
      ...values.organizationForm,
      ...values.employerForm,
    },
    enableReinitialize: true,
    onSubmit: () => {
      updateOrganizationMutation({
        variables: {
          _eq: userId,
          legal_address: formik.values.legal_address,
        },
      })
      updateEmployerMutation({
        variables: {
          _eq: userId,
          email: formik.values.email,
          phone: formik.values.phone,
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
      <div className={styles.container_settings_employer}>
        <div className={styles.container_settings_employer_top}>
          <div className={styles.container_settings_employer_top_inputs}>
            <Text fontWeight="semibold" fontSize="2xl">
              Общая информация
            </Text>
            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor="name_organization">
                Организация
              </FormLabel>
              <Input
                id="name_organization"
                name="name_organization"
                type="text"
                fontSize="sm"
                size="lg"
                placeholder="Организация"
                value={
                  employerData?.name_organization || 'Название организации'
                }
                onChange={(event) => {
                  handleChangeField(
                    event as React.ChangeEvent<HTMLInputElement>
                  )
                }}
                disabled
              />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor="name_employer">
                Руководитель
              </FormLabel>
              <Input
                id="name_employer"
                name="name_employer"
                type="text"
                fontSize="sm"
                size="lg"
                placeholder="Руководитель"
                value={
                  employerData?.organization_employer.name_employer ||
                  'Руководитель'
                }
                onChange={(event) => {
                  handleChangeField(
                    event as React.ChangeEvent<HTMLInputElement>
                  )
                }}
                disabled
              />
            </FormControl>
            <Flex gap={4}>
              <FormControl>
                <FormLabel as="legend" htmlFor="inn">
                  ИНН
                </FormLabel>
                <Input
                  id="inn"
                  name="inn"
                  placeholder="ИНН"
                  type="text"
                  fontSize="sm"
                  size="lg"
                  value={employerData?.inn_organization || 'ИНН организации'}
                  onChange={(event) => {
                    handleChangeField(
                      event as React.ChangeEvent<HTMLInputElement>
                    )
                  }}
                  disabled
                />
              </FormControl>
              <FormControl>
                <FormLabel as="legend" htmlFor="ogrn">
                  ОГРН
                </FormLabel>
                <Input
                  id="ogrn"
                  name="ogrn"
                  placeholder="ОГРН"
                  type="text"
                  fontSize="sm"
                  size="lg"
                  value={employerData?.kpp_organization || 'ОГРН организации'}
                  onChange={(event) => {
                    handleChangeField(
                      event as React.ChangeEvent<HTMLInputElement>
                    )
                  }}
                  disabled
                />
              </FormControl>
            </Flex>
            <Flex gap={4}>
              <FormControl>
                <FormLabel as="legend" htmlFor="email">
                  Электронная почта
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
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
                <FormLabel as="legend" htmlFor="phone">
                  Телефон
                </FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
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

            <FormControl>
              <FormLabel as="legend" htmlFor="legalAddress">
                Юридический адрес
              </FormLabel>
              <Input
                id="legal_address"
                name="legal_address"
                type="tel"
                placeholder="Юридический адрес"
                fontSize="sm"
                size="lg"
                value={formik.values.legal_address || ''}
                onChange={(event) => {
                  handleChangeField(
                    event as React.ChangeEvent<HTMLInputElement>
                  )
                }}
              />
            </FormControl>
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

        <div className={styles.container_settings_employer_avatar}>
          <div className={styles.container_settings_employer_avatar_top}>
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
              {employerData?.organization_account.avatar ? (
                <Avatar
                  size={'2xl'}
                  sx={{
                    border: '2px solid white',
                    borderRadius: '50%',
                    background: '#FFF',
                    img: {
                      objectFit: 'contain',
                      borderRadius: 'none',
                    },
                  }}
                  src={employerData?.organization_account.avatar as string}
                />
              ) : (
                <Avatar size={'2xl'} />
              )}
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5} gap={2}>
                <Heading
                  className={
                    styles.container_settings_employer_avatar_top_heading
                  }
                >
                  {employerData?.verified === false ? (
                    <Tooltip
                      label="Не идентифицированный работодатель"
                      fontSize="md"
                    >
                      <WarningIcon color="red" />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      label="Идентифицированный работодатель"
                      fontSize="md"
                    >
                      <CheckCircleIcon color="green" />
                    </Tooltip>
                  )}

                  {employerData?.name_organization || 'Название организации'}
                </Heading>
                <Text color={'gray.500'}>
                  {employerData?.organization_employer.email ||
                    'Электронная почта'}
                </Text>
                <Text color={'gray.500'}>
                  {employerData?.organization_employer.name_employer}
                </Text>
              </Stack>
            </Box>
          </div>
          <div className={styles.container_settings_employer_avatar_input}>
            <Text fontWeight="semibold" fontSize="xl">
              Выберите фото профиля
            </Text>
            <Box
              className={styles.container_settings_employer_avatar_input_update}
            >
              <BiUpload size="40px" />
              <div
                className={
                  styles.container_settings_employer_avatar_input_update_texts
                }
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

export default EmployerProfile
