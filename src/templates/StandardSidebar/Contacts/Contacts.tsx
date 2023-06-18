import React from 'react'
import styles from './Contacts.module.scss'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { GrMail } from 'react-icons/gr'
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div className={styles.container_title_icon}>
          <Icon as={GrMail} width="20px" height="20px" />
        </div>
        <Text className={styles.container_title_text}>Контакты</Text>
      </div>
      <div className={styles.container_content}>
        <Flex gap={4} alignItems="center" paddingInline="10px" mt={2}>
          <Icon as={HiOutlinePhone} color="#48c4ca" />
          <Text>{'Номер не указан'}</Text>
        </Flex>
        <Flex gap={4} alignItems="center" paddingInline="10px">
          <Icon as={AiOutlineMail} color="#48c4ca" />
          <Text>{'Почта не указана'}</Text>
        </Flex>
      </div>
    </div>
  )
}

export default Contacts
