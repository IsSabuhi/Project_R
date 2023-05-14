import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/Home.module.scss'
import {
  useDeleteResumeMutation,
  useGetJobseekerResumesQuery,
} from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import ResumeCard from '@/components/Resume/ResumeCard/ResumeCard'
import { useSnackbar } from 'notistack'

const Home = () => {
  const { userProfileId } = useAuthContext()

  const { enqueueSnackbar } = useSnackbar()

  const { data, loading, error } = useGetJobseekerResumesQuery({
    variables: {
      _eq: userProfileId,
    },
  })

  const resumeData = data?.resumes

  const [deleteResumeMutation] = useDeleteResumeMutation({
    onCompleted() {
      return enqueueSnackbar('Резюме успешно удалено', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла ошибка! Попробуйте обновить страницу', {
        variant: 'error',
      })
    },
  })

  const speciality =
    data?.resumes[0].resume_jobseeker?.jobseeker_educations[0].speciality

  return (
    <div className={styles.container_home}>
      <Text fontWeight="semibold" fontSize="2xl" m="15px">
        Резюме
      </Text>

      <div className={styles.main_cards}>
        <ResumeNewCard speciality={speciality as string} />
        {resumeData?.map((item, index) => {
          return (
            <ResumeCard
              key={index}
              name_resume={item.resume_name}
              resume_id={item.resume_id}
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
