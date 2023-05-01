import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import styles from './BasicInfo.module.scss'

const BasicInfo = () => {
  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Данные пользователя
      </Heading>
      <Flex>
        <Input
          id="lastName"
          name="lastName"
          isRequired
          mr="2%"
          placeholder="Фамилия"
        />

        <Input id="name" name="name" isRequired placeholder="Имя" />

        <Input
          id="middleName"
          name="middleName"
          ml="2%"
          placeholder="Отчество"
        />
      </Flex>
      <Flex display="flex" alignItems="center">
        <FormControl mr="2%">
          <FormLabel htmlFor="dateBirth" fontWeight={'normal'}>
            Дата рождения
          </FormLabel>
          <Input
            id="dateBirth"
            name="dateBirth"
            placeholder="Дата рождения"
            type="date"
          />
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
    </div>
  )
}

export default BasicInfo
