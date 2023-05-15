import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './CustomStyles/inputTheme'
import { tabsTheme } from './CustomStyles/tabTheme'

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  components: {
    Input: inputTheme,
    Tabs: tabsTheme,
  },
})

export default theme
