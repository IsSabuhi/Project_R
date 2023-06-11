import React from 'react'
import styles from './ExperienceWork.module.scss'
import HeaderText from '../HeaderText/HeaderText'
import { MdOutlineWork } from 'react-icons/md'
import { Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import { normalizeDate } from '@/utils/normalizeDate'

interface IExperienceWork {
  resumeData: Resumes[]
}

const ExperienceWork = ({ resumeData }: IExperienceWork) => {
  const experienceWorks = resumeData[0].experience_works

  return (
    <div className={styles.main}>
      <HeaderText title="Опыт работы" icon={MdOutlineWork} />
      {experienceWorks.map((experienceWork, index) => {
        return (
          <div className={styles.main_content} key={index}>
            <Text className={styles.main_content_left_date}>
              {normalizeDate(experienceWork.date_employment as string)} -
              {experienceWork.date_dismissal === ''
                ? ' по н.в'
                : normalizeDate(experienceWork.date_dismissal as string)}
            </Text>
            <div className={styles.main_content_right}>
              <Text className={styles.main_content_right_jobName}>
                {experienceWork.name_company}
              </Text>
              <Text className={styles.main_content_right_jobPosition}>
                {experienceWork.jobposition}
              </Text>
              <Text className={styles.main_content_right_description}>
                {experienceWork.description}
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceWork
