import Loader from '@/components/Loader'
import { Resumes, useGetResumesQuery } from '@/generated/projectR-hasura'
import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import SidebarBlue from '@/templates/SidebarBlue/SidebarBlue'
import { Button, Text } from '@chakra-ui/react'
import ReactPDF, {
  Document,
  Page,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer'
import React from 'react'

export interface IResumesViewContent {
  resume_id: string
}

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
})

const ResumesViewContent = ({ resume_id }: IResumesViewContent) => {
  const { data, error } = useGetResumesQuery({
    variables: {
      _eq: resume_id as string,
    },
  })

  const template = data?.resumes[0].template

  const resumesData = data?.resumes

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {template === 'template1' && (
          <ClassicTemplate resumesData={resumesData as Resumes[]} />
        )}
        {template === 'template2' && (
          <SidebarBlue resumesData={resumesData as Resumes[]} />
        )}
      </Page>
    </Document>
  )
}

export default ResumesViewContent
