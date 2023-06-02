import React from 'react'
import styles from './Course.module.scss'
import { Text } from '@chakra-ui/react'

function Course() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Курсы</Text>
      </div>
      <div className={styles.main_course}>
        <div className={styles.main_course_header}>
          <Text className={styles.main_course_header_courseName}>Udemy</Text>
          <Text className={styles.main_course_header_courseDate}>2020</Text>
        </div>
        <Text className={styles.main_course_description}>
          Углублённый курс фреймворков Python
        </Text>
      </div>
    </div>
  )
}

export default Course
