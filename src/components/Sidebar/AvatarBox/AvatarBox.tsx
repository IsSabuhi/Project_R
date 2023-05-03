import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import styles from './AvatarBox.module.scss'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { RepeatIcon } from '@chakra-ui/icons'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

interface IAvatarBoxProps {
  userName: string
  email: string
  logoutOnClick: () => void
}

export const AvatarBox = ({
  userName,
  email,
  logoutOnClick,
}: IAvatarBoxProps) => (
  <div className={styles.container_avatar}>
    <Avatar name={userName} bg="teal.300" />
    <div className={styles.container_avatar_text}>
      <Text className={styles.sidebar_userNameText}>{userName}</Text>
      <Text
        className={styles.sidebar_userEmailText}
        color="gray.500"
        fontSize={12}
        lineHeight={0}
      >
        {email}
      </Text>
    </div>

    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MdOutlineMoreHoriz />}
        variant="ghost"
        borderRadius="full"
      />
      <MenuList>
        <MenuItem icon={<CgProfile size="15px" />}>Профиль</MenuItem>
        <MenuItem icon={<FiSettings size="15px" />}>Настройки</MenuItem>
        <Divider />
        <MenuItem icon={<FiLogOut size="15px" />} onClick={logoutOnClick}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  </div>
)
