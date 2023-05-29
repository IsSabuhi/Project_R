import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './SkillsCards.module.scss'

interface ISkillsCards {
  description: string
  handleDelete: () => void
}

function SkillsCards({ description, handleDelete }: ISkillsCards) {
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

export default SkillsCards
