import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiMap } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa'
import styles from './HeaderContent.module.scss'
import { Resumes } from '@/generated/projectR-hasura'
import { joinName } from '@/utils/joinName'
import { calculateAgeWithUnit } from '@/utils/calculateAge'

interface IHeaderContent {
  resumeData: Resumes[]
}

const HeaderContent = ({ resumeData }: IHeaderContent) => {
  const userData = resumeData[0].resumes_jobseeker

  const jobseekerName = joinName(
    userData?.lastName as string,
    userData?.name as string,
    userData?.middleName as string
  )

  return (
    <div className={styles.container}>
      <Text className={styles.container_userName}>{jobseekerName}</Text>
      <Text className={styles.container_jobPosition}>
        {resumeData[0].desired_position || 'Должность не указана'}
      </Text>
      <Flex gap="55px">
        <Flex gap={2} alignItems="center">
          <Icon as={BiMap} />
          <Text>Россия, Норильск</Text>
        </Flex>
        <Flex gap={2} alignItems="center">
          <Icon as={FaInfo} />
          <Text>
            Возраст: {calculateAgeWithUnit(userData?.dateBirth as string)}
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default HeaderContent
