import { Box, HStack, VStack } from "@chakra-ui/layout";
import { Image, Text, useColorModeValue } from "@chakra-ui/react";

interface BenefitProps {
  iconSrc: string;
  text: string;
}

export type BenefitList = Array<BenefitProps>;

const Benefit: React.FC<BenefitProps> = ({ iconSrc, text }) => {
  return (
    <HStack spacing={"1rem"} alignItems="center">
      <Image src={iconSrc} width={"2rem"} height={"2rem"} />
      <Text color={"white"} fontSize={"1.125rem"}>
        {text}
      </Text>
    </HStack>
  );
};

const InfoGraphic: React.FC<{
  benefitList: BenefitList;
  title: string;
}> = ({ benefitList, title }) => {
  const bg = useColorModeValue("#341BCA", "gray.900");
  return (
    <Box
      display={{ base: "none", lg: "flex" }}
      flexBasis="60%"
      p={{ base: "2rem", md: "4rem", lg: "12rem 6rem", "2xl": "14rem 10rem" }}
      background={bg}
      height={{ base: "auto", md: "auto", lg: "115vh", "2xl": "auto" }}
      alignItems="center"
      justifyContent="center"
      width={"100%"}
    >
      <Box display={"flex"} alignItems="center" flexDir={"column"}>
        <Text
          color="white"
          fontSize={"2.25rem"}
          mb={"3.25rem"}
          textAlign="center"
        >
          {title}
        </Text>
        <VStack spacing={"2.5rem"} alignItems="flex-start">
          {benefitList.map((b, i) => (
            <Benefit iconSrc={b.iconSrc} text={b.text} key={b.iconSrc + i} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default InfoGraphic;
