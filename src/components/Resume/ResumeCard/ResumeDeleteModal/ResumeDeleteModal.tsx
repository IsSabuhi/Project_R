import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'

interface IResumeDeleteModal {
  resume_name: string
  handleDeleteResume: () => void
  isOpen: boolean
  onClose: () => void
}

function ResumeDeleteModal({
  resume_name,
  isOpen,
  onClose,
  handleDeleteResume,
}: IResumeDeleteModal) {
  return (
    <div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Вы уверены что хотите удалить данное резюме? Это действие
            необратимо.
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{resume_name}</ModalBody>

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

export default ResumeDeleteModal
