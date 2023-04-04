import { useGetResumeQuery } from '@/generated/projectR-hasura';
import { useAuthContext } from '@/hooks/use-auth-context';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import BoxHeader from '../BoxHeader';
import CreateResumeCard from '../CreateResumeCard/CreateResumeCard';
import ResumeCard from '../ResumeCard/ResumeCard';
import styles from './ResumeList.module.scss';

const ResumeList = () => {
  const router = useRouter();

  const { jobseekerId } = useAuthContext();

  const { data, loading, error } = useGetResumeQuery({
    variables: {
      _eq: jobseekerId,
    },
  });

  const resumeData = data?.resume;

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
            // handleBlur={handleBlur}
          />
        ))}
        <CreateResumeCard />
      </div>
    </div>
  );
};

export default ResumeList;
