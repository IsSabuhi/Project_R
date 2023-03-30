import { sidebarUrls } from '@/configs/sidebarUrls';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import styles from './Sidebar.module.scss';
import SidebarSection from './SidebarSection';

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <Box>
        <VStack
          alignItems='flex-start'
          spacing='0'
          color={useColorModeValue('gray.600', 'whiteAlpha')}
          width='100%'
          mb='4'
        >
          <SidebarSection sectionTitle='Меню' items={sidebarUrls} />
        </VStack>
      </Box>
    </div>
  );
}
