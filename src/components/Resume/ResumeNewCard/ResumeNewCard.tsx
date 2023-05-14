import React from 'react'
import styles from './ResumeNewCard.module.scss'
import { Text, useDisclosure } from '@chakra-ui/react'
import ResumeModalCreate from '../ResumeModalCreate/ResumeModalCreate'

interface IResumeNewCard {
  speciality: string
}

const ResumeNewCard = ({ speciality }: IResumeNewCard) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div className={styles.container} onClick={onOpen}>
        <Text className={styles.container_text}>Создать новое резюме</Text>
      </div>
      <ResumeModalCreate
        isOpen={isOpen}
        onClose={onClose}
        speciality={speciality}
      />
    </>
  )
}

export default ResumeNewCard
