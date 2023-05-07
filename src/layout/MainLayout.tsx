import Sidebar from '@/components/Sidebar/Sidebar'
import { useGetJobseekerByIdQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { joinName } from '@/utils/joinName'
import React, { ReactElement } from 'react'
import styles from './MainLayout.module.scss'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { Avatar, IconButton, Text } from '@chakra-ui/react'

interface IMainLayoutProps {
  children: ReactElement
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const { userId, role, stopAuthSession } = useAuthContext()

  const { data, loading, error } = useGetJobseekerByIdQuery({
    variables: {
      _eq: userId,
    },
  })

  const user = data?.jobseeker[0]
  const isJobseeker = 'Соискатель'
  const isEmployer = 'Работодатель'

  const userName = joinName(user?.lastName!, user?.name!, user?.middleName!)

  return (
    <div className={styles.container}>
      <Sidebar logoutOnClick={stopAuthSession} />
      <div className={styles.container_avatarBox}>
        <AvatarBox
          userLogin={user?.lastName + ' ' + user?.name}
          userName={userName}
          email={user?.email!}
          role={role === 'jobseeker' ? isJobseeker : isEmployer}
          logoutOnClick={stopAuthSession}
        />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainLayout
