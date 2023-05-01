import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Progress,
  Text,
  Link,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from '@/styles/SignUp.module.scss'
import { APP_URLS } from '@/configs/urls'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import BasicInfo from '@/modules/Jobseeker/BasicInfo/BasicInfo'
import EducationsInfo from '@/modules/Jobseeker/EducationsInfo/EducationsInfo'
import AccountInfo from '@/modules/Jobseeker/AccountInfo/AccountInfo'
import EmployerInfo from '@/modules/Employer/EmployerInfo/EmployerInfo'
import Organization from '@/modules/Employer/Organization/Organization'
import {
  useSignUpJobseekerMutation,
  useSignUpOrganizationMutation,
} from '@/generated/projectR-hasura'
import { Status } from '@/constants'
import { useSnackbar } from 'notistack'

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
  name_employer: string
  emailEmployer: string
  phoneEmployer: string
  inn_organization: bigint
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
  name_employer: '',
  emailEmployer: '',
  phoneEmployer: '',
  inn_organization: BigInt(''),
}

const SignUp = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [status, setStatus] = useState<Status>(Status.idle)

  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const registerValidation = object().shape({
    name: string().required('Required'),
    email: string()
      .required('Требуется действительный адрес электронной почты')
      .email('Valid email required'),
    password: string().min(8, 'Required').required('Required'),
    confirmPassword: string()
      .required('Пожалуйста, подтвердите свой пароль')
      .oneOf([ref('password')], 'Пароли не совпадают'),
  })

  const [signUpOrganizationMutation] = useSignUpOrganizationMutation({
    onCompleted() {
      setStatus(Status.success)
      return enqueueSnackbar('Регистрация прошла успешно', {
        variant: 'success',
      })
    },
  })

  const [signUpJobseekerMutation, { data, loading, error }] =
    useSignUpJobseekerMutation({
      onCompleted() {
        setStatus(Status.success)
        return enqueueSnackbar('Регистрация прошла успешно', {
          variant: 'success',
        })
      },
    })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
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
            name_employer: formik.values.name_employer,
            email: formik.values.email,
            phone: formik.values.phone,
            inn_organization: formik.values.inn_organization,
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

  return (
    <div className={styles.sign_up_container}>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        width="100%"
      >
        <Progress
          hasStripe
          value={progress}
          mb="3%"
          mx="3%"
          isAnimated
        ></Progress>

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
            <EmployerInfo />
          ) : null
        ) : step === 3 ? (
          isJobseeker ? (
            <EducationsInfo />
          ) : isEmployer ? (
            <Organization />
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
                <Link color="blue.500" href={APP_URLS.SIGN_IN}>
                  Авторизоваться
                </Link>
              </Text>
            )}
          </Flex>
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default SignUp
