import React from 'react'
import styles from './ProjectCards.module.scss'
import { Button, Text } from '@chakra-ui/react'

interface IProjectCards {
  project_name: string
  name_organization: string
  handleDelete: () => void
}

function ProjectCards({
  project_name,
  name_organization,
  handleDelete,
}: IProjectCards) {
  return (
    <div className={styles.container}>
      <Text className={styles.container_text}>
        Название проекта: <span>{project_name}</span>
      </Text>
      <Text className={styles.container_text}>
        Организация: <span>{name_organization}</span>
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

export default ProjectCards
