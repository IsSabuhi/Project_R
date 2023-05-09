import { Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './Organization.module.scss'
import { ISignUpProps } from '@/pages/signup'

interface IOrganization {
  formData: ISignUpProps
  onChange: any
}

const Organization = ({ formData, onChange }: IOrganization) => {
  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Данные организации
      </Heading>

      <Flex>
        <Input
          id="name_organization"
          name="name_organization"
          isRequired
          placeholder="Название организации"
          mr="2%"
          value={formData.name_organization}
          onChange={onChange}
        />

        <Input
          id="inn_organization"
          name="inn_organization"
          isRequired
          placeholder="ИНН организации"
          mr="2%"
          value={formData.inn_organization}
          onChange={onChange}
        />
      </Flex>
    </div>
  )
}
export default Organization
