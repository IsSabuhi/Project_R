import React from 'react'
import styles from './ResumeCard.module.scss'
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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

interface IResumeCard {
  name_resume: string
  resume_id: string
  deleteResume: () => void
}

function ResumeCard({ name_resume, resume_id, deleteResume }: IResumeCard) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteResume = () => {
    deleteResume()
    onClose()
  }

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
            <MenuItem icon={<MdOutlineDeleteOutline />} onClick={onOpen}>
              Удалить
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Вы уверены что хотите удалить данное резюме?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{name_resume}</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDeleteResume}>
              Удалить
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ResumeCard
