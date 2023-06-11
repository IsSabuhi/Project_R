import React from 'react'
import styles from './Course.module.scss'
import HeaderText from '../HeaderText/HeaderText'
import { RiFileList3Fill } from 'react-icons/ri'
import { Text } from '@chakra-ui/react'

const Course = () => {
  return (
    <div className={styles.main}>
      <HeaderText title="Курсы" icon={RiFileList3Fill} />
      <div className={styles.main_content}>
        <div className={styles.main_content_left}>
          <Text className={styles.main_content_left_date}>2020</Text>
        </div>
        <div className={styles.main_content_right}>
          <Text className={styles.main_content_right_courseName}>Skillbox</Text>
          <Text className={styles.main_content_right_courseDescription}>
            PHP-фреймворк Symfony
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Course
