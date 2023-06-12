import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Educations.module.scss'
import { Resumes } from '@/generated/projectR-hasura'
import { formatUniversityName } from '@/utils/formatUniversityName'

interface IEducations {
  userData: Resumes
}

function Educations({ userData }: IEducations) {
  const userEducations = userData.resumes_jobseeker?.jobseeker_educations

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Text className={styles.container_top_title}>Образование</Text>
      </div>
      {userEducations?.map((userEducation, index) => {
        return (
          <div className={styles.main_education}>
            <div className={styles.main_education_header}>
              <Text className={styles.main_education_header_educationName}>
                {formatUniversityName(
                  userEducation.jobseeker_education_educational_institution
                    ?.name_institution as string
                )}
                {', '}
                <span>{userEducation.degree_education}</span>
              </Text>
              <Text className={styles.main_education_header_educationDate}>
                {userEducation.start_date} - {userEducation.end_date}
              </Text>
            </div>
            <div className={styles.main_education_description}>
              <Text className={styles.main_education_description_faculity}>
                {userEducation.faculity}
              </Text>
              <Text className={styles.main_education_description_speciality}>
                {userEducation.speciality}
              </Text>
              <div className={styles.main_education_description_row}>
                <Text
                  className={styles.main_education_description_education_form}
                >
                  Форма обучения: <span>{userEducation.education_form}</span>
                </Text>
                <Text
                  className={styles.main_education_description_average_score}
                >
                  Средняя оценка: <span>{userEducation.average_score}</span>
                </Text>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Educations
