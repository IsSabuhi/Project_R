import React from 'react'
import styles from './Course.module.scss'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import { normalizeDate } from '@/utils/normalizeDate'

interface ICourse {
  userData: Resumes
}

function Course({ userData }: ICourse) {
  const courseData = userData.resumes_courses

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Курсы</Text>
      </div>
      {courseData.map((course, index) => {
        return (
          <div className={styles.main_course} key={index}>
            <div className={styles.main_course_header}>
              <Text className={styles.main_course_header_courseName}>
                {course.course_location}
              </Text>
              <Text className={styles.main_course_header_courseDate}>
                {normalizeDate(course.date_receipt as string)}
              </Text>
            </div>
            <Text className={styles.main_course_description}>
              {course.course_name}
            </Text>
          </div>
        )
      })}
    </div>
  )
}

export default Course
