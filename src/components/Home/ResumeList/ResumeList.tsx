import { useRouter } from 'next/router';
import React from 'react';
import BoxHeader from '../BoxHeader';
import CreateResumeCard from '../CreateResumeCard/CreateResumeCard';
import ResumeCard from '../ResumeCard/ResumeCard';
import styles from './ResumeList.module.scss';
import { TResumeType } from '@/pages/home';

const ResumeList = ({ resumeData }: { resumeData: any }) => {
  return (
    <div>
      <BoxHeader
        title='Мои резюме'
        subtitle='Выберите резюме, чтобы начать редактирование'
        size={{ title: '4xl', subtitle: 'md' }}
        titleProps={{ as: 'h1', letterSpacing: 'tight' }}
        spacing='0'
      />
      <div className={styles.main_resumes}>
        {resumeData?.map((item: any) => (
          <ResumeCard key={item.resume_id} resumeData={item} />
        ))}
        <CreateResumeCard />
      </div>
    </div>
  );
};

export default ResumeList;
