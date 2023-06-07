import ResumeCard from '@/components/Resume/ResumeCard/ResumeCard'
import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import {
  Resumes,
  useDeleteResumeMutation,
  useGetJobseekerAllResumesQuery,
  useGetJobseekerResumesLazyQuery,
} from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.scss'
import ResumeCardView from '@/components/Resume/ResumeCardView/ResumeCardView'
import { joinName } from '@/utils/joinName'

function HomeContent() {
  const { userProfileId, role } = useAuthContext()

  const { enqueueSnackbar } = useSnackbar()

  const [resumeData, setResumeData] = useState<Resumes[]>()

  const [getResumeList] = useGetJobseekerResumesLazyQuery({
    variables: {
      _eq: userProfileId,
    },
    onCompleted(data) {
      setResumeData(data.resumes as Resumes[])
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

  const deleteResume = (resumeId: string) => {
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

  const { data, loading, error } = useGetJobseekerAllResumesQuery({})

  const resumesJobseekerData = data?.resumes

  useEffect(() => {
    getResumeList()
  }, [])

  return (
    <>
      {role === 'jobseeker' ? (
        <div className={styles.main_cards}>
          <ResumeNewCard getResumeList={getResumeList} />

          {resumeData?.map((item, index) => {
            return (
              <ResumeCard
                key={index}
                resume_name={item.resume_name}
                resume_id={item.resume_id}
                deleteResume={() => deleteResume(item.resume_id)}
              />
            )
          })}
        </div>
      ) : (
        <div className={styles.main_cards}>
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
      )}
    </>
  )
}

export default HomeContent
