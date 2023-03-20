

import { Center, Text } from "@chakra-ui/react";
import React from "react";
import SectionLayout from "../common/SectionLayout";
import MainHeading from "./MainHeading";
import PrimaryCTA from "./PrimaryCTA";
import Subtext from "./Subtext";

const Hero = () => {
  return (
    <SectionLayout as={Center} flexDir="column" aria-label="Hero">
      <MainHeading />
      <Subtext />
      <PrimaryCTA mb="2" />
      <Text mb="4" fontSize="sm" color="blue.600">
        Yes, all features are completely free!
      </Text>
    </SectionLayout>
  );
};

export default Hero;
