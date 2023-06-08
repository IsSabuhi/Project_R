import React from 'react'
import styles from './EmployerHomeContent.module.scss'
import ResumeCardView from '@/components/Resume/ResumeCardView/ResumeCardView'
import { joinName } from '@/utils/joinName'
import { Resumes } from '@/generated/projectR-hasura'
import { Flex, Text } from '@chakra-ui/react'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'

interface IEmployerHomeContent {
  resumesJobseekerData: Resumes[]
}

const EmployerHomeContent = ({
  resumesJobseekerData,
}: IEmployerHomeContent) => {
  return (
    <div className={styles.container}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="2xl" m="15px">
          Резюме
        </Text>
        <div className={styles.container_avatarBox}>
          {/* <NotificationBadge /> */}
          <AvatarBox />
        </div>
      </Flex>
      <div className={styles.main}>
        {resumesJobseekerData?.map((resume, index) => {
          return (
            <ResumeCardView
              key={index}
              userName={joinName(
                resume.resumes_jobseeker?.lastName!,
                resume.resumes_jobseeker?.name!,
                resume.resumes_jobseeker?.middleName!
              )}
              resume={resume as Resumes}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EmployerHomeContent
