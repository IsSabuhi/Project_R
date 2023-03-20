import { useColorMode } from "@chakra-ui/color-mode";
import Icon, { IconProps } from "@chakra-ui/icon";
import { Box, BoxProps, Text } from "@chakra-ui/layout";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineMail
} from "react-icons/ai";

export interface AuthProviderProps {
  client: "Google" | "GitHub" | "Email";
}

const AuthProviderCard: React.FC<AuthProviderProps & BoxProps> = ({
  client,
  ...rest
}) => {
  const { colorMode } = useColorMode();

  const getColor = (client: string) =>
    colorMode === "light" ? getColorLight(client) : getColorDark(client);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="solid"
      borderWidth="1px"
      borderRadius="4px"
      p="2"
      m="2"
      mb="1.5rem"
      color={getColor(client)}
      transition="color 0.15s ease, background-color 0.15s ease"
      _hover={{ bg: getColor(client), color: "white" }}
      cursor="pointer"
      {...rest}
    >
      <ClientIcon client={client} m="2" />
      <Text fontSize="sm" fontWeight="600">
        Continue with {client}
      </Text>
    </Box>
  );
};

const ClientIcon: React.FC<AuthProviderProps & IconProps> = ({
  client,
  ...rest
}) => {
  switch (client) {
    case "Google":
      return <Icon as={AiOutlineGoogle} {...rest} />;
    case "GitHub":
      return <Icon as={AiOutlineGithub} {...rest} />;
    case "Email":
      return <Icon as={AiOutlineMail} {...rest} />;
  }
};

const getColorLight = (client) => {
  switch (client) {
    case "Google":
      return "blue.500";
    case "GitHub":
      return "black";
    case "Email":
      return "gray.800";
  }
};

const getColorDark = (client) => {
  switch (client) {
    case "Google":
      return "blue.500";
    case "GitHub":
      return "gray.400";
    case "Email":
      return "brand.500";
  }
};

export default AuthProviderCard;
