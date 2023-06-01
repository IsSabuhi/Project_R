import React from 'react'
import styles from './Skills.module.scss'
import { Text } from '@chakra-ui/react'

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Навыки</Text>
      </div>
      <div className={styles.main_skills}>
        Django, Celery, DRF, Flask PyTest, Git, Atlassian Jira SQLalchemy,
        MongoDB REST, Linux Тестирование, ООП
      </div>
    </div>
  )
}

export default Skills
