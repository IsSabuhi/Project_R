import {
  GridItem,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import ColorModeMenu from '../ColorModeMenu';
import Copyright from './Copyright';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Stack
      spacing='4'
      as='footer'
      backgroundColor={useColorModeValue('#146961', 'gray.900')}
      p={{ base: '4', md: '8', lg: '2rem 8rem' }}
    >
      <div className={styles.main}>
        <GridItem>
          {/* <LogoWithText variant="light" /> */}
          <Copyright py='4' />
        </GridItem>
        <GridItem justifySelf={{ md: 'center' }}>
          {/* <SocialButtons data={SocialLinks} /> */}
        </GridItem>
        <GridItem justifySelf={{ md: 'end' }}>
          <ColorModeMenu />
        </GridItem>
      </div>
    </Stack>
  );
};

export default Footer;
