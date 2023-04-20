import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'

interface ICopyright {
  owner?: string
}

const Copyright: React.FC<ICopyright & TextProps> = ({
  owner = 'Project R',
  ...props
}) => {
  const date = new Date()
  return (
    <Text>
      Copyright &copy; {date.getFullYear()} {owner}
    </Text>
  )
}

export default Copyright
