import Loader from '@/components/Loader'
import { Resumes, useGetResumesQuery } from '@/generated/projectR-hasura'
import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import StandardSidebar from '@/templates/StandardSidebar/StandardSidebar'
import { Text } from '@chakra-ui/react'
import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'

const DynamicResumesView = dynamic(
  () => import('@/modules/ResumesView/ResumesViewContent'),
  {
    ssr: false,
  }
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})

const ResumeView = () => {
  const router = useRouter()
  const resume_id = router.query.id

  const [loading, setLoading] = React.useState(true)

  const { data, error } = useGetResumesQuery({
    variables: {
      _eq: resume_id as string,
    },
  })

  const resumesData = data?.resumes

  React.useEffect(() => {
    // Имитируем задержку загрузки в течение 3 секунд
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <DynamicResumesView resume_id={resume_id as string} />
      )}
    </div>
  )
}

export default ResumeView
