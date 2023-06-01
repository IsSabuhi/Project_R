import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './HobbyCards.module.scss'

interface IHobbyCards {
  description: string
  handleDelete: () => void
}

function HobbyCards({ description, handleDelete }: IHobbyCards) {
  return (
    <div className={styles.container}>
      <Text>{description}</Text>

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

export default HobbyCards
