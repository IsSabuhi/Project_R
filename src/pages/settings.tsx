import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/Settings.module.scss'
import Profile from '@/modules/Settings/Jobseeker/Profile/Profile'
import Account from '@/modules/Settings/Jobseeker/Account/Account'
import { useAuthContext } from '@/hooks/use-auth-context'
import EmployerProfile from '@/modules/Settings/Employer/EmployerProfile/EmployerProfile'

const Settings = () => {
  const { userId, role } = useAuthContext()

  return (
    <div className={styles.container}>
      <Text fontWeight="semibold" fontSize="2xl">
        Настройки
      </Text>
      <div className={styles.main}>
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
                <Profile userId={userId!} />
              </TabPanel>
              <TabPanel p={0}>
                <Account />
              </TabPanel>
              <TabPanel p={0}>
                <p>three!</p>
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
    </div>
  )
}

export default Settings
