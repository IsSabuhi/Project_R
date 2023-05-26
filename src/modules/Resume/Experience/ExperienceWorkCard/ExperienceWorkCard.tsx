import React from 'react'
import styles from './ExperienceWorkCard.module.scss'
import { Button, Text } from '@chakra-ui/react'

interface IExperienceWorkCard {
  jobposition: string
  name_company: string
  workLocation: string
  handleDelete: () => void
}

function ExperienceWorkCard({
  jobposition,
  name_company,
  workLocation,
  handleDelete,
}: IExperienceWorkCard) {
  return (
    <div className={styles.container}>
      <Text className={styles.container_text}>
        Должность: <span>{jobposition}</span>
      </Text>
      <Text className={styles.container_text}>
        Компания: <span>{name_company}</span>
      </Text>
      <Text className={styles.container_text}>
        Страна: <span>{workLocation}</span>
      </Text>
      <Button
        colorScheme="red"
        width="50px"
        height="25px"
        fontSize="11px"
        ml="auto"
        onClick={() => handleDelete()}
      >
        Удалить
      </Button>
    </div>
  )
}

export default ExperienceWorkCard
