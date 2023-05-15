import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './CustomStyles/inputTheme'
import { tabsTheme } from './CustomStyles/tabTheme'
import { menuTheme } from './CustomStyles/menuTheme'

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  components: {
    Input: inputTheme,
    Tabs: tabsTheme,
    Manu: menuTheme,
  },
})

export default theme
