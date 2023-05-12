import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.scss'
import {
  Resumes,
  useDeleteResumeMutation,
  useGetJobseekerResumesQuery,
} from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import ResumeCard from '@/components/Resume/ResumeCard/ResumeCard'
import { useSnackbar } from 'notistack'
import { Status } from '@/constants'

const Home = () => {
  const { userProfileId } = useAuthContext()

  const { enqueueSnackbar } = useSnackbar()

  const [status, setStatus] = useState<Status>(Status.idle)

  const { data, loading, error } = useGetJobseekerResumesQuery({
    variables: {
      _eq: userProfileId,
    },
  })

  const resumeData = data?.resumes

  const [deleteResumeMutation] = useDeleteResumeMutation({
    onCompleted() {
      setStatus(Status.success)
      return enqueueSnackbar('Резюме успешно удалено', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла ошибка! Попробуйте обновить страницу', {
        variant: 'error',
      })
      setStatus(Status.error)
    },
  })

  return (
    <div className={styles.container_home}>
      <Text fontWeight="semibold" fontSize="2xl" m="15px">
        Резюме
      </Text>

      <div className={styles.main_cards}>
        <ResumeNewCard />
        {resumeData?.map((item, index) => {
          return (
            <ResumeCard
              key={index}
              name_resume={item.resume_name}
              deleteResume={() =>
                deleteResumeMutation({
                  variables: {
                    resume_name: item.resume_name,
                    resume_id: item.resume_id,
                  },
                })
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
