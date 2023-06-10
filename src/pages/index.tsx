import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { APP_URLS } from '@/configs/urls'
import { useAuthContext } from '@/hooks/use-auth-context'
import styles from '@/styles/Home.module.scss'
import Loader from '@/components/Loader'

const Index: NextPage = () => {
  const router = useRouter()

  const { isAuthorized, userId } = useAuthContext()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthorized) {
        router.push(APP_URLS.getHomePage(userId as string))
      } else {
        router.push(APP_URLS.SIGN_IN)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [isAuthorized, router, userId])

  return (
    <div className={styles.container_index}>
      <Loader />
    </div>
  )
}

export default Index
