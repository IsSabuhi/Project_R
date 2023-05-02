import React from 'react'
import { Box } from '@chakra-ui/react'
import { AvatarBox } from './AvatarBox'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { CreateButtons } from './CreateButtons'

export const Sidebar = ({ collapse }: any) => (
  <>
    <Box w="full">
      <Logo collapse={collapse} />
      <CreateButtons collapse={collapse} />
      <Navigation collapse={collapse} />
    </Box>
    <AvatarBox collapse={collapse} />
  </>
)
