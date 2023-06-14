import React from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { Button } from '@chakra-ui/react'

const GenericPdfDownloader = ({ rootElementId, downloadFileName }: any) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId)

    const options = {
      scale: 1,
      useCORS: true,
    }

    html2canvas(input!, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'PNG', 0, 0)
      pdf.save(`${downloadFileName}.pdf`)
    })
  }

  return (
    <Button onClick={downloadPdfDocument} sx={{ marginBottom: '10px' }}>
      Скачать в формате PDF
    </Button>
  )
}

export default GenericPdfDownloader
