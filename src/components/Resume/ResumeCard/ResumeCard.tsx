import React from 'react'
import styles from './ResumeCard.module.scss'
import { Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import {
  MdOutlineDeleteOutline,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMoreVert,
} from 'react-icons/md'
import { MenuItem } from 'react-pro-sidebar'
import Link from 'next/link'
import { APP_URLS } from '@/configs/urls'

interface IResumeCard {
  name_resume: string
  resume_id: string
  deleteResume: () => void
}

function ResumeCard({ name_resume, resume_id, deleteResume }: IResumeCard) {
  return (
    <div className={styles.container}>
      <Link href={APP_URLS.getResumePage(resume_id)} style={{ height: '100%' }}>
        <div className={styles.main}>Нажмите чтобы открыть резюме</div>
      </Link>
      <div className={styles.container_footer}>
        <Text>{name_resume || 'Название резюме'}</Text>
        <Menu>
          <MenuButton>
            <MdOutlineMoreVert />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<MdOutlineDriveFileRenameOutline />}>
              Изменить
            </MenuItem>
            <MenuItem icon={<MdOutlineDeleteOutline />} onClick={deleteResume}>
              Удалить
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default ResumeCard
