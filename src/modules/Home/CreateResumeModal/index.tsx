import { getCloneResume, getNewResume } from '@/apis/resume'
import { Status } from '@/src/utils/constants'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { resumeMetaPlaceholder } from '../../../data/placeholderData'
import { useCustomToast } from '../../../hooks/useCustomToast'
import useUserStore from '../../User/store'
import { ResumeMetadata, UserObject } from '../../User/types'
import CreateResumeBody from './CreateResumeBody'
import CreateResumeFooter from './CreateResumeFooter'

interface CreateResumeModalProps {
  data: UserObject
  options: { isOpen: boolean; onClose: () => void }
}

export type Method = 'EXISTING' | 'SCRATCH' | null

const CreateResumeModal: React.FC<CreateResumeModalProps> = ({
  data,
  options,
}) => {
  const router = useRouter()

  const [method, setMethod] = useState<Method>(null)
  const [status, setStatus] = useState<Status>(Status.idle)
  const { isOpen, onClose } = options
  const { createToast } = useCustomToast()
  const { setProperty } = useUserStore()
  const token = Cookies.get('token')

  const [selectedResume, setSelectedResume] = useState<ResumeMetadata>(() =>
    data.active.length ? data.active[0] : resumeMetaPlaceholder
  )

  const createResume = async (
    apiCallback: (...params: any) => Promise<any>,
    token = null
  ) => {
    setStatus(Status.loading)
    return await apiCallback(token)
      .then((res) => {
        setStatus(Status.success)
        setProperty('active', res.active)
        createToast(
          'Создано новое резюме!',
          'success',
          'Теперь вы можете приступить к редактированию своего резюме'
        )

        const newResumeId = res.active[res.active.length - 1]._id

        router.push(`/create/${newResumeId}`)
      })
      .catch((err) => {
        setStatus(Status.error)
        //If the resume limit has been hit, return a different toast.
        if (err.response.status === 409) {
          return createToast(
            'Не удалось создать новое резюме',
            'error',
            'You already have the maximum resumes which can be created on this plan.'
          )
        }
        return createToast(
          'Не удалось создать новое резюме',
          'error',
          'При создании вашего резюме произошла какая-то неожиданная ошибка. Попробуйте еще раз, и если это не повторится, пожалуйста, свяжитесь с нами по электронной почте'
        )
      })
  }

  const createNewResume = async (method: Method) => {
    switch (method) {
      case 'SCRATCH':
        return await createResume(getNewResume, token).then(() => onClose())
      case 'EXISTING':
        return await createResume(
          getCloneResume(selectedResume._id),
          token
        ).then(() => onClose())
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="2xl">
        <ModalCloseButton />
        <ModalHeader>
          <Text>Создать новое резюме</Text>
          <Text
            fontSize="sm"
            color={useColorModeValue('gray', 'whiteAlpha')}
            fontWeight="normal"
          >
            Выберите один из них, чтобы начать
          </Text>
        </ModalHeader>
        <CreateResumeBody
          data={data}
          method={method}
          callback={setMethod}
          selectedHandlers={{
            value: selectedResume,
            setValue: setSelectedResume,
          }}
        />
        <CreateResumeFooter
          method={method}
          onCloseCallback={onClose}
          actionCallback={createNewResume}
          status={status}
        />
      </ModalContent>
    </Modal>
  )
}

export default CreateResumeModal
