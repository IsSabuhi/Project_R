import React from 'react'
import styles from './ResumeCard.module.scss'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import {
  MdOutlineDeleteOutline,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMoreVert,
} from 'react-icons/md'
import Link from 'next/link'
import { APP_URLS } from '@/configs/urls'
import ResumeDeleteModal from './ResumeDeleteModal/ResumeDeleteModal'
import ResumeUpdateModal from './ResumeUpdateModal/ResumeUpdateModal'
import { Resumes } from '@/generated/projectR-hasura'

interface IResumeCard {
  resume_name: string
  resume_id: string
  resumeData: Resumes[]
  deleteResume: () => void
}

function ResumeCard({
  resume_name,
  resume_id,
  resumeData,
  deleteResume,
}: IResumeCard) {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure()
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure()

  const handleDeleteResume = () => {
    deleteResume()
    onDeleteClose()
  }

  return (
    <div className={styles.container}>
      <Link href={APP_URLS.getResumePage(resume_id)} style={{ height: '100%' }}>
        <div className={styles.main}>Нажмите чтобы открыть резюме</div>
      </Link>
      <div className={styles.container_footer}>
        <Text>{resume_name || 'Название резюме'}</Text>
        <Menu>
          <MenuButton>
            <MdOutlineMoreVert />
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={<MdOutlineDriveFileRenameOutline />}
              onClick={onEditOpen}
            >
              Изменить
            </MenuItem>
            <MenuItem icon={<MdOutlineDeleteOutline />} onClick={onDeleteOpen}>
              Удалить
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <ResumeDeleteModal
        resume_name={resume_name}
        handleDeleteResume={handleDeleteResume}
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
      />
      <ResumeUpdateModal
        resume_id={resume_id}
        resumeData={resumeData}
        isOpen={isEditOpen}
        onClose={onEditClose}
      />
    </div>
  )
}

export default ResumeCard
