import React from 'react'
import styles from './Skills.module.scss'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import parse from 'html-react-parser'

interface ISkills {
  userData: Resumes
}

function Skills({ userData }: ISkills) {
  const skillsData = userData.resumes_skills

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Навыки</Text>
      </div>
      {skillsData.map((skill, index) => {
        return (
          <div className={styles.main_skills} key={index}>
            <Text>{parse(skill.description)}</Text>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
