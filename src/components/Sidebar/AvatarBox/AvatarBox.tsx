import {
  Avatar,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import styles from './AvatarBox.module.scss'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { useGetJobseekerByIdQuery } from '@/generated/projectR-hasura'
import { joinName } from '@/utils/joinName'

interface IAvatarBoxProps {
  userId: string
  logoutOnClick: () => void
}

const AvatarBox = ({ logoutOnClick, userId }: IAvatarBoxProps) => {
  const router = useRouter()

  const routeTo = (path: string) => {
    router.push(path)
  }

  const { data, loading, error } = useGetJobseekerByIdQuery({
    variables: {
      _eq: userId,
    },
  })

  const user = data?.jobseeker[0]

  const userName = joinName(user?.lastName!, user?.name!, user?.middleName!)

  return (
    <div className={styles.container}>
      <div className={styles.container_avatar}>
        <Avatar name={userName} />
        <div className={styles.container_avatar_text}>
          <Text className={styles.sidebar_userNameText}>
            {user?.account?.login}
          </Text>
          <Text
            className={styles.sidebar_userEmailText}
            color="gray.500"
            fontSize={12}
            lineHeight={0}
          >
            {user?.email}
          </Text>
        </div>
      </div>
      <Menu>
        <MenuButton>
          <MdOutlineMoreHoriz />
        </MenuButton>
        <MenuList mt={3}>
          <MenuItem
            isFocusable={false}
            fontWeight="medium"
            display="flex"
            alignItems="flex-start"
            flexDir="column"
            pb="4"
            pointerEvents="none"
          >
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md">{userName}</Text>
            </VStack>
          </MenuItem>
          <Divider />
          <MenuItem icon={<FiSettings />} onClick={() => routeTo('/settings')}>
            Настройки
          </MenuItem>
          <MenuItem icon={<FiLogOut />} onClick={logoutOnClick}>
            Выйти
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default AvatarBox
