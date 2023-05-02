import { useAuthContext } from '@/hooks/use-auth-context'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  const { isAuthorized } = useAuthContext()

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     router.push('/login')
  //   }
  // }, [router])

  return (
    <div>
      <p>asdasd123123</p>
    </div>
  )
}

export default Home
