import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import React from 'react'
import EmployerProfile from './EmployerProfile/EmployerProfile'
import Account from '../Jobseeker/Account/Account'

function EmployerSettingsPage() {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>Профиль</Tab>
        <Tab>Аккаунт</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel p={0}>
          <EmployerProfile />
        </TabPanel>
        <TabPanel p={0}>
          <Account />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default EmployerSettingsPage
