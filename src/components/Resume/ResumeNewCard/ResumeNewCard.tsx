import React from 'react'
import styles from './ResumeNewCard.module.scss'
import { Text } from '@chakra-ui/react'

const ResumeNewCard = () => {
  return (
    <div className={styles.container}>
      <Text className={styles.container_text}>Создать новое резюме</Text>
    </div>
  )
}

export default ResumeNewCard
