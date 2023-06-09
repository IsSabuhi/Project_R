import React from 'react'
import styles from './ResumeCardView.module.scss'
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { MdOutlineMoreVert } from 'react-icons/md'
import { Resumes } from '@/generated/projectR-hasura'
import { calculateAgeWithUnit } from '@/utils/calculateAge'
import { useRouter } from 'next/router'

interface IResumeCardView {
  resume_id: string
  userName: string
  resume: Resumes
  isVerified: boolean
}

interface ColorMap {
  [key: string]: string
}

// TODO Функция для средней оценки
const getColorForScore = (score: string): string => {
  const averageScore = parseFloat(score)
  const colorMap: ColorMap = {
    '5': 'green',
    '4.5': 'blue',
    '3.5': 'yellow',
  }

  let textColor = 'red'

  for (const key of Object.keys(colorMap)) {
    const threshold = parseFloat(key)
    if (averageScore <= threshold) {
      textColor = colorMap[key]
      break
    }
  }

  return textColor
}

function ResumeCardView({
  resume_id,
  userName,
  resume,
  isVerified,
}: IResumeCardView) {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_top}>
          <Text className={styles.main_jobPosition}>
            {resume.desired_position}
          </Text>
          {isVerified && (
            <Menu>
              <MenuButton>
                <MdOutlineMoreVert />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => router.push(`/resumeView/${resume_id}`)}
                >
                  Открыть
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </div>
        <Text className={styles.main_jobseekerName}>{userName}</Text>

        <Text className={styles.main_specialty}>
          Специальность:{' '}
          <span>
            {resume.resumes_jobseeker?.jobseeker_educations &&
            resume.resumes_jobseeker.jobseeker_educations.length > 0
              ? resume.resumes_jobseeker.jobseeker_educations[0].speciality
              : 'Нет данных'}
          </span>
        </Text>

        <Flex alignItems="center" gap="10px">
          <Text className={styles.main_specialty}>Средняя оценка:</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color={getColorForScore('4,78')}
          >
            {resume.resumes_jobseeker?.jobseeker_educations[0].average_score}
          </Text>
        </Flex>
        <Text className={styles.main_specialty}>
          Возраст:{' '}
          <span>
            {calculateAgeWithUnit(resume.resumes_jobseeker?.dateBirth)}
          </span>
        </Text>
        <Text className={styles.main_specialty}>
          Пол: <span>{resume.resumes_jobseeker?.gender}</span>
        </Text>
      </div>
    </div>
  )
}

export default ResumeCardView
