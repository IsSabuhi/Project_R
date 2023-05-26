import React from 'react'
import styles from './ResumeNewCard.module.scss'
import { Text, useDisclosure } from '@chakra-ui/react'
import ResumeModalCreate from '../ResumeModalCreate/ResumeModalCreate'
import {
  Exact,
  GetJobseekerResumesQuery,
  InputMaybe,
} from '@/generated/projectR-hasura'
import { LazyQueryExecFunction } from '@apollo/client'

interface IResumeNewCard {
  getResumeList: LazyQueryExecFunction<
    GetJobseekerResumesQuery,
    Exact<{
      _eq?: InputMaybe<string> | undefined
    }>
  >
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
