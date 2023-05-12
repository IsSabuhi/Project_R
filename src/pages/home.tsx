import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/Home.module.scss'
import { useGetJobseekerResumesQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'

const Home = () => {
  const { userProfileId } = useAuthContext()

  const { data, loading, error } = useGetJobseekerResumesQuery({
    variables: {
      _eq: userProfileId,
    },
  })

  const resumeData = data?.resumes

  return (
    <div className={styles.container_home}>
      <Text fontWeight="semibold" fontSize="2xl" m="15px">
        Резюме
      </Text>

      <div className={styles.main_cards}>
        <ResumeNewCard />
        {resumeData?.map((item, index) => {
          return <div key={index}></div>
        })}
      </div>
    </div>
  )
}

export default Home
