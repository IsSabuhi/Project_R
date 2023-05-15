import React from 'react'
import styles from './ResumeNewCard.module.scss'
import { Text, useDisclosure } from '@chakra-ui/react'
import ResumeModalCreate from '../ResumeModalCreate/ResumeModalCreate'

interface IResumeNewCard {
  getResumeList: any
}

const ResumeNewCard = ({ getResumeList }: IResumeNewCard) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div className={styles.container} onClick={onOpen}>
        <Text className={styles.container_text}>Создать новое резюме</Text>
      </div>
      <ResumeModalCreate
        getResumeList={getResumeList}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default ResumeNewCard
