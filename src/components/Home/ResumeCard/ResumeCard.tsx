import { Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import styles from './ResumeCard.module.scss';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Resume } from '@/generated/projectR-hasura';

interface IResumeCard {
  resumeData: Partial<Resume>;
  callback: (id: string) => void;
}

const ResumeCard: React.FC<IResumeCard> = ({ resumeData, callback }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.main}
        onClick={() => callback(resumeData.resume_id!)}
      >
        <div className={styles.main_header_card}>
          <Text>{resumeData?.job_position}</Text>
          <Tooltip label='Сгенерированное резюме' placement='top'>
            <CheckCircleIcon />
          </Tooltip>
        </div>
        <Text fontSize='small'>Дата создания: {resumeData?.date_create}</Text>
      </div>
      <Text
        textAlign='center'
        _hover={{ shadow: 'md', filter: 'brightness(80%)', cursor: 'pointer' }}
      >
        {resumeData?.name_resume}
      </Text>
    </div>
  );
};

export default ResumeCard;
