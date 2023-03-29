import React from 'react';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { APP_URLS } from '../configs/urls';

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push(APP_URLS.SIGN_IN);
  }, [router]);
  return <></>;
}
