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

function Resume() {
  const router = useRouter()

  const resume_id = router.query.id

  const { data, loading, error } = useGetResumeQuery({
    variables: {
      _eq: resume_id as string,
    },
  })

  console.log(data)
  return (
    <div className={styles.container}>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tooltip label={data?.resumes[0].resume_name}>
            <Text className={styles.container_resume_title}>
              {data?.resumes[0].resume_name}
            </Text>
          </Tooltip>
          <Tab>Контакты</Tab>
          <Tab>Опыт работы</Tab>
          <Tab>Проекты</Tab>
          <Tab>Образование</Tab>
          <Tab>Навыки</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>Контакты</TabPanel>
          <TabPanel>Опыт работы</TabPanel>
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const resume_id = context.query.id

//   if (isUUID(resume_id as string)) {
//     const { data }: ApolloQueryResult<GetResumeQuery> = await client.query({
//       query: GetResumeDocument,
//       variables: { resume_id: resume_id } as GetResumeQueryVariables,
//     })

//     const resumeData = data.resumes

//     return {
//       props: { resumeData },
//       notFound: !data.resumes,
//     }
//   } else
//     return {
//       notFound: true,
//     }
// }

export default Resume
