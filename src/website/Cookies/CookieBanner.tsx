

import {
  Box,
  Button,
  HStack,
  Icon,
  Slide,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { FaCookieBite } from "react-icons/fa";
import LinkText from "../../components/common/LinkText";
import { COOKIE_POLICY, PRIVACY_POLICY } from "../../data/DocLinks";
import mp from "../../services/mixpanel";

const CookieBanner = () => {
  const router = useRouter();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const handleAccept = () => {
    mp.opt_in_tracking();
    Cookies.set("user-accepted-cookies", "true", {
      path: "/",
      expires: 365,
      sameSite: "strict",
      secure: true
    });
    onClose();
  };

  const handleReject = () => {
    mp.track("Rejected_Cookies");
    mp.opt_out_tracking();
    Cookies.set("user-accepted-cookies", "false", {
      path: "/",
      expires: 365,
      sameSite: "strict",
      secure: true
    });
    router.reload();
  };

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Box
        p={{ base: "1rem", xl: "1rem 10rem" }}
        bg={useColorModeValue("purple.100", "purple.900")}
      >
        <HStack pb={{ base: "4", md: "0" }}>
          <Icon
            as={FaCookieBite}
            color={useColorModeValue("gray.800", "whiteAlpha.800")}
            fontSize={{ base: "xl", md: "2xl" }}
            mx={{ md: "4" }}
          />
          <Text
            fontSize={{ base: "xs", sm: "sm", lg: "sm" }}
            color={useColorModeValue("purple.900", "purple.50")}
          >
            Resuminator by default uses cookies to enhance your user experience
            and measure usage and performance. To learn more about cookies and
            how your data is saved, read our{" "}
            <LinkText
              color="inherit"
              textDecoration="underline"
              href={COOKIE_POLICY}
            >
              cookie
            </LinkText>{" "}
            and{" "}
            <LinkText
              color="inherit"
              textDecoration="underline"
              href={PRIVACY_POLICY}
            >
              privacy
            </LinkText>{" "}
            policy.
          </Text>
          <Stack display={{ base: "none", md: "flex" }}>
            <Button size="sm" colorScheme="purple" onClick={handleAccept}>
              Accept All
            </Button>
            <Button size="sm" variant="ghost" onClick={handleReject}>
              Reject
            </Button>
          </Stack>
        </HStack>
        <Stack
          isInline
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
        >
          <Button size="sm" colorScheme="purple" onClick={handleAccept}>
            Accept All
          </Button>
          <Button size="sm" variant="ghost" onClick={handleReject}>
            Manage
          </Button>
        </Stack>
      </Box>
    </Slide>
  );
};

export default CookieBanner;
