import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Educations.module.scss'

function Educations() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Образование</Text>
      </div>
      <div className={styles.main_education}>
        <div className={styles.main_education_header}>
          <Text className={styles.main_education_header_educationName}>
            Заполярный государственный университет им. Н.М. Федоровского,
            Бакалавр
          </Text>
          <Text className={styles.main_education_header_educationDate}>
            2019 - 2023
          </Text>
        </div>
        <div className={styles.main_education_description}>
          <Text className={styles.main_education_description_faculity}>
            Факультет электроэнергетики, экономики и управления
          </Text>
          <Text className={styles.main_education_description_speciality}>
            Информационные системы и технологии (в строительстве)
          </Text>
          <div className={styles.main_education_description_row}>
            <Text className={styles.main_education_description_education_form}>
              Форма обучения: <span>Очная</span>
            </Text>
            <Text className={styles.main_education_description_average_score}>
              Средняя оценка: <span>5</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educations
