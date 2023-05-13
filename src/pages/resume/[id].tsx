import { useGetResumeQuery } from '@/generated/projectR-hasura'
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import React from 'react'

function Resume({ resume_id }: any) {
  const { data, loading, error } = useGetResumeQuery({
    variables: {
      resume_id: resume_id,
    },
  })
  return (
    <div>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>Контакты</Tab>
          <Tab>Опыт работы</Tab>
          <Tab>Проекты</Tab>
          <Tab>Образование</Tab>
          <Tab>Навыки</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>Контакты</TabPanel>
          <TabPanel p={0}>Опыт работы</TabPanel>
          <TabPanel p={0}>
            <p>Проекты!</p>
          </TabPanel>
          <TabPanel p={0}>Образование</TabPanel>
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
