import React from 'react'
import { Box } from '@chakra-ui/react'
import { AvatarBox } from './AvatarBox/AvatarBox'
import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation'
import { CreateButtons } from './CreateButtons/CreateButtons'

interface ISidebarProps {
  collapse: boolean
}

export const Sidebar = ({ collapse }: ISidebarProps) => (
  <>
    <Box w="full">
      <Logo collapse={collapse} />
      <CreateButtons collapse={collapse} />
      <Navigation collapse={collapse} />
    </Box>
  </>
)
