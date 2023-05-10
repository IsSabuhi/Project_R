import Sidebar from '@/components/Sidebar/Sidebar'
import { useAuthContext } from '@/hooks/use-auth-context'
import React, { ReactElement } from 'react'
import styles from './MainLayout.module.scss'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import { useRouter } from 'next/router'
import AvatarBoxEmployer from '@/components/Sidebar/AvatarBoxEmployer/AvatarBoxEmployer'

interface IMainLayoutProps {
  children: ReactElement
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const router = useRouter()

  const hideAvatarBox = router.pathname === '/home'
  const { userId, role, stopAuthSession } = useAuthContext()

  return (
    <div className={styles.container}>
      <Sidebar />
      {hideAvatarBox && (
        <div className={styles.container_avatarBox}>
          {role === 'jobseeker' ? (
            <AvatarBox userId={userId!} logoutOnClick={stopAuthSession} />
          ) : (
            <AvatarBoxEmployer
              userId={userId!}
              logoutOnClick={stopAuthSession}
            />
          )}
        </div>
      )}
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainLayout
