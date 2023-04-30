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
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Фамилия
          </FormLabel>
          <Input id="first-name" isRequired placeholder="Фамилия" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Имя
          </FormLabel>
          <Input id="last-name" isRequired placeholder="Имя" />
        </FormControl>

        <FormControl ml="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Отчество
          </FormLabel>
          <Input id="first-name" placeholder="Отчество" />
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
    </div>
  )
}

export default BasicInfo
