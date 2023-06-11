import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import { RiAccountCircleLine } from 'react-icons/ri'
import styles from './AboutMe.module.scss'
import { Resumes } from '@/generated/projectR-hasura'
import parse from 'html-react-parser'
import { Text } from '@chakra-ui/react'

interface IAboutMe {
  resumeData: Resumes[]
}

const AboutMe = ({ resumeData }: IAboutMe) => {
  const aboutMeData = resumeData[0].about_me

  return (
    <div className={styles.main}>
      <HeaderText title="О себе" icon={RiAccountCircleLine} />
      <div className={styles.main_content}>
        <Text>{parse(aboutMeData as string)}</Text>
      </div>
    </div>
  )
}

export default AboutMe
