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
import Experience from '@/modules/Resume/Experience/Experience'
import Project from '@/modules/Resume/Projects/Project'

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
            <Experience resume_id={resume_id as string} />
          </TabPanel>
          <TabPanel>
            <Project />
          </TabPanel>
          <TabPanel>Образование</TabPanel>
          <TabPanel>Навыки</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Resume
