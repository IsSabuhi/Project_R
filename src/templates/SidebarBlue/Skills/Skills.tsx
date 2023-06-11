import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import { GrWorkshop } from 'react-icons/gr'
import styles from './Skills.module.scss'
import { Text } from '@chakra-ui/react'

const Skills = () => {
  return (
    <div className={styles.main}>
      <HeaderText title="Навыки" icon={GrWorkshop} />
      <Text className={styles.main_content}>
        PHP разработка: Опыт разработки платформы цифровых офисов на базе
        образовательных учреждений с использованием PHP. React разработка:
        Разработка и автоматизация проектно-сметной документации строительной
        фирмы с использованием React.
      </Text>
    </div>
  )
}

export default Skills
