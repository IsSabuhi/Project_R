import Sidebar from '@/components/Sidebar/Sidebar'
import React, { ReactElement } from 'react'
import styles from './MainLayout.module.scss'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import { useRouter } from 'next/router'

interface IMainLayoutProps {
  children: ReactElement
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const { asPath } = useRouter()
  const router = useRouter()

  const { id } = router.query

  const hideAvatarBox = asPath === `/home/${id}`

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
