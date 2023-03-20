import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";
import Footer from "./Footer";

const WideLayout: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      minH="100vh"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default WideLayout;
