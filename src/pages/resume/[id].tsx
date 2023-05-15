import { useGetResumeQuery } from '@/generated/projectR-hasura'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/styles/Resume.module.scss'
import Contacts from '@/modules/Resume/Contacts/Contacts'
import Experience from '@/modules/Resume/Experience/Experience'

function Resume() {
  const router = useRouter()

  const resume_id = router.query.id

  const { data, loading, error } = useGetResumeQuery({
    variables: {
      _eq: resume_id as string,
    },
  })

  return (
    <div className={styles.container}>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tooltip label={data?.resumes[0].resume_name}>
            <Text className={styles.container_resume_title}>
              {data?.resumes[0].resume_name}
            </Text>
          </Tooltip>
          <Tab>Опыт работы</Tab>
          <Tab>Проекты</Tab>
          <Tab>Образование</Tab>
          <Tab>Навыки</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Experience />
          </TabPanel>
          <TabPanel>
            <p>Проекты!</p>
          </TabPanel>
          <TabPanel>Образование</TabPanel>
          <TabPanel>Навыки</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Resume
