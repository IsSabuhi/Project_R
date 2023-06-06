import { Text } from '@chakra-ui/react'
import styles from '@/styles/Home.module.scss'
import dynamic from 'next/dynamic'
import { useAuthContext } from '@/hooks/use-auth-context'

const DynamicHomeContent = dynamic(() => import('@/modules/Home/HomeContent'), {
  ssr: false,
})

const User = () => {
  return (
    <div className={styles.container_home}>
      <Text fontWeight="semibold" fontSize="2xl" m="15px">
        Резюме
      </Text>

      <DynamicHomeContent />
    </div>
  )
}

export default User
