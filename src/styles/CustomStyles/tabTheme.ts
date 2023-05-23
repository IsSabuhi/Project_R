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

const profileTab = definePartsStyle({
  root: {
    background: '#FFF',
    boxShadow: '0 0px 50px -12px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
  },
  tab: {    
    fontWeight: 700,
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
  },
  tablist: {
    alignItems: 'center',
    gap: '10px',
    paddingInline: '20px',
    paddingTop: '15px'
  }
})

const variants = {
  unstyled: baseStyle,
  profileTab: profileTab,
}


export const tabsTheme = defineMultiStyleConfig({ variants })