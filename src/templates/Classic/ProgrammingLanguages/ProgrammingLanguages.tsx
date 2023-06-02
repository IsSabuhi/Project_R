import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './ProgrammingLanguages.module.scss'

function ProgrammingLanguages() {
  return (
    <div className={styles.container}>
      <Text className={styles.container_title}>Языки программирования</Text>
      <div className={styles.container_content}>
        <li>Python</li>
        <li>C#</li>
      </div>
    </div>
  )
}

export default ProgrammingLanguages
