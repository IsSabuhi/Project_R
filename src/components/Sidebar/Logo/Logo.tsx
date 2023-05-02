import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { AiFillThunderbolt } from 'react-icons/ai'

export const Logo = ({ collapse }: any) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? 'row' : 'column'}
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Icon as={AiFillThunderbolt} fontSize={30} />
      {collapse && (
        <Text fontWeight="bold" fontSize={16}>
          HowToWork
        </Text>
      )}
    </Box>
  </Flex>
)