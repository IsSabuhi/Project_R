import { Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './EmployerInfo.module.scss'

const EmployerInfo = () => {
  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Данные пользователя
      </Heading>

      <Flex>
        <Input
          id="employerLastName"
          name="employerLastName"
          isRequired
          mr="2%"
          placeholder="Фамилия"
        />

        <Input
          id="employerName"
          name="employerName"
          isRequired
          placeholder="Имя"
        />

        <Input
          id="employerMiddleName"
          name="employerMiddleName"
          ml="2%"
          placeholder="Отчество"
        />
      </Flex>

      <Input id="email" name="email" type="email" placeholder="Email" />

      <Input
        id="employerPhone"
        name="employerPhone"
        type="phone"
        placeholder="Телефон"
      />
    </div>
  )
}

export default EmployerInfo
