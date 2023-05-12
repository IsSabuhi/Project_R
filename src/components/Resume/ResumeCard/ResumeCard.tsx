import React from 'react'
import styles from './ResumeCard.module.scss'
import { Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import {
  MdOutlineDeleteOutline,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMoreVert,
} from 'react-icons/md'
import { MenuItem } from 'react-pro-sidebar'

interface IResumeCard {
  name_resume: string
  deleteResume: () => void
}

function ResumeCard({ name_resume, deleteResume }: IResumeCard) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>asdasd</div>
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
