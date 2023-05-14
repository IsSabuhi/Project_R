import React from 'react'
import styles from './Education.module.scss'
import { Text } from '@chakra-ui/react'

function Education() {
  return (
    <div className={styles.container}>
      <Text fontWeight="semibold" fontSize="2xl">
        Образование
      </Text>
      <div className={styles.main}></div>
    </div>
  )
}

export default Education
