import patchContact from '@/apis/patchContact'
import { Status } from '@/src/utils/constants'
import { Button, ButtonGroup, useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import Section from '../../../components/layouts/Section'
import { useCustomToast } from '../../../hooks/useCustomToast'
import { usePatchParams } from '../../../hooks/usePatchParams'
import firebaseSDK from '../../../services/firebase'
import mp from '../../../services/mixpanel'
import { useAuth } from '../../Auth/AuthContext'
import useContactStore from './store'
const PhotoUploadModal = dynamic(() => import('../../Shared/PhotoUploadModal'))

const UserImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const auth = useAuth()
  const { createToast } = useCustomToast()
  const [status, setStatus] = useState<Status>(Status.idle)
  const userImage = useContactStore((state) => state.userImage)
  const setProperty = useContactStore((state) => state.setProperty)
  const setUserImage = (value: string) => setProperty('userImage', value)
  const { resumeId, setSaveStatus, setLastSavedAt, token } = usePatchParams()

  const saveToDb = async (url: string) => {
    const key = 'userImage'

    setSaveStatus(Status.loading)
    return await patchContact(key)(token, resumeId, { [key]: url })
      .then(() => {
        setLastSavedAt(new Date())
        mp.track('Загруженная фотография', {
          target: `resume-${resumeId}`,
          status: 'success',
        })
        createToast('Изображение успешно загружено', 'success')
        return setSaveStatus(Status.success)
      })
      .catch(() => {
        mp.track('Загруженная фотография', {
          target: `resume-${resumeId}`,
          status: 'error',
          source: 'Internal',
        })
        setSaveStatus(Status.error)
      })
  }

  const clearImage = async () => {
    setStatus(Status.loading)
    const storageRef = firebaseSDK.storage().ref()

    //Delete from Firebase Storage
    return await storageRef
      .child(auth.user.uid)
      .child(resumeId)
      .delete()
      .then(() => saveToDb(''))
      .then(() => {
        mp.track('Удаление фотографии', {
          target: `resume-${resumeId}`,
          status: 'success',
        })
        setUserImage('')
        setStatus(Status.success)
        return createToast('Фотография удалена', 'success')
      })
      .catch(() => {
        setStatus(Status.error)
        mp.track('Удаление фотографии', {
          target: `resume-${resumeId}`,
          status: 'error',
          source: 'Firebase',
        })
        return createToast(
          'Не удалось удалить изображение',
          'error',
          'Это может быть либо потому, что изображение уже было удалено, либо из-за какой-то внутренней проблемы.'
        )
      })
  }

  return (
    <Section
      header={{
        title: 'Фотография для резюме',
        subtitle: 'Нажмите на кнопку ниже, чтобы загрузить свою фотографию',
        mb: '2',
      }}
    >
      <ButtonGroup my="4">
        <Button
          leftIcon={<FiUpload />}
          colorScheme="blue"
          size="sm"
          variant="solid"
          onClick={onOpen}
          isDisabled={status === Status.loading}
        >
          {userImage.length ? 'Выберите Новый' : 'Загрузить'}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={clearImage}
          isLoading={status === Status.loading}
          loadingText="Removing Image"
          isDisabled={!userImage}
        >
          Удалить изображение
        </Button>
      </ButtonGroup>
      <PhotoUploadModal
        isOpen={isOpen}
        onClose={onClose}
        auth={auth}
        setAvatarCallback={setUserImage}
        dbCallback={saveToDb}
        fileName={resumeId}
      />
    </Section>
  )
}

export default UserImage
