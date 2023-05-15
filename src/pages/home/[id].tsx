import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.scss'
import {
  Resumes,
  useDeleteResumeMutation,
  useGetJobseekerResumesLazyQuery,
} from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import ResumeCard from '@/components/Resume/ResumeCard/ResumeCard'
import { useSnackbar } from 'notistack'

const Home = () => {
  const { userProfileId } = useAuthContext()

  const { enqueueSnackbar } = useSnackbar()

  const [resumeData, setResumeData] = useState<Resumes[]>()

  const [getResumeList] = useGetJobseekerResumesLazyQuery({
    variables: {
      _eq: userProfileId,
    },
    onCompleted(data) {
      setResumeData(data.resumes)
    },
  })

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

  useEffect(() => {
    getResumeList()
  }, [])

  const deleteResume = (resumeId: any) => {
    deleteResumeMutation({
      variables: {
        resume_id: resumeId,
      },
      onCompleted() {
        setResumeData((prevResumeData) =>
          prevResumeData?.filter((item) => item.resume_id !== resumeId)
        )
      },
      onError() {
        enqueueSnackbar('Произошла ошибка! Попробуйте обновить страницу', {
          variant: 'error',
        })
      },
    })
  }

  return (
    <div className={styles.container_home}>
      <Text fontWeight="semibold" fontSize="2xl" m="15px">
        Резюме
      </Text>

      <div className={styles.main_cards}>
        <ResumeNewCard getResumeList={getResumeList} />
        {resumeData?.map((item, index) => {
          return (
            <ResumeCard
              key={index}
              name_resume={item.resume_name}
              resume_id={item.resume_id}
              deleteResume={() => deleteResume(item.resume_id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
