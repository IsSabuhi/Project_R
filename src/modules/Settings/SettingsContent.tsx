import React from 'react'
import { useAuthContext } from '@/hooks/use-auth-context'
import JobseekerSettingsPage from './Jobseeker/JobseekerSettingsPage'
import EmployerSettingsPage from './Employer/EmployerSettingsPage'
import styles from '@/styles/Settings.module.scss'

export default function SettingsContent() {
  const { role } = useAuthContext()
  return (
    <div className={styles.main}>
      {role === 'jobseeker' ? (
        <JobseekerSettingsPage />
      ) : (
        <EmployerSettingsPage />
      )}
    </div>
  )
}
