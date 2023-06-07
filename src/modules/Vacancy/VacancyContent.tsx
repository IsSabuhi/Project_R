import React from 'react'
import styles from './VacancyContent.module.scss'
import VacancyCard from './VacancyCard/VacancyCard'

const VacancyContent = () => {
  return (
    <div className={styles.container}>
      <VacancyCard />
    </div>
  )
}

export default VacancyContent
