import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './ProgrammingLanguages.module.scss'
import { Resumes } from '@/generated/projectR-hasura'
import parse from 'html-react-parser'

interface IProgrammingLanguages {
  userData: Resumes
}

function ProgrammingLanguages({ userData }: IProgrammingLanguages) {
  const programmingLanguagesData = userData.programming_languages

  return (
    <div className={styles.container}>
      <Text className={styles.container_title}>Языки программирования</Text>
      <div className={styles.container_content}>
        {programmingLanguagesData && (
          <Text>{parse(programmingLanguagesData)}</Text>
        )}
      </div>
    </div>
  )
}

export default ProgrammingLanguages
