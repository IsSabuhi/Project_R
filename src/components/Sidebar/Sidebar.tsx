import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Stack,
  Button,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiLogOut,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import styles from './Sidebar.module.scss'
import { useAuthContext } from '@/hooks/use-auth-context'

interface LinkItemProps {
  name: string
  href: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Главная', href: '/home', icon: FiHome },
  { name: 'Мои резюме', href: '/', icon: FiTrendingUp },
  { name: 'Настройки', href: '/', icon: FiSettings },
]

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      minH="100vh"
      width="100%"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { stopAuthSession } = useAuthContext()
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      {...rest}
    >
      <div>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href}>
            {link.name}
          </NavItem>
        ))}
      </div>
      <Stack direction="row" className={styles.logout_btn}>
        <div className={styles.logout_btn_pointer}>
          {/* <FiLogOut /> */}
          <Button
            leftIcon={<FiLogOut />}
            variant="ghost"
            onClick={stopAuthSession}
          >
            Выход
          </Button>
        </div>
      </Stack>
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  href: string
  children: ReactText
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}

export default Sidebar
