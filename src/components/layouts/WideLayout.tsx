import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';
import Footer from '../Footer/Footer';

const WideLayout: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box display='flex' flexDir='column' height='100%'>
      <Box display='flex' alignItems='flex-start' height='100%' {...props}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default WideLayout;
