import React from 'react'
import styles from './ResumesTemplateImage.module.scss'
import { Box } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

interface IResumesTemplateImage {
  image: StaticImageData
  isSelected: boolean
  onSelect: () => void
}

const ResumesTemplateImage = ({
  image,
  isSelected,
  onSelect,
}: IResumesTemplateImage) => {
  return (
    <div className={styles.container}>
      <Box
        borderWidth={isSelected ? '2px' : '1px'}
        borderRadius="md"
        p={4}
        textAlign="center"
        cursor="pointer"
        borderColor={isSelected ? 'blue.500' : 'gray.300'}
        onClick={onSelect}
      >
        <Image src={image} alt="Resume Template" />
      </Box>
    </div>
  )
}

export default ResumesTemplateImage
