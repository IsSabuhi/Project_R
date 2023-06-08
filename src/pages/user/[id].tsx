import { Flex, Text } from '@chakra-ui/react'
import styles from '@/styles/Home.module.scss'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import NotificationBadge from '@/components/Notification'

const DynamicHomeContent = dynamic(() => import('@/modules/Home/HomeContent'), {
  ssr: false,
})

const User = () => {
  return (
    <div className={styles.container_home}>
      <DynamicHomeContent />
    </div>
  )
}

export default User
