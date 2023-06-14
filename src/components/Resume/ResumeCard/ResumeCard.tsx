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
import { normalizeDate } from '@/utils/normalizeDate'
import { AiOutlineDownload } from 'react-icons/ai'
import { useRouter } from 'next/router'

interface IResumeCard {
  resume_name: string
  data_create: string
  resume_id: string
  deleteResume: () => void
}

function ResumeCard({
  resume_name,
  data_create,
  resume_id,
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

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Link href={APP_URLS.getResumePage(resume_id)} style={{ height: '100%' }}>
        <div className={styles.main}>Нажмите чтобы открыть резюме</div>
      </Link>
      <div className={styles.container_footer}>
        <div className={styles.container_footer_text}>
          <Text className={styles.container_footer_text_resumeName}>
            Название резюме: {resume_name || ''}
          </Text>
          <Text>Дата создания: {normalizeDate(data_create || '')}</Text>
        </div>

        <Menu>
          <MenuButton>
            <MdOutlineMoreVert />
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={<AiOutlineDownload />}
              onClick={() => router.push(APP_URLS.getResumeViewPage(resume_id))}
            >
              Скачать
            </MenuItem>
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
        isOpen={isEditOpen}
        onClose={onEditClose}
      />
    </div>
  )
}

export default ResumeCard
