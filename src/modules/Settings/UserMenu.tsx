import { useGetJobseekerProfileQuery } from '@/src/generated/projectR-hasura'
import { useAuthContext } from '@/src/hooks/use-auth-context'
import { comName } from '@/src/utils/comName'
import {
  Avatar,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { useCustomToast } from '../../hooks/useCustomToast'
import mp from '../../services/mixpanel'

const UserMenu = () => {
  const router = useRouter()
  const { isAuthorized, userId, stopAuthSession } = useAuthContext()

  const { data, loading, error } = useGetJobseekerProfileQuery({
    variables: {
      _eq: userId,
    },
  })

  const userData = data?.jobseeker[0]

  const { createToast } = useCustomToast()

  const routeTo = (path: string) => {
    router.push(path)
  }

  const handleLogout = () => {
    stopAuthSession()
    mp.track('Log Out', {
      status: 'success',
    })
    return createToast('Вы успешно вышли из системы', 'success')
  }

  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar size="md"></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem
          isFocusable={false}
          fontWeight="medium"
          display="flex"
          alignItems="flex-start"
          flexDir="column"
          pb="4"
          pointerEvents="none"
        >
          <Text
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="semibold"
            mb="2"
            color={useColorModeValue('blue.500', 'blue.200')}
          >
            Вошел в систему как
          </Text>
          <VStack alignItems="flex-start" spacing="1">
            <Text fontSize="md">
              {comName(
                userData?.lastName!,
                userData?.name!,
                userData?.middleName!
              )}
            </Text>
            <Text fontSize="xs">{userData?.email}</Text>
          </VStack>
        </MenuItem>
        <Divider />
        {/* <MenuItem icon={<FiUser />}>Profile</MenuItem> */}
        <MenuItem icon={<FiSettings />} onClick={() => routeTo('/settings')}>
          Настройки
        </MenuItem>
        {/* <Divider /> */}
        {/* <MenuItem icon={<FiBook />}>Guides</MenuItem> */}

        {/* <MenuItem icon={<FiHelpCircle />}>Help Center</MenuItem> */}
        {/* <Divider /> */}
        <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu
