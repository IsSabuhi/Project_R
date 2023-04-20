import { Box, HStack, VStack } from '@chakra-ui/layout'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'

interface BenefitProps {
  iconSrc: string
  text: string
}

export type BenefitList = Array<BenefitProps>

const Benefit: React.FC<BenefitProps> = ({ iconSrc, text }) => {
  return (
    <HStack spacing={'1rem'} alignItems="center">
      <Image src={iconSrc} width={'2rem'} height={'2rem'} />
      <Text color={'white'} fontSize={'1.125rem'}>
        {text}
      </Text>
    </HStack>
  )
}

const InfoGraphic: React.FC<{
  benefitList: BenefitList
  title: string
}> = ({ benefitList, title }) => {
  const bg = useColorModeValue('#319795', 'gray.900')
  return (
    <Box background={bg}>
      <Box>
        <Text
          color="white"
          fontSize={'2.25rem'}
          mb={'3.25rem'}
          textAlign="center"
        >
          {title}
        </Text>
        <VStack spacing={'2.5rem'} alignItems="flex-start">
          {benefitList.map((b, i) => (
            <Benefit iconSrc={b.iconSrc} text={b.text} key={b.iconSrc + i} />
          ))}
        </VStack>
      </Box>
    </Box>
  )
}

export default InfoGraphic
