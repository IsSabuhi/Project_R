import InputField from '@/components/InputField/InputField'
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
  Link,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import styles from '@/styles/SignUp.module.scss'
import { APP_URLS } from '@/configs/urls'
import { Form, Formik } from 'formik'
import AccountInfo from '@/modules/AccountInfo/AccountInfo'
import BasicInfo from '@/modules/BasicInfo/BasicInfo'

const initialValues = {
  username: '',
  password: '',
  role: '',
  education: '',
  organization: '',
}

const EducationsInfo = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Образование
      </Heading>
      <Flex flexDirection="column">
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Наименование образовательного учреждения
          </FormLabel>
          <InputField
            id="first-name"
            isRequired
            placeholder="Наименование образовательного учреждения"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Наименование факультета
          </FormLabel>
          <InputField id="first-name" isRequired placeholder="Факультет" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Наименование специальности
          </FormLabel>
          <InputField id="first-name" isRequired placeholder="Специальность" />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Форма обучения
          </FormLabel>
          <InputField id="first-name" isRequired placeholder="Форма обучения" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Группа
          </FormLabel>
          <InputField id="first-name" placeholder="Группа" />
        </FormControl>
      </Flex>

      <Flex display="flex" alignItems="center">
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Дата поступления
          </FormLabel>
          <Input
            id="first-name"
            isRequired
            placeholder="Дата поступления"
            type="date"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Дата окончания
          </FormLabel>
          <Input
            id="first-name"
            placeholder="Дата окончания"
            type="date"
            disabled={isChecked}
          />
        </FormControl>
      </Flex>
      <Checkbox
        isChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      >
        По настоящее время
      </Checkbox>
    </div>
  )
}

const SignUp = () => {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const [role, setRole] = useState('')

  const [formData, setFormData] = useState(initialValues)

  const handleRoleChange = (newRole: any) => {
    setRole(newRole)
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
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        <Formik
          initialValues={formData}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ values }) => (
            <>
              {step === 1 ? (
                <BasicInfo />
              ) : step === 2 ? (
                values.role === 'jobseeker' ? (
                  <>1233213123</>
                ) : values.role === 'employer' ? (
                  <BasicInfo />
                ) : null
              ) : (
                <>...</>
              )}
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
                      isDisabled={step === 3}
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
            </>
          )}
        </Formik>
      </Box>
    </div>
  )
}

export default SignUp
