import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Hobby.module.scss'

function Hobby() {
  return (
    <div className={styles.container}>
      <Text className={styles.container_title}>Хобби</Text>
      <div className={styles.container_content}>
        <li>Участие в Хакатонах</li>
        <li>Увлекаюсь AI, ML, DL</li>
        <li>Геймдев</li>
      </div>
    </div>
  )
}

export default Hobby
