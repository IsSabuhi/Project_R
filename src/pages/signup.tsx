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

  const [isDisabled, setIsDisabled] = useState(true)

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(formik.values)
    },
  })

  console.log(formik.values)

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
          formik.values.role === 'jobseeker' ? (
            <BasicInfo />
          ) : formik.values.role === 'employer' ? (
            <>HUIHUIHUI</>
          ) : null
        ) : formik.values.role === 'jobseeker' ? (
          <EducationsInfo />
        ) : formik.values.role === 'employer' ? (
          <>12321</>
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
