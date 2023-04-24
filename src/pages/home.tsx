import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';

export type TResumeType = {
  date_create: Date;
  job_position: string;
  name_resume: string;
  resume_id: string;
  status?: boolean | null | undefined;
};

interface IResume {
  jobseeker_id: string;
  resumeData: TResumeType;
}

const Home = () => {
  // const { jobseekerId } = useAuthContext();

  // const { data, loading, error } = useGetResumeQuery({
  //   variables: {
  //     _eq: jobseekerId,
  //   },
  // });

  // const resumeData = data?.resume;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />

        {/* <ResumeList resumeData={resumeData} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
