import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import Experience from './Experience/Experience'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import AdditionalInformation from './AdditionalInformation/AdditionalInformation'
import SaveResume from './SaveResume/SaveResume'
import Сourse from '@/modules/Resume/Сourse/Сourse'
import {
  useGetResumeLazyQuery,
  useGetResumeQuery,
} from '@/generated/projectR-hasura'
import styles from '@/styles/Resume.module.scss'
import Hobby from './Hobby/Hobby'
import Languages from './Languages/Languages'
import { specialityType } from '@/constants'
import Certification from './Certification/Certification'

interface IResumeContent {
  resume_id: string
}

function ResumeContent({ resume_id }: IResumeContent) {
  const { data, loading, error } = useGetResumeQuery({
    variables: {
      _eq: resume_id,
    },
  })

  const specialityJobseeker =
    data?.resumes[0].resumes_jobseeker?.jobseeker_educations[0].speciality

  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tooltip label={data?.resumes[0].resume_name}>
          <Text className={styles.container_resume_title}>
            {data?.resumes[0].resume_name}
          </Text>
        </Tooltip>
        <Tab>Опыт работы</Tab>
        {specialityJobseeker === specialityType.infoSystem && (
          <Tab>Проекты</Tab>
        )}

        <Tab>Курсы</Tab>
        {specialityJobseeker !== specialityType.electric && <Tab>Хобби</Tab>}

        {specialityJobseeker === specialityType.electric && (
          <Tab>Сертификаты</Tab>
        )}

        <Tab>Владение языками</Tab>
        <Tab>Навыки</Tab>
        <Tab>Дополнительная информация</Tab>
        <Tab>Сохранение резюме</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Experience resume_id={resume_id!} />
        </TabPanel>
        {specialityJobseeker === specialityType.infoSystem && (
          <TabPanel>
            <Project resume_id={resume_id!} />
          </TabPanel>
        )}

        <TabPanel>
          <Сourse resume_id={resume_id!} />
        </TabPanel>
        {specialityJobseeker !== specialityType.electric && (
          <TabPanel>
            <Hobby resume_id={resume_id!} />
          </TabPanel>
        )}

        {specialityJobseeker === specialityType.electric && (
          <TabPanel>
            <Certification resume_id={resume_id!} />
          </TabPanel>
        )}

        <TabPanel>
          <Languages resume_id={resume_id!} />
        </TabPanel>
        <TabPanel>
          <Skills resume_id={resume_id!} />
        </TabPanel>
        <TabPanel>
          <AdditionalInformation
            resume_id={resume_id!}
            specialityJobseeker={specialityJobseeker as string}
          />
        </TabPanel>
        <TabPanel>
          <SaveResume resume_id={resume_id!} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ResumeContent
