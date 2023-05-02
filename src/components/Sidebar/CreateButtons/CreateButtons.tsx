import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

export const CreateButtons = ({ collapse }: any) => {
  if (!collapse) {
    return <div>asd</div>
  }
  return (
    <Flex
      w="full"
      borderWidth={1}
      borderColor="gray.100"
      borderRadius={14}
      my={6}
    >
      <Button
        w="full"
        borderRadius={14}
        id="personal"
        textTransform="uppercase"
        size="sm"
        py={5}
      >
        Создать резюме
      </Button>
    </Flex>
  )
}
