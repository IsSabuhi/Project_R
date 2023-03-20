

import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import LinkText from "../../components/common/LinkText";
import { BUY_ME_A_COFFEE } from "../../data/RefLinks";
import mp from "../../services/mixpanel";

const SponsorCard = () => {
  const trackMetric = (from: string, to: string) => {
    mp.track("Sponsor CTA Trigger", { from, to });
  };

  return (
    <Box
      width="100%"
      p="4"
      bg={useColorModeValue("#FEF3C7", "gray.700")}
      borderRadius="16px"
    >
      <Heading fontSize="md" mb="4">
        Sponsor this project 💛
      </Heading>
      <Text fontSize="sm" mb="2">
        We wish to keep Resuminator free. Forever. But it will be impossible
        without your support.
      </Text>
      <Text fontSize="sm" mb="4">
        You can support{" "}
        <LinkText href="/about#team" textDecoration="underline">
          our team
        </LinkText>{" "}
        if Resuminator has made your life easier.
      </Text>
      <Button
        as="a"
        href={BUY_ME_A_COFFEE}
        target="_blank"
        size="sm"
        colorScheme="yellow"
        onClick={() => trackMetric("Home Page", BUY_ME_A_COFFEE)}
      >
        Buy us a pizza 🍕
      </Button>
    </Box>
  );
};

export default SponsorCard;
