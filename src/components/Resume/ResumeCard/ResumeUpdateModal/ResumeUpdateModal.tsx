import {
  UpdateResumeNameMutationVariables,
  useUpdateResumeNameMutation,
} from '@/generated/projectR-hasura'
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
import React from 'react'

interface IResumeIUpdateModal {
  isOpen: boolean
  onClose: () => void
  resume_id: string
}

const initialFormUpdate: UpdateResumeNameMutationVariables = {
  resume_name: '',
}

function ResumeUpdateModal({
  isOpen,
  onClose,
  resume_id,
}: IResumeIUpdateModal) {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: initialFormUpdate,
    enableReinitialize: true,
    onSubmit: () => {
      updateResumeNameMutation({
        variables: {
          _eq: resume_id,
          resume_name: formik.values.resume_name,
        },
      })
    },
  })

  const [updateResumeNameMutation] = useUpdateResumeNameMutation({
    onCompleted() {
      onClose()
      formik.resetForm()
      return enqueueSnackbar('Данные изменены успешно', {
        variant: 'success',
      })
    },
    onError() {
      return enqueueSnackbar('Произошла непредвиденная ошибка', {
        variant: 'error',
      })
    },
  })

  const handleChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(name, value)
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Обновите свое резюме</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel htmlFor="resume_name" fontWeight={'normal'}>
                Название резюме
              </FormLabel>
              <Input
                id="resume_name"
                name="resume_name"
                type="text"
                placeholder="Введите название резюме"
                fontSize="sm"
                size="lg"
                value={formik.values.resume_name as string}
                onChange={(event) => {
                  handleChangeField(
                    event as React.ChangeEvent<HTMLInputElement>
                  )
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              loadingText="Сохранение"
              bg="teal.300"
              h="45"
              mb="5px"
              color="white"
              _hover={{
                bg: 'teal.200',
              }}
              _active={{
                bg: 'teal.400',
              }}
              marginLeft="auto"
            >
              Сохранить
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

export default ResumeUpdateModal