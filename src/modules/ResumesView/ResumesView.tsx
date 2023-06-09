import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import { Button } from '@chakra-ui/react'
import ReactPDF, { Document, Page, View, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
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

export const ResumesView = () => {
  return (
    <div>
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
