import ResumeNewCard from '@/components/Resume/ResumeNewCard/ResumeNewCard'
import { useAuthContext } from '@/hooks/use-auth-context'
import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.scss'

const Home = () => {
  const router = useRouter()

  const { isAuthorized } = useAuthContext()

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     router.push('/login')
  //   }
  // }, [router])

  return (
    <div className={styles.container_home}>
      <Text fontWeight="semibold" fontSize="2xl" m="15px">
        Резюме
      </Text>

      <div className={styles.main_cards}>
        <ResumeNewCard />
      </div>
    </div>
  )
}

export default Home
