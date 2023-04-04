import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  hasHeaderHidden?: boolean;
}

const Layout: React.FC<Props & BoxProps> = ({
  hasHeaderHidden = false,
  children,
  ...props
}) => {
  return (
    <Box display='flex' flexDir='column' justifyContent='space-between'>
      {!hasHeaderHidden && <Header />}
      <Box
        px={{ md: '4rem', lg: '7rem' }}
        display='flex'
        alignItems='flex-start'
        justifyContent='space-between'
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
