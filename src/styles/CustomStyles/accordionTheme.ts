import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
    container: {},
    button: {
        color: "gray.500",
        _hover: {
            color: "gray.600",
        },
        _focus: {
            color: "#868dfb",
        },
    },
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })