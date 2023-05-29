import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/styles/Resume.module.scss'
import dynamic from 'next/dynamic'

const DynamicResumeContent = dynamic(
  () => import('@/modules/Resume/ResumeContent'),
  {
    ssr: false,
  }
)

function Resume() {
  const router = useRouter()

  const resume_id = router.query.id

  return (
    <div className={styles.container}>
      <DynamicResumeContent resume_id={resume_id as string} />
    </div>
  )
}

export default Resume
