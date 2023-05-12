import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import styles from './AvatarBox.module.scss'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { useGetAccountByIdQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { APP_URLS } from '@/configs/urls'

const AvatarBox = () => {
  const router = useRouter()

  const { userId, stopAuthSession } = useAuthContext()

  const routeTo = (path: string) => {
    router.push(path)
  }

  const { data, loading, error } = useGetAccountByIdQuery({
    variables: {
      _eq: userId,
    },
  })

  const userData = data?.account[0]

  return (
    <div className={styles.container}>
      <div className={styles.container_avatar}>
        <Avatar name={userData?.login} />
        <div className={styles.container_avatar_text}>
          <Text className={styles.sidebar_userNameText}>{userData?.login}</Text>
          <Text
            className={styles.sidebar_userEmailText}
            color="gray.500"
            fontSize={12}
            lineHeight={0}
          >
            {userData?.role === 'jobseeker' ? 'Соискатель' : 'Работодатель'}
          </Text>
        </div>
      </div>
      <Menu>
        <MenuButton>
          <MdOutlineMoreHoriz />
        </MenuButton>
        <MenuList mt={3}>
          {/* <MenuItem
            isFocusable={false}
            fontWeight="medium"
            display="flex"
            alignItems="flex-start"
            flexDir="column"
            pb="4"
            pointerEvents="none"
          >
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md">{userData?.login}</Text>
            </VStack>
          </MenuItem>
          <Divider /> */}
          <MenuItem
            icon={<FiSettings />}
            onClick={() => routeTo(APP_URLS.getSettingsPage(userId!))}
          >
            Настройки
          </MenuItem>
          <MenuItem icon={<FiLogOut />} onClick={stopAuthSession}>
            Выйти
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default AvatarBox
