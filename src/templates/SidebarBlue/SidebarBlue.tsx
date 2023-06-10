import React from 'react'
import styles from './SidebarBlue.module.scss'
import { Avatar, Flex, Icon, Text } from '@chakra-ui/react'
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaInfo } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi'
import HeaderContent from './HeaderContent/HeaderContent'

const SidebarBlue = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_avatar}>
          <Avatar />
        </div>

        <section className={styles.sidebar_contacts}>
          <div className={styles.sidebar_contacts_title}>
            <Text className={styles.sidebar_contacts_title_text}>Контакты</Text>
          </div>
          <Flex gap={4} alignItems="center" paddingInline="10px" mt={2}>
            <Icon as={HiOutlinePhone} />
            <Text>+7 900 000-00-01</Text>
          </Flex>
          <Flex gap={4} alignItems="center" paddingInline="10px">
            <Icon as={AiOutlineMail} />
            <Text>qwerty@gmail.com</Text>
          </Flex>
        </section>
        <section className={styles.sidebar_languages}>
          <div className={styles.sidebar_languages_title}>
            <Text className={styles.sidebar_languages_title_text}>Языки</Text>
          </div>
          <Flex justifyContent="space-between" paddingInline="10px" mt={2}>
            <Text>Английский</Text>
            <Text>C1 - Продвинутый</Text>
          </Flex>
        </section>
        <section className={styles.sidebar_hobby}>
          <div className={styles.sidebar_hobby_title}>
            <Text className={styles.sidebar_hobby_title_text}>Хобби</Text>
          </div>
          <div className={styles.sidebar_hobby_content}>
            <Text>- Спорт</Text>
            <Text>- Изучение Python</Text>
            <Text>- Разработка игр</Text>
          </div>
        </section>
      </div>
      <div className={styles.main}>
        <HeaderContent />
      </div>
    </div>
  )
}

export default SidebarBlue
