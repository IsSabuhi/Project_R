import { APP_URLS } from '@/configs/urls'
import { EditIcon, RepeatIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { MdLogout, MdOutlineMoreHoriz, MdOutlineSettings } from 'react-icons/md'

interface IAvatarBoxProps {
  collapse: boolean
  userName: string
  email: string
  isOpen: boolean
  onOpen: any
  onClose: any
}
export const AvatarBox = ({
  collapse,
  userName,
  email,
  isOpen,
  onClose,
  onOpen,
}: IAvatarBoxProps) => (
  <Flex
    borderWidth={1}
    borderColor="gray.100"
    borderRadius="full"
    p={2}
    m={4}
    alignItems="center"
    justifyContent="space-between"
    gap={4}
    flexDirection="row"
  >
    <Avatar name="UserName" bg="teal.300" />
    <Flex
      w="full"
      flexDirection="column"
      gap={5}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
        {userName}
      </Text>
      <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
        {email}
      </Text>
    </Flex>

    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        aria-label="Settings"
        as={IconButton}
        icon={<MdOutlineMoreHoriz />}
        borderRadius="full"
        color="gray.400"
        variant="ghost"
        fontSize={20}
        onClick={onOpen}
      />
      <MenuList>
        <MenuItem as="a" href="#" icon={<RepeatIcon />}>
          Open Closed Tab
        </MenuItem>
        <MenuItem as="a" href={APP_URLS.SETTINGS} icon={<MdOutlineSettings />}>
          Настройки
        </MenuItem>
        <MenuItem as="a" href="/login" icon={<MdLogout />}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  </Flex>
)
