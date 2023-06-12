import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Hobby.module.scss'
import { Resumes } from '@/generated/projectR-hasura'

interface IHobby {
  userData: Resumes
}

function Hobby({ userData }: IHobby) {
  const hobbyData = userData.resumes_hobbies

  return (
    <div className={styles.container}>
      <Text className={styles.container_title}>Хобби</Text>
      {hobbyData.map((hobby, index) => {
        return (
          <div className={styles.container_content} key={index}>
            <li>{hobby.description}</li>
          </div>
        )
      })}
    </div>
  )
}

export default Hobby
