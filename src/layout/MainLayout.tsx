import Sidebar from '@/components/Sidebar/Sidebar'
import React, { ReactElement } from 'react'
import styles from './MainLayout.module.scss'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import { useRouter } from 'next/router'

interface IMainLayoutProps {
  children: ReactElement
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const router = useRouter()
  const hideAvatarBox = router.pathname === '/home'

  return (
    <div className={styles.container}>
      <Sidebar />
      {hideAvatarBox && (
        <div className={styles.container_avatarBox}>
          <AvatarBox />
        </div>
      )}
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainLayout
