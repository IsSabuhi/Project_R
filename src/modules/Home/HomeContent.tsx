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
import JobseekerHomeContent from './JobseekerHomeContent/JobseekerHomeContent'
import EmployerHomeContent from './EmployerHomeContent/EmployerHomeContent'

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
        <JobseekerHomeContent
          getResumeList={getResumeList}
          resumeData={resumeData}
          deleteResume={deleteResume}
        />
      ) : (
        <EmployerHomeContent
          resumesJobseekerData={resumesJobseekerData as Resumes[]}
        />
      )}
    </>
  )
}

export default HomeContent
