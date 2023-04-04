import { Avatar, Button, Text, useDisclosure, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const ProfilePhoto = () => {
  const [avatar, setAvatar] = useState('');
  return (
    <VStack>
      <Text fontSize='sm' fontWeight='semibold' colorScheme='gray' mb='2'>
        Фотография профиля
      </Text>
      <Avatar size='2xl' src={avatar} />
      <Button
        leftIcon={<FiUpload />}
        colorScheme='purple'
        size='sm'
        variant='ghost'
      >
        {avatar.length ? 'Загрузить новый' : 'Загрузить'}
      </Button>
    </VStack>
  );
};

export default ProfilePhoto;
