import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import BoxHeader from '@/components/Home/BoxHeader';
import ChangePassword from '@/components/Home/Settings/Account/ChangePassword';
import SettingsSidebar from '@/components/Home/Settings/SettingsSidebar';
import { Grid, GridItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const SecuritySettings: NextPage = () => {
  return (
    <>
      <Header />
      <Grid
        minHeight='100vh'
        templateRows='0.5fr repeat(4, 2fr)' //6 rows, 1
        templateColumns='1fr 2fr 1fr' //4 columns, 1
        gap={4}
        mx={{ md: '4rem', lg: '7rem' }}
        my={{ base: '2rem' }}
      >
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title='Настройки учетной записи'
            subtitle='Настройки, связанные с учетной записью, такие как пароли и предпочтения.'
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={2} colSpan={1}>
          <ChangePassword />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default SecuritySettings;
