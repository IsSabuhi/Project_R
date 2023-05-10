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
import Profile from '@/modules/Settings/Profile/Profile'
import Account from '@/modules/Settings/Account/Account'
import { useAuthContext } from '@/hooks/use-auth-context'

const Settings = () => {
  const { userId } = useAuthContext()

  return (
    <div className={styles.container}>
      <Text fontWeight="semibold" fontSize="2xl">
        Настройки
      </Text>
      <div className={styles.main}>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Профиль</Tab>
            <Tab>Аккаунт</Tab>
            <Tab>Tab3</Tab>
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
      </div>
    </div>
  )
}

export default Settings
