import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import BoxHeader from '@/components/Home/BoxHeader';
import PersonalDetails from '@/components/Home/Settings/General/PersonalDetails';
import ProfilePhoto from '@/components/Home/Settings/General/ProfilePhoto';
import SettingsSidebar from '@/components/Home/Settings/SettingsSidebar';
import { Grid, GridItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

const Settings: NextPage = () => {
  return (
    <>
      <Header />
      <Grid
        minHeight='100vh'
        templateRows='0.5fr repeat(4, 2fr)'
        templateColumns='1fr 2fr 1fr'
        gap={4}
        mx={{ md: '4rem', lg: '7rem' }}
        my={{ base: '2rem' }}
      >
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title='Общие настройки'
            subtitle='Измените внешний вид вашего профиля, обновите свою личную информацию.'
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={1} colSpan={1}>
          <PersonalDetails />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <ProfilePhoto />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default Settings;
