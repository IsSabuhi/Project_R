import React from 'react'
import styles from './Project.module.scss'
import HeaderText from '../HeaderText/HeaderText'
import { AiFillProject } from 'react-icons/ai'
import { Text } from '@chakra-ui/react'

const Project = () => {
  return (
    <div className={styles.main}>
      <HeaderText title="Проекты" icon={AiFillProject} />
      <div className={styles.main_content}>
        <div className={styles.main_content_top}>
          <Text className={styles.main_content_top_projectName}>
            Project LB
          </Text>
          <Text className={styles.main_content_top_companyName}>HowToWork</Text>
        </div>
        <Text className={styles.main_content_description}>
          Разработка эффективных и современных Web приложений. Создание
          качественного, легкоподдерживаемого кода. Доработка существующих
          проектов.
        </Text>
      </div>
    </div>
  )
}

export default Project
