

import { Box, BoxProps, Text } from "@chakra-ui/layout";
import { TextProps } from "@chakra-ui/react";
import React from "react";

export interface BoxHeaderProps {
  title: string;
  subtitle?: string;
  size?: { title: string; subtitle?: string };
  spacing?: string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
}

const BoxHeader: React.FC<BoxHeaderProps & BoxProps> = ({
  title,
  subtitle,
  size = { title: "2xl", subtitle: "md" },
  spacing = "0.5",
  titleProps,
  subtitleProps = { color: "#808080" },
  ...rest
}) => {
  return (
    <Box mb="8" {...rest}>
      <Text {...titleProps} fontSize={size.title} fontWeight="semibold">
        {title}
      </Text>
      <Box p={spacing} />
      <Text {...subtitleProps} fontSize={size.subtitle}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default BoxHeader;
