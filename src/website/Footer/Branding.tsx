

import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Copyright from "../../components/layouts/Footer/Copyright";
import SocialButtons from "../../components/layouts/Footer/SocialButtons";
import { LogoWithText } from "../../components/layouts/Logos";
import SocialLinks from "../../data/SocialLinks";

const Branding = () => {
  return (
    <Stack spacing="4" alignItems="flex-start">
      {/* <LogoWithText mb="0" variant="light" width="120px" height="32px" /> */}
      <Copyright />
      <SocialButtons data={SocialLinks} />
    </Stack>
  );
};

export default Branding;
