import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  body: {},
  content: {
    padding: 3, 
    margin: 4
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
export const popoverTheme = defineMultiStyleConfig({ baseStyle })