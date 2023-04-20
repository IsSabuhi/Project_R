import { BoxProps } from '@chakra-ui/react'
import React from 'react'
import styles from './WideLayout.module.scss'
import Footer from '@/components/Footer/Footer'

const WideLayout: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className={styles.wideLayout_container}>
      <div className={styles.wideLayout_main}>{children}</div>
      <Footer />
    </div>
  )
}

export default WideLayout
