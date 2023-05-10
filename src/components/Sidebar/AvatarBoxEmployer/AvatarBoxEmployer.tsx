import React from 'react'
import styles from './AvatarBoxEmployer.module.scss'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { MdOutlineMoreHoriz } from 'react-icons/md'
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
import { useGetOrganizationQuery } from '@/generated/projectR-hasura'

interface IAvatarBoxEmployerProps {
  userId: string
  logoutOnClick: () => void
}

const AvatarBoxEmployer = ({
  logoutOnClick,
  userId,
}: IAvatarBoxEmployerProps) => {
  const router = useRouter()

  const routeTo = (path: string) => {
    router.push(path)
  }

  const { data, loading, error } = useGetOrganizationQuery({
    variables: {
      _eq: userId,
    },
  })

  const itemData = data?.organization[0]

  return (
    <div className={styles.container}>
      <div className={styles.container_avatar}>
        <Avatar name={itemData?.organization_account.login} />
        <div className={styles.container_avatar_text}>
          <Text className={styles.sidebar_userNameText}>
            {itemData?.organization_account.login}
          </Text>
          <Text
            className={styles.sidebar_userEmailText}
            color="gray.500"
            fontSize={12}
            lineHeight={0}
          >
            {itemData?.organization_employer.email}
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
              <Text fontSize="md">{itemData?.name_organization!}</Text>
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

export default AvatarBoxEmployer
