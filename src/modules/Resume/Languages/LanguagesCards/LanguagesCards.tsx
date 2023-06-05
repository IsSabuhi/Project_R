import React from 'react'
import styles from './LanguagesCards.module.scss'
import { Button, Flex, Text } from '@chakra-ui/react'

interface ILanguagesCards {
  languages_name: string
  languages_level: string
  handleDelete: () => void
}

function LanguagesCards({
  languages_name,
  languages_level,
  handleDelete,
}: ILanguagesCards) {
  return (
    <div className={styles.container}>
      <Flex gap={4}>
        <Text>{languages_name}</Text>
        <Text>{languages_level}</Text>
      </Flex>

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

export default LanguagesCards
