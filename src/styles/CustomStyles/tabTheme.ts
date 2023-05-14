import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
  tab: {    
    fontWeight: 700,
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
    _selected: {
        background: '#868dfb',
        color: '#fff',
      },
  },
  tablist: {
    alignItems: 'center',
    gap: '10px'
  }
})

export const tabsTheme = defineMultiStyleConfig({ baseStyle })