import React from 'react'
import styles from './ExperienceWork.module.scss'
import HeaderText from '../HeaderText/HeaderText'
import { MdOutlineWork } from 'react-icons/md'
import { Text } from '@chakra-ui/react'

const ExperienceWork = () => {
  return (
    <div className={styles.main}>
      <HeaderText title="Опыт работы" icon={MdOutlineWork} />
      <div className={styles.main_content}>
        <Text className={styles.main_content_left_date}>01.2020 - 10.2022</Text>
        <div className={styles.main_content_right}>
          <Text className={styles.main_content_right_jobName}>
            ООО HowToWork
          </Text>
          <Text className={styles.main_content_right_jobPosition}>
            Программист
          </Text>
          <Text className={styles.main_content_right_description}>
            Оптимизировал код разработчика с 60 до 35 тыс. строк. Улучшил
            скорость сайта 95-98 PageSpeed
          </Text>
        </div>
      </div>
    </div>
  )
}

export default ExperienceWork
