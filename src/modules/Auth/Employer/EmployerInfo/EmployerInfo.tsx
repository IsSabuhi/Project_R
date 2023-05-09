import { Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './EmployerInfo.module.scss'
import { ISignUpProps } from '@/pages/signup'

interface IEmployerInfo {
  formData: ISignUpProps
  onChange: any
}

const EmployerInfo = ({ formData, onChange }: IEmployerInfo) => {
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
          value={formData.lastName}
          onChange={onChange}
        />

        <Input
          id="name"
          name="name"
          isRequired
          placeholder="Имя"
          value={formData.name}
          onChange={onChange}
        />
      </Flex>

      <Input
        id="middleName"
        name="middleName"
        placeholder="Отчество"
        value={formData.middleName}
        onChange={onChange}
      />

      <Input
        id="phone"
        name="phone"
        type="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={onChange}
      />
    </div>
  )
}

export default EmployerInfo
