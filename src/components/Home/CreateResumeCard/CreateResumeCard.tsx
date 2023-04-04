import { Text, Icon, Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import styles from './CreateResumeCard.module.scss';

const CreateResumeCard = () => {
  const hoverProps = {
    bg: useColorModeValue('gray.100', 'whiteAlpha.100'),
    color: useColorModeValue('blue.500', 'blue.300'),
  };
  return (
    <Box
      className={styles.container}
      color={useColorModeValue('gray.600', 'whiteAlpha.600')}
      _hover={hoverProps}
    >
      <Icon as={FiPlusCircle} w={6} h={6} />
      <Text fontWeight='semibold' fontSize='sm' textAlign='center'>
        Создать новое резюме
      </Text>
    </Box>
  );
};

export default CreateResumeCard;
