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
import GeneralInfo from '@/modules/Settings/GeneralInfo/GeneralInfo'

const Settings = () => {
  return (
    <div className={styles.container}>
      <Text fontWeight="semibold" fontSize="2xl">
        Настройки
      </Text>
      <div className={styles.main}>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Аккаунт</Tab>
            <Tab>Tab2</Tab>
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
              <GeneralInfo userName="И С" />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default Settings
