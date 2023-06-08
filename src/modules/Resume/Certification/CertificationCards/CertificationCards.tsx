import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './CertificationCards.module.scss'

interface ICertificationCards {
  certification_name: string
  date_of_receipt: string
  handleDelete: () => void
}

const CertificationCards = ({
  certification_name,
  date_of_receipt,
  handleDelete,
}: ICertificationCards) => {
  return (
    <div className={styles.container}>
      <Flex justifyContent="space-between">
        <Text>{certification_name}</Text>
        <Text>{date_of_receipt}</Text>
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

export default CertificationCards
