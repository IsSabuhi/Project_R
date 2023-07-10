import React from 'react'
import styles from './Languages.module.scss'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { BiWorld } from 'react-icons/bi'

const Languages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div className={styles.container_title_icon}>
          <Icon as={BiWorld} width="20px" height="20px" />
        </div>
        <Text className={styles.container_title_text}>Контакты</Text>
      </div>
      <div className={styles.container_contents}>
        <div className={styles.container_contents_content}>
          <div className={styles.container_contents_content_title}>
            <Text>Английский</Text>
            asd
          </div>
          <Text>C1 - Продвинутый</Text>
        </div>
      </div>
    </div>
  )
}

export default Languages
