import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import { GrWorkshop } from 'react-icons/gr'
import styles from './Skills.module.scss'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import parse from 'html-react-parser'

interface ISkills {
  resumeData: Resumes[]
}

const Skills = ({ resumeData }: ISkills) => {
  const skillsData = resumeData[0].resumes_skills
  return (
    <div className={styles.main}>
      <HeaderText title="Навыки" icon={GrWorkshop} />
      {skillsData.map((skill, index) => {
        return (
          <Text className={styles.main_content} key={index}>
            {parse(skill.description)}
          </Text>
        )
      })}
    </div>
  )
}

export default Skills
