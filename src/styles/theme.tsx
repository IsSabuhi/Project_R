import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './CustomStyles/inputTheme'
import { tabsTheme } from './CustomStyles/tabTheme'
import { accordionTheme } from './CustomStyles/accordionTheme'

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  components: {
    Input: inputTheme,
    Tabs: tabsTheme,
    Accordion: accordionTheme,
  },
})

export default theme
