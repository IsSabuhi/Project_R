import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { APP_URLS } from '@/configs/urls'
import { useAuthContext } from '@/hooks/use-auth-context'

const Index: NextPage = () => {
  const router = useRouter()

  const { isAuthorized, userId } = useAuthContext()

  React.useEffect(() => {
    if (isAuthorized) {
      router.push(APP_URLS.getHomePage(userId!))
    } else {
      router.push(APP_URLS.SIGN_IN)
    }
  }, [router])
  return <div></div>
}

export default Index
