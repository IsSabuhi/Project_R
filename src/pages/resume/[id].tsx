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
import Сourse from '@/modules/Resume/Сourse/Сourse'
import AdditionalInformation from '@/modules/Resume/AdditionalInformation/AdditionalInformation'
import Skills from '@/modules/Resume/Skills/Skills'

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
          <Tab>Курсы</Tab>
          <Tab>Навыки</Tab>
          <Tab>Дополнительная информация</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Experience resume_id={resume_id as string} />
          </TabPanel>
          <TabPanel>
            <Project resume_id={resume_id as string} />
          </TabPanel>
          <TabPanel>
            <Сourse resume_id={resume_id as string} />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <AdditionalInformation resume_id={resume_id as string} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Resume
