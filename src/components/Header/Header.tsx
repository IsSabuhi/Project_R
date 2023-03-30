import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import NavTabs from '../NavTabs/NavTabs';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();
  const resume_id = '2';
  const id = router.query.id ? router.query.id : resume_id;

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.container}>
      <Logo />
      <NavTabs id={id} currentRoute={router.pathname} />
      <HStack spacing='4'>
        <IconButton
          aria-label='Color-Toggle'
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          variant='ghost'
          colorScheme={useColorModeValue('gray', 'blue')}
        />
        <UserMenu />
      </HStack>
    </div>
  );
}
