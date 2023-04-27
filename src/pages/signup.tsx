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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from '@/styles/SignUp.module.scss'
import { APP_URLS } from '@/configs/urls'

const BasicInfo = () => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Регистрация пользователя
      </Heading>
      <Flex>
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Фамилия
          </FormLabel>
          <InputField id="first-name" isRequired placeholder="Фамилия" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Имя
          </FormLabel>
          <InputField id="last-name" isRequired placeholder="Имя" />
        </FormControl>

        <FormControl ml="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Отчество
          </FormLabel>
          <InputField id="first-name" placeholder="Отчество" />
        </FormControl>
      </Flex>
      <Flex display="flex" alignItems="center">
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Дата рождения
          </FormLabel>
          <Input id="first-name" placeholder="Дата рождения" type="date" />
        </FormControl>

        <FormControl display="flex" flexDirection="column">
          <FormLabel htmlFor="gender" fontWeight={'normal'}>
            Пол
          </FormLabel>
          <RadioGroup>
            <Stack spacing={10} direction="row">
              <Radio value="1">Мужской</Radio>
              <Radio value="2">Женский</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email
        </FormLabel>
        <InputField id="email" type="email" isRequired placeholder="Email" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Пароль
        </FormLabel>
        <InputGroup size="md">
          <InputField
            id="password"
            name="password"
            pr="4.5rem"
            isRequired
            type={show ? 'text' : 'password'}
            placeholder="Введите пароль"
          />
        </InputGroup>
      </FormControl>
    </>
  )
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
        {step === 1 ? (
          <BasicInfo />
        ) : step === 2 ? (
          <EducationsInfo />
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
      </Box>
    </div>
  )
}

export default SignUp
