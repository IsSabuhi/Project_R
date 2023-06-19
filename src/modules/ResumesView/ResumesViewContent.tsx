import Loader from '@/components/Loader'
import { Resumes, useGetResumesQuery } from '@/generated/projectR-hasura'
import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import SidebarBlue from '@/templates/SidebarBlue/SidebarBlue'
import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import React from 'react'
import GenericPdfDownloader from './GenericPdfDownloader/GenericPdfDownloader'
import StandardSidebar from '@/templates/StandardSidebar/StandardSidebar'

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
  const { data, loading, error } = useGetResumesQuery({
    variables: {
      _eq: resume_id as string,
    },
  })

  const template = data?.resumes[0].template

  const resumesData = data?.resumes

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Document>
          <GenericPdfDownloader
            downloadFileName={data?.resumes[0].resume_name}
            rootElementId="testId"
          />

          <Page size="A4" style={styles.page}>
            {template === 'template1' && (
              <div id="testId">
                <ClassicTemplate resumesData={resumesData as Resumes[]} />
              </div>
            )}
            {template === 'template2' && (
              <div id="testId">
                <SidebarBlue resumesData={resumesData as Resumes[]} />
              </div>
            )}
            {/* <StandardSidebar /> */}
          </Page>
        </Document>
      )}
    </>
  )
}

export default ResumesViewContent
