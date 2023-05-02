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

  return <div>asddsa</div>
}

export default Home
