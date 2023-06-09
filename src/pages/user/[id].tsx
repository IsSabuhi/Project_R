import styles from '@/styles/Home.module.scss'
import dynamic from 'next/dynamic'

const DynamicHomeContent = dynamic(() => import('@/modules/Home/HomeContent'), {
  ssr: false,
})

const User = () => {
  return (
    <div className={styles.container_home}>
      <DynamicHomeContent />
    </div>
  )
}

export default User
