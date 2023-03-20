

import {
  Box,
  Button,
  Collapse,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import { navLinkDetails } from "./links";
import LoginSignupButtons from "./LoginSignupButtons";

const CollapseMenu = ({ isOpen, onToggle }) => {
  return (
    <Collapse in={isOpen}>
      <Box
        mt="1"
        borderRadius="md"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
        minH="90vh"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Stack alignItems="flex-start" pt="4">
          {navLinkDetails.map((item) => (
            <Button
              key={item.label}
              as="a"
              href={item.link}
              variant="ghost"
              size="md"
              fontWeight="normal"
              onClick={onToggle}
              colorScheme="blue"
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <LoginSignupButtons
          display={{ md: "none" }}
          justifyContent="center"
          mb="8"
          ml="8"
        />
      </Box>
    </Collapse>
  );
};

export default CollapseMenu;
