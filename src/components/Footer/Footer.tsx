import React from 'react'
import Copyright from './Copyright'
import styles from './Footer.module.scss'
import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'

const Footer = () => {
  return (
    <Box
      as="footer"
      className={styles.container}
      backgroundColor={useColorModeValue('#008480', 'gray.900')}
    >
      <Copyright />
    </Box>
  )
}

export default Footer
