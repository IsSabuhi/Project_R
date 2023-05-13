import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './CustomStyles/inputTheme'

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  components: {
    Input: inputTheme,
  },
})

export default theme
