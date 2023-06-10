import ResumeCard from '@/components/Resume/ResumeCard/ResumeCard'
import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import React from 'react'
import styles from './JobseekerHomeContent.module.scss'
import { LazyQueryExecFunction } from '@apollo/client'
import {
  Exact,
  GetJobseekerResumesQuery,
  InputMaybe,
  Resumes,
} from '@/generated/projectR-hasura'
import { Flex, Text } from '@chakra-ui/react'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'

interface IJobseekerHomeContent {
  getResumeList: LazyQueryExecFunction<
    GetJobseekerResumesQuery,
    Exact<{
      _eq?: InputMaybe<string> | undefined
    }>
  >
  resumeData: Resumes[] | undefined
  deleteResume: Function
}

const JobseekerHomeContent = ({
  getResumeList,
  resumeData,
  deleteResume,
}: IJobseekerHomeContent) => {
  return (
    <div className={styles.container}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="2xl" m="15px">
          Мои резюме
        </Text>
        <div className={styles.container_avatarBox}>
          {/* <NotificationBadge /> */}
          <AvatarBox />
        </div>
      </Flex>
      <div className={styles.main}>
        <ResumeNewCard getResumeList={getResumeList} />

        {resumeData?.map((item, index) => {
          return (
            <ResumeCard
              key={index}
              resume_name={item.resume_name}
              data_create={item.data_create as string}
              resume_id={item.resume_id}
              deleteResume={() => deleteResume(item.resume_id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default JobseekerHomeContent
