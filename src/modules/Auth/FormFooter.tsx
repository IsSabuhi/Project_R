import { Box } from "@chakra-ui/react";
import PageToggle, { PageOptions } from "./PageToggle";
import PrivacyNotice from "./PrivacyNotice";

const AuthFormFooter: React.FC<{ page: PageOptions }> = ({ page }) => {
  return (
    <Box
      textAlign="center"
      my="4"
      fontSize={{ base: "sm", md: "md" }}
      height="8rem"
    >
      <PageToggle page={page} />
      <PrivacyNotice />
    </Box>
  );
};

export default AuthFormFooter;
