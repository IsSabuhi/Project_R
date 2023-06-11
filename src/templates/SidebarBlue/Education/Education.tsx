import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import styles from './Education.module.scss'
import { IoSchoolSharp } from 'react-icons/io5'
import { Flex, Text } from '@chakra-ui/react'
import { Resumes } from '@/generated/projectR-hasura'
import { formatUniversityName } from '@/utils/formatUniversityName'

interface IEducation {
  resumeData: Resumes[]
}

const Education = ({ resumeData }: IEducation) => {
  const educationsData = resumeData[0].resumes_jobseeker?.jobseeker_educations

  return (
    <div className={styles.main}>
      <HeaderText title="Образование" icon={IoSchoolSharp} />
      {educationsData?.map((education, index) => {
        return (
          <div className={styles.main_content} key={index}>
            <div className={styles.main_content_left}>
              <Text className={styles.main_content_left_date}>
                {education.start_date} - {education.end_date}
              </Text>
            </div>
            <div className={styles.main_content_right}>
              <Flex alignItems="center" gap={2}>
                <Text className={styles.main_content_right_univerName}>
                  {formatUniversityName(
                    education.jobseeker_education_educational_institution
                      ?.name_institution!
                  )}
                  {', '}
                  <span>{education.degree_education}</span>
                </Text>
              </Flex>
              <Text className={styles.main_content_right_faculity}>
                {education.faculity}
              </Text>
              <Text className={styles.main_content_right_speciality}>
                {education.speciality}
              </Text>
              <Flex alignItems="center" justifyContent="space-between">
                <Text className={styles.main_content_right_education_form}>
                  Форма обучения: <span>{education.education_form}</span>
                </Text>
                <Text className={styles.main_content_right_average_score}>
                  Средняя оценка:{' '}
                  <span>{Number(education.average_score).toFixed(1)}</span>
                </Text>
              </Flex>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education
