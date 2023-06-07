import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/styles/Vacancy.module.scss'
import dynamic from 'next/dynamic'

const DynamicVacancyContent = dynamic(
  () => import('@/modules/Vacancy/VacancyContent'),
  {
    ssr: false,
  }
)

const Vacancy = () => {
  return (
    <div className={styles.container}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="2xl" m="15px">
          Отклики
        </Text>
        <div className={styles.container_avatarBox}>
          {/* <NotificationBadge /> */}
          <AvatarBox />
        </div>
      </Flex>
      <DynamicVacancyContent />
    </div>
  )
}

export default Vacancy
