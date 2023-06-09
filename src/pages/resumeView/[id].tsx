import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import ReactPDF, { Document, Page, View, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  page: {
    flexDirection: 'row',
    // backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

const ResumeView = () => {
  return (
    <div style={styles.container}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <ClassicTemplate />
          </View>
        </Page>
      </Document>
    </div>
  )
}

export default ResumeView
