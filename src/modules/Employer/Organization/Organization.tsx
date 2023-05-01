import { Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './Organization.module.scss'

const Organization = () => {
  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Данные организации
      </Heading>

      <Flex>
        <Input
          id="nameOrganization"
          name="nameOrganization"
          isRequired
          placeholder="Название организации"
          mr="2%"
        />

        <Input
          id="innOrganization"
          name="innOrganization"
          isRequired
          placeholder="ИНН организации"
          mr="2%"
        />
      </Flex>
    </div>
  )
}
export default Organization
