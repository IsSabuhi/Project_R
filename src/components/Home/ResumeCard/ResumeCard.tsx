import { Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import styles from './ResumeCard.module.scss';
import { CheckCircleIcon } from '@chakra-ui/icons';

const ResumeCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_header_card}>
          <Text>Web Developer</Text>
          <Tooltip label='Сгенерированное резюме' placement='top'>
            <CheckCircleIcon />
          </Tooltip>
        </div>
        <Text fontSize='small'>Дата создания: 01.01.2023</Text>
      </div>
      <Text
        textAlign='center'
        _hover={{ shadow: 'md', filter: 'brightness(80%)', cursor: 'pointer' }}
      >
        Название резюме
      </Text>
    </div>
  );
};

export default ResumeCard;
