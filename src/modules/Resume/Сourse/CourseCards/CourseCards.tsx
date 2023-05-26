import React from 'react'
import styles from './CourseCards.module.scss'
import { Button, Text } from '@chakra-ui/react'

interface ICourseCards {
  course_name: string
  course_location: string
  date_receipt: string
  handleDelete: () => void
}

function CourseCards({
  course_name,
  course_location,
  date_receipt,
  handleDelete,
}: ICourseCards) {
  return (
    <div className={styles.container}>
      <Text className={styles.container_text}>
        Название курса: <span>{course_name}</span>
      </Text>
      <Text className={styles.container_text}>
        Проводившая организация: <span>{course_location}</span>
      </Text>
      <Text className={styles.container_text}>
        Год окончания: <span>{date_receipt}</span>
      </Text>
      <Button
        colorScheme="red"
        width="50px"
        height="25px"
        fontSize="11px"
        ml="auto"
        onClick={() => handleDelete()}
      >
        Удалить
      </Button>
    </div>
  )
}

export default CourseCards
