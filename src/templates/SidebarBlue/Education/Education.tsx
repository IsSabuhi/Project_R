import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import styles from './Education.module.scss'
import { IoSchoolSharp } from 'react-icons/io5'
import { Flex, Text } from '@chakra-ui/react'

const Education = () => {
  return (
    <div className={styles.main}>
      <HeaderText title="Образование" icon={IoSchoolSharp} />
      <div className={styles.main_content}>
        <div className={styles.main_content_left}>
          <Text className={styles.main_content_left_date}>2019 - 2023</Text>
        </div>
        <div className={styles.main_content_right}>
          <Flex alignItems="center" gap={2}>
            <Text className={styles.main_content_right_univerName}>
              Заполярный госудастрвенный университет{','}
            </Text>
            <Text className={styles.main_content_right_degree_education}>
              Бакалавр
            </Text>
          </Flex>
          <Text className={styles.main_content_right_faculity}>
            Факультет электроэнергетики, экономики и управления
          </Text>
          <Text className={styles.main_content_right_speciality}>
            Информационные системы и технологии (в строительстве)
          </Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Text className={styles.main_content_right_education_form}>
              Форма обучения: <span>Очная</span>
            </Text>
            <Text className={styles.main_content_right_average_score}>
              Средняя оценка: <span>5</span>
            </Text>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default Education
