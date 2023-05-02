import { Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AvatarBox } from '../AvatarBox/AvatarBox'
import styles from './Header.module.scss'

interface IHeaderProps {
  collapse: boolean
  userName: string
  email: string
  setCollapse: any
}

const Header = ({ collapse, email, userName }: IHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="header" className={styles.header_container}>
      <AvatarBox
        collapse={!collapse}
        email={email}
        userName={userName}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </Box>
  )
}

export default Header
