import React from 'react'
import styles from './ClassicTemplate.module.scss'
import { Text } from '@chakra-ui/react'

function ClassicTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_top_text}>
          <Text>Jobseeker name</Text>
          <Text>Jobseeker position</Text>
          <div className={styles.container_top__text_bottom}>
            <Text>Jobseeker city</Text>
            <Text>Jobseeker age</Text>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main_left}>
          <section className={styles.main_left_experienceWork}></section>
        </div>
        <div className={styles.main_right}></div>
      </div>
    </div>
  )
}

export default ClassicTemplate
