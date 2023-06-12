import React from 'react'
import styles from './Projects.module.scss'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'

interface IProjects {
  userData: Resumes
}

const Projects = ({ userData }: IProjects) => {
  const projectsData = userData.resumes_projects
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Проекты</Text>
      </div>
      {projectsData.map((project, index) => {
        return (
          <div className={styles.main_project} key={index}>
            <Text className={styles.main_project_name}>
              {project.project_name}
            </Text>
            <Text className={styles.main_project_organization}>
              {project.name_organization}
            </Text>
            <Text className={styles.main_project_description}>
              {project.description}
            </Text>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
