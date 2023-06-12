import React from 'react'
import styles from './AboutMe.module.scss'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import parse from 'html-react-parser'

interface IAboutMe {
  userData: Resumes
}

function AboutMe({ userData }: IAboutMe) {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>О себе</Text>
      </div>

      <div className={styles.main}>
        <Text>{parse(userData.about_me as string)}</Text>
      </div>
    </div>
  )
}

export default AboutMe
