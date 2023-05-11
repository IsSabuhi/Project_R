import { Status } from '@/constants'
import {
  InsertResumeMutationVariables,
  useInsertResumeMutation,
} from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

interface IResumeModalCreate {
  isOpen: boolean
  onClose: () => void
}

const initialResumeModal: InsertResumeMutationVariables = {
  resume_name: '',
}

const ResumeModalCreate = ({ isOpen, onClose }: IResumeModalCreate) => {
  const { enqueueSnackbar } = useSnackbar()

  const [status, setStatus] = useState<Status>(Status.idle)

  const { jobseekerId } = useAuthContext()

  const [insertResumeMutation, { data, loading, error }] =
    useInsertResumeMutation({
      onCompleted() {
        setStatus(Status.success)
        onClose()
        return enqueueSnackbar('Резюме создано', {
          variant: 'success',
        })
      },
      onError() {
        setStatus(Status.error)
        onClose()
        enqueueSnackbar('Не удалось создать резюме', { variant: 'error' })
      },
    })

  const formik = useFormik({
    initialValues: initialResumeModal,
    enableReinitialize: true,
    onSubmit: () => {
      insertResumeMutation({
        variables: {
          jobseeker_id: jobseekerId,
          resume_name: formik.values.resume_name,
        },
      })
    },
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>Создание резюме</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="resume_name" fontWeight={'normal'}>
                Название резюме
              </FormLabel>
              <Input
                id="resume_name"
                name="resume_name"
                type="text"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                placeholder="Введите название резюме"
                onChange={formik.handleChange}
                value={formik.values.resume_name!}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Отмена
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              loadingText="Создание резюме"
              isLoading={loading}
              bg="teal.300"
              mb="20px"
              color="white"
              mt="20px"
              _hover={{
                bg: 'teal.200',
              }}
              _active={{
                bg: 'teal.400',
              }}
            >
              Сохранить
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default ResumeModalCreate
