import React from 'react'
import styles from './Project.module.scss'
import HeaderText from '../HeaderText/HeaderText'
import { AiFillProject } from 'react-icons/ai'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'

interface IProject {
  resumeData: Resumes[]
}

const Project = ({ resumeData }: IProject) => {
  const projectsData = resumeData[0].resumes_projects

  return (
    <div className={styles.main}>
      <HeaderText title="Проекты" icon={AiFillProject} />
      {projectsData.map((project, index) => {
        return (
          <div className={styles.main_content} key={index}>
            <div className={styles.main_content_top}>
              <Text className={styles.main_content_top_projectName}>
                {project.project_name}
              </Text>
              <Text className={styles.main_content_top_companyName}>
                {project.name_organization}
              </Text>
            </div>
            <Text className={styles.main_content_description}>
              {project.description}
            </Text>
          </div>
        )
      })}
    </div>
  )
}

export default Project
