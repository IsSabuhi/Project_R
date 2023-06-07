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
  const { asPath } = useRouter()
  const router = useRouter()

  const { id } = router.query

  const hideAvatarBox = asPath === `/user/${id}`

  return (
    <div className={styles.container_home}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="2xl" m="15px">
          Резюме
        </Text>
        {hideAvatarBox && (
          <div className={styles.container_avatarBox}>
            <NotificationBadge />
            <AvatarBox />
          </div>
        )}
      </Flex>
      <DynamicHomeContent />
    </div>
  )
}

export default User
