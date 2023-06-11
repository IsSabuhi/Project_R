import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import { RiAccountCircleLine } from 'react-icons/ri'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  return (
    <div className={styles.main}>
      <HeaderText title="О себе" icon={RiAccountCircleLine} />
      <div className={styles.main_content}></div>
    </div>
  )
}

export default AboutMe
