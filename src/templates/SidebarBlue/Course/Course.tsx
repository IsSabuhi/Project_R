import React from 'react'
import styles from './Course.module.scss'
import HeaderText from '../HeaderText/HeaderText'
import { RiFileList3Fill } from 'react-icons/ri'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import { normalizeDate } from '@/utils/normalizeDate'

interface ICourse {
  resumeData: Resumes[]
}

const Course = ({ resumeData }: ICourse) => {
  const courses = resumeData[0].resumes_courses

  return (
    <div className={styles.main}>
      <HeaderText title="Курсы" icon={RiFileList3Fill} />
      {courses.map((course, index) => {
        return (
          <div className={styles.main_content} key={index}>
            <div className={styles.main_content_left}>
              <Text className={styles.main_content_left_date}>
                {normalizeDate(course.date_receipt as string)}
              </Text>
            </div>
            <div className={styles.main_content_right}>
              <Text className={styles.main_content_right_courseName}>
                {course.course_location}
              </Text>
              <Text className={styles.main_content_right_courseDescription}>
                {course.course_name}
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Course
