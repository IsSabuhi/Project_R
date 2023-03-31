import React from 'react';
import BoxHeader from '../BoxHeader';
import ResumeCard from '../ResumeCard/ResumeCard';
import styles from './ResumeList.module.scss';

const ResumeList = () => {
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
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  );
};

export default ResumeList;
