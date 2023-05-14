import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import React from 'react'
import Account from './Jobseeker/Account/Account'
import EmployerProfile from './Employer/EmployerProfile/EmployerProfile'
import { useAuthContext } from '@/hooks/use-auth-context'
import GeneralInfo from './Jobseeker/Profile/GeneralInfo'
import Education from './Jobseeker/Education/Education'

export default function SettingsContent() {
  const { role } = useAuthContext()
  return (
    <div>
      {role === 'jobseeker' ? (
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Профиль</Tab>
            <Tab>Аккаунт</Tab>
            <Tab>Образование</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel p={0}>
              <GeneralInfo />
            </TabPanel>
            <TabPanel p={0}>
              <Account />
            </TabPanel>
            <TabPanel p={0}>
              <Education />
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Профиль</Tab>
            <Tab>Аккаунт</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel p={0}>
              <EmployerProfile />
            </TabPanel>
            <TabPanel p={0}>
              <Account />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </div>
  )
}
