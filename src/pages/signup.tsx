import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Progress,
  Text,
  useToast,
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
import { useSignUpJobseekerMutation } from '@/generated/projectR-hasura'

export interface ISignUpProps {
  login: string
  password: string
  confirmPassword: string
  role: string
  email: string
}

const initialValues: ISignUpProps = {
  login: '',
  password: '',
  confirmPassword: '',
  role: '',
  email: '',
}

const SignUp = () => {
  const toast = useToast()
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

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(formik.values)
    },
  })

  const [signUpJobseekerMutation, { data, loading, error }] =
    useSignUpJobseekerMutation({
      variables: {
        login: formik.values.login,
        password: formik.values.login,
        role: formik.values.login,
        dateBirth: formik.values.login,
        email: formik.values.login,
        gender: formik.values.login,
        education_form: formik.values.login,
        end_date: formik.values.login,
        faculity: formik.values.login,
        group: formik.values.login,
        name_institution: formik.values.login,
        speciality: formik.values.login,
        start_date: formik.values.login,
        lastName: formik.values.login,
        middleName: formik.values.login,
        name: formik.values.login,
        phone: formik.values.login,
      },
    })

  const [isFirstInputFilled, setIsFirstInputFilled] = useState(false)

  const handleInputChange = (e: any) => {
    formik.handleChange(e)
    if (!isFirstInputFilled && e.target.name === 'password' && e.target.value) {
      setIsFirstInputFilled(true)
    }
  }

  const isJobseeker = formik.values.role === 'jobseeker'
  const isEmployer = formik.values.role === 'employer'

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
            <BasicInfo />
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
              <Button w="7rem" colorScheme="red" variant="solid">
                Submit
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
