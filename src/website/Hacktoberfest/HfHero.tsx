

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Center, Stack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import dynamic from "next/dynamic";
import React from "react";
import { HFColors } from "./hf_colors";
const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
  ssr: false
});

interface Props {}

const HfHero = (props: Props) => {
  const hfLogoColorMode = useColorModeValue(
    "/web/Logo-2-Color-Light.svg",
    "/web/Logo-2-Color-Dark.svg"
  );
  const colorModeDefaultLogo = useColorModeValue(
    "/logos/text_dark.svg",
    "/logos/text_light.svg"
  );
  return (
    <Center minHeight="100vh" flexDir="column" width={'100%'}>
      <Stack
        alignItems="center"
        isInline={useBreakpointValue({ base: false, md: true })}
        spacing='5'
      >
        <Image
          src={hfLogoColorMode}
          boxSize={{ base: "12rem", md: "16rem", xl: "18rem" }}
        />
        <Text
          display={{ base: "none", md: "initial" }}
          fontWeight="bold"
          fontSize={{ base: "4xl", xl: "5xl" }}
          // position="relative"
          // right={{ md: "0rem" }}
          bottom={{ base: "1rem", md: 0 }}
          color="#9092ff"
        >
          +
        </Text>
        <Image
          src={colorModeDefaultLogo}
          width={{ base: "160px", md: "240px", xl: "400px" }}
          height={{ base: "32px", md: "48px", xl: "80px" }}
        />
      </Stack>
      <Text
        fontWeight="semibold"
        fontSize={{ base: "lg", md: "xl", lg: "xl", xl: "2xl" }}
        color={useColorModeValue(HFColors.text.secondary, 'white')}
        margin={'1rem 0'}
        textAlign='center'
      >
        1st October 2022 to 31st October 2022
      </Text>
      <CountdownTimer />
    </Center>
  );
};

export default HfHero;
