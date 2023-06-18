import React from 'react'
import styles from './StandardSidebar.module.scss'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'
import Contacts from './Contacts/Contacts'
import { BiMap } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa'
import ExperienceWork from './ExperienceWork/ExperienceWork'

const StandardSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_header}>
          <Box
            width="120px"
            height="155px"
            boxShadow="0 0 2px rgba(0,0,0,0.5)"
            borderRadius="10px"
          >
            <Icon as={BsFillPersonFill} width="100%" height="100%" />
          </Box>
          <div className={styles.main_header_text}>
            <Text className={styles.main_header_text_userName}>
              Исрафилов Сабухи Мадад оглы
            </Text>
            <Text className={styles.main_header_text_jobPosition}>
              FRONTEND-разработчик
            </Text>
            <Flex gap={2} alignItems="center" mt={1}>
              <Icon as={BiMap} color="#48c4ca" />
              <Text className={styles.main_header_text_city}>
                Россия, Норильск
              </Text>
            </Flex>
            <Flex gap={2} alignItems="center" mt={2}>
              <Icon as={FaInfo} color="#48c4ca" />
              <Text className={styles.main_header_text_age}>Возраст: {21}</Text>
            </Flex>
          </div>
        </div>
        <section>
          <ExperienceWork />
        </section>
      </div>
      <div className={styles.sidebar}>
        <section className={styles.sidebar_contacts}>
          <Contacts />
        </section>
      </div>
    </div>
  )
}

export default StandardSidebar
