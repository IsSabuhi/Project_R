import { GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { useEffect } from "react";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import SEO from "../../modules/SEO";
import ChangePassword from "../../modules/Settings/Account/ChangePassword";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";
import mp from "../../services/mixpanel";
import Papercups from "../../services/papercups";

const SecuritySettings: NextPage = () => {
  useEffect(() => {
    mp.track("Account Settings Page View");
  }, []);

  return (
    <>
      <SEO title="Настройки учетной записи" />
      <Header />
      <SettingsLayoutGrid>
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title="Настройки учетной записи"
            subtitle="Настройки, связанные с учетной записью, такие как пароли и предпочтения."
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={2} colSpan={1}>
          <ChangePassword />
        </GridItem>
      </SettingsLayoutGrid>
      <Footer />
      <Papercups />
    </>
  );
};

export default SecuritySettings;
