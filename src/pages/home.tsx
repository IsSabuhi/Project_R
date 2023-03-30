import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import ResumeList from '@/components/Home/ResumeList';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />

        <ResumeList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
