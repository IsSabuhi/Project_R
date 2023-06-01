import React from 'react'
import styles from './AboutMe.module.scss'
import { Text } from '@chakra-ui/react'

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>О себе</Text>
      </div>

      <div className={styles.main}>
        Работаю по различным методологиям: Waterfall, Agile, Scrum. Умею
        разбираться в чужом коде. Опыт работы в мультиязычной команде,
        проведение ретроспектив. Веду деловую переписку на английском языке.
      </div>
    </div>
  )
}

export default AboutMe
