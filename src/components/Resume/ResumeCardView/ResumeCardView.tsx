import React from 'react'
import styles from './ResumeCardView.module.scss'
import Link from 'next/link'

interface IResumeCardView {
  userName: string
}

function ResumeCardView({ userName }: IResumeCardView) {
  return (
    <div className={styles.container}>
      <Link href="">{userName}</Link>
    </div>
  )
}

export default ResumeCardView
