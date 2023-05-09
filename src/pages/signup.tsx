import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Progress,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from '@/styles/SignUp.module.scss'
import { APP_URLS } from '@/configs/urls'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'

import {
  useSignUpJobseekerMutation,
  useSignUpOrganizationMutation,
} from '@/generated/projectR-hasura'
import { Status } from '@/constants'
import { useSnackbar } from 'notistack'
import AccountInfo from '@/modules/Auth/Jobseeker/AccountInfo/AccountInfo'
import BasicInfo from '@/modules/Auth/Jobseeker/BasicInfo/BasicInfo'
import EmployerInfo from '@/modules/Auth/Employer/EmployerInfo/EmployerInfo'
import Organization from '@/modules/Auth/Employer/Organization/Organization'
import EducationsInfo from '@/modules/Auth/Jobseeker/EducationsInfo/EducationsInfo'
import { useRouter } from 'next/router'

export interface ISignUpProps {
  login: string
  password: string
  confirmPassword: string
  role: string
  dateBirth: string
  email: string
  gender: string
  education_form: string
  end_date: string
  faculity: string
  group: string
  name_institution: string
  speciality: string
  start_date: string
  lastName: string
  middleName: string
  name: string
  phone: string
  name_organization: string
  inn_organization: string
}

const initialValues: ISignUpProps = {
  login: '',
  password: '',
  confirmPassword: '',
  role: '',
  dateBirth: '',
  email: '',
  gender: '',
  education_form: '',
  end_date: '',
  faculity: '',
  group: '',
  name_institution: '',
  speciality: '',
  start_date: '',
  lastName: '',
  middleName: '',
  name: '',
  phone: '',
  inn_organization: '',
  name_organization: '',
}

const SignUp = () => {
  const { enqueueSnackbar } = useSnackbar()

  const router = useRouter()

  const [status, setStatus] = useState<Status>(Status.idle)

  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const [signUpOrganizationMutation, { data, loading, error }] =
    useSignUpOrganizationMutation({
      onCompleted() {
        setStatus(Status.success)
        return enqueueSnackbar('Регистрация прошла успешно', {
          variant: 'success',
        })
        router.push('/login')
      },
      onError() {
        setStatus(Status.error)
        return enqueueSnackbar('Не удалось зарегистрироваться', {
          variant: 'error',
        })
      },
    })

  const [signUpJobseekerMutation] = useSignUpJobseekerMutation({
    onCompleted() {
      setStatus(Status.success)
      return enqueueSnackbar('Регистрация прошла успешно', {
        variant: 'success',
      })
    },
    onError() {
      setStatus(Status.error)
      return enqueueSnackbar('Не удалось зарегистрироваться', {
        variant: 'error',
      })
    },
  })

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: () => {
      if (formik.values.role === 'jobseeker') {
        signUpJobseekerMutation({
          variables: {
            login: formik.values.login,
            password: formik.values.password,
            role: formik.values.role,
            dateBirth: formik.values.dateBirth,
            email: formik.values.email,
            gender: formik.values.gender,
            education_form: formik.values.education_form,
            end_date: formik.values.end_date,
            faculity: formik.values.faculity,
            group: formik.values.group,
            name_institution: formik.values.name_institution,
            speciality: formik.values.speciality,
            start_date: formik.values.start_date,
            lastName: formik.values.lastName,
            middleName: formik.values.middleName,
            name: formik.values.name,
            phone: formik.values.phone,
          },
        })
      } else {
        signUpOrganizationMutation({
          variables: {
            email: formik.values.email,
            inn_organization: formik.values.inn_organization,
            login: formik.values.login,
            name_employer:
              formik.values.lastName +
              ' ' +
              formik.values.name +
              ' ' +
              formik.values.middleName,
            name_organization: formik.values.name_organization,
            password: formik.values.password,
            phone: formik.values.phone,
            role: formik.values.role,
          },
        })
      }
    },
  })

  console.log(formik.values)

  const isJobseeker = formik.values.role === 'jobseeker'
  const isEmployer = formik.values.role === 'employer'

  const [isFirstInputFilled, setIsFirstInputFilled] = useState(false)

  const handleInputChange = (e: any) => {
    formik.handleChange(e)
    if (!isFirstInputFilled && e.target.name === 'password' && e.target.value) {
      setIsFirstInputFilled(true)
    }
  }

  const titleColor = useColorModeValue('teal.300', 'teal.200')

  return (
    <div className={styles.sign_up_container}>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        width="100%"
      >
        <Progress
          hasStripe
          value={progress}
          mb="3%"
          mx="3%"
          isAnimated
        ></Progress>
        <form onSubmit={formik.handleSubmit}>
          {step === 1 ? (
            <AccountInfo
              formData={formik.values}
              onChange={handleInputChange}
              isInputDisabled={!isFirstInputFilled}
            />
          ) : step === 2 ? (
            isJobseeker ? (
              <BasicInfo
                formData={formik.values}
                onChange={formik.handleChange}
              />
            ) : isEmployer ? (
              <EmployerInfo
                formData={formik.values}
                onChange={formik.handleChange}
              />
            ) : null
          ) : step === 3 ? (
            isJobseeker ? (
              <EducationsInfo />
            ) : isEmployer ? (
              <Organization
                formData={formik.values}
                onChange={formik.handleChange}
              />
            ) : null
          ) : null}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1)
                    setProgress(progress - 33.33)
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Назад
                </Button>
                <Button
                  w="7rem"
                  isDisabled={!formik.values.role || step === 3}
                  onClick={() => {
                    setStep(step + 1)
                    if (step === 3) {
                      setProgress(100)
                    } else {
                      setProgress(progress + 33.33)
                    }
                  }}
                  colorScheme="teal"
                  variant="outline"
                >
                  Далее
                </Button>
              </Flex>
              {step === 3 ? (
                <Button colorScheme="red" variant="solid" type="submit">
                  Зарегистрироваться
                </Button>
              ) : null}
              {step == 1 && (
                <Text>
                  У вас есть учетная запись?{' '}
                  <Link
                    color={titleColor}
                    ms="5px"
                    fontWeight="bold"
                    href={APP_URLS.SIGN_IN}
                  >
                    Авторизоваться
                  </Link>
                </Text>
              )}
            </Flex>
          </ButtonGroup>
        </form>
      </Box>
    </div>
  )
}

export default SignUp
