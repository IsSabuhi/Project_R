import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/Settings.module.scss'
import dynamic from 'next/dynamic'

const DynamicSettingsContent = dynamic(
  () => import('@/modules/Settings/SettingsContent'),
  {
    ssr: false,
  }
)

const Settings = () => {
  return (
    <div className={styles.container}>
      <Text fontWeight="semibold" fontSize="2xl">
        Настройки
      </Text>
      <div className={styles.main}>
        <DynamicSettingsContent />
      </div>
    </div>
  )
}

export default Settings
