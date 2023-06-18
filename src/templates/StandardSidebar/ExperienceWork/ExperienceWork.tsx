import React from 'react'
import styles from './ExperienceWork.module.scss'
import { Icon, Text } from '@chakra-ui/react'
import { MdOutlineWork } from 'react-icons/md'

const ExperienceWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div className={styles.container_header_icon}>
          <Icon as={MdOutlineWork} width="20px" height="20px" />
        </div>
        <Text className={styles.container_header_text}>Опыт работы</Text>
      </div>
      <div className={styles.main}>
        <div className={styles.main_content}>
          <div className={styles.main_content_work}>
            <Text className={styles.main_content_workDate}>
              Март 2015 — н.в.
            </Text>
            <div className={styles.main_content_work_text}>
              <Text className={styles.main_content_work_text_company}>
                InnovaGroup
              </Text>
              <Text className={styles.main_content_work_text_jobPosition}>
                {': '}frontend-разработчик
              </Text>
            </div>
            <Text fontSize="13px" pl="25px" pb="20px">
              Ведение проектов; Написание ТЗ для дизайнеров и back-end
              разработчиков; Верстка сайта и шаблонов для CMS; Проверка на
              кроссбраузерность; Рефакторинг чужого кода; Тестирование сайтов.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceWork
