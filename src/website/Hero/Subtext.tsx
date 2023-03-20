

import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Subtext = () => {
  return (
    <Text
      maxW={{ base: "100%", md: "80%", lg: "60%", xl: "50%" }}
      textAlign="center"
      fontSize={{ base: "md", sm: "lg", lg: "xl", xl: "2xl" }}
      fontWeight="medium"
      letterSpacing="tight"
      lineHeight="tall"
      mb="8"
      color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
    >
      Resuminator gives you fastest and the simplest resume building experience.
      Apply to your dream job, 2x faster!
    </Text>
  );
};

export default Subtext;
