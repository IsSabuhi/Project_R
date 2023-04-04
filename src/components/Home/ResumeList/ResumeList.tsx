import { useGetResumesQuery } from '@/generated/projectR-hasura';
import { useAuthContext } from '@/hooks/use-auth-context';
import { useRouter } from 'next/router';
import React from 'react';
import BoxHeader from '../BoxHeader';
import CreateResumeCard from '../CreateResumeCard/CreateResumeCard';
import ResumeCard from '../ResumeCard/ResumeCard';
import styles from './ResumeList.module.scss';

const ResumeList = () => {
  const { userId } = useAuthContext();

  const router = useRouter();

  const { data, loading, error } = useGetResumesQuery({
    variables: {
      _eq: userId,
    },
  });

  const resumeData = data?.resume;

  const handleSelect = (id: string) => {
    router.push(`/create/${id}`);
  };

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
        {resumeData?.map((item) => (
          <ResumeCard
            key={item.resume_id}
            resumeData={item}
            callback={handleSelect}
          />
        ))}
        <CreateResumeCard />
      </div>
    </div>
  );
};

export default ResumeList;
