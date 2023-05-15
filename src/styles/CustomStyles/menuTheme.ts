import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
  button: {
    fontWeight: 'medium',
    bg: 'teal.500',
    color: 'gray.200',
    _hover: {
      bg: 'teal.600',
      color: 'white',
    },
  },
  list: {
    py: '4',
    borderRadius: 'xl',
    border: 'none',
    bg: 'teal.500',
  },
  item: {
    color: 'gray.200',
    _hover: {
      bg: 'teal.600',
    },
    _focus: {
      bg: 'teal.600',
    },
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  divider: {
    my: '4',
    borderColor: 'white',
    borderBottom: '2px dotted',
  },
})
export const menuTheme = defineMultiStyleConfig({ baseStyle })