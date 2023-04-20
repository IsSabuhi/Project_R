import { Text } from '@chakra-ui/react'
import React from 'react'

const FormHeader: React.FC<{ title: string; hideTitle: boolean }> = ({
  title,
  hideTitle,
}) => {
  return (
    <div>
      {!hideTitle && (
        <Text fontSize="36px" mb="2rem" letterSpacing="tight">
          {title}
        </Text>
      )}
    </div>
  )
}

export default FormHeader
