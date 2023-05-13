import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
  tab: {    
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
    _selected: {
        background: '#868dfb',
        color: '#fff',
      },
  },
})

export const tabsTheme = defineMultiStyleConfig({ baseStyle })