import { useGetJobseekerProfileQuery } from '@/generated/projectR-hasura';
import { useAuthContext } from '@/hooks/use-auth-context';
import { comName } from '@/utils/comName';
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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React from 'react';
import { FiLogOut, FiSettings } from 'react-icons/fi';

const UserMenu = () => {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const { isAuthorized, userId, stopAuthSession } = useAuthContext();

  const routeTo = (path: string) => {
    router.push(path);
  };

  const { data, loading, error } = useGetJobseekerProfileQuery({
    variables: {
      _eq: userId,
    },
  });
  const userData = data?.jobseeker[0];

  const handleLogout = () => {
    stopAuthSession();

    return enqueueSnackbar('Вы успешно вышли из системы', {
      variant: 'success',
    });
  };
  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar size='md'></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem
          isFocusable={false}
          fontWeight='medium'
          display='flex'
          alignItems='flex-start'
          flexDir='column'
          pb='4'
          pointerEvents='none'
        >
          <Text
            fontSize='xs'
            textTransform='uppercase'
            fontWeight='semibold'
            mb='2'
            color={useColorModeValue('blue.500', 'blue.200')}
          >
            Вошел в систему как
          </Text>
          <VStack alignItems='flex-start' spacing='1'>
            <Text fontSize='md'>
              {comName(
                userData?.lastName!,
                userData?.name!,
                userData?.middleName!
              )}
            </Text>
            <Text fontSize='xs'>{userData?.email}</Text>
          </VStack>
        </MenuItem>
        <Divider />
        <MenuItem icon={<FiSettings />} onClick={() => routeTo('/settings')}>
          Настройки
        </MenuItem>
        <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
