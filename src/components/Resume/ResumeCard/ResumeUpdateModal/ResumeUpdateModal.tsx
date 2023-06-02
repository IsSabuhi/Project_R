import {
  Resumes,
  UpdateResumeNameMutationVariables,
  useGetJobseekerResumesQuery,
  useUpdateResumeNameMutation,
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
import React, { useEffect } from 'react'

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

  const [values, setValues] = React.useState(initialFormUpdate)

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

  const formik = useFormik({
    initialValues: values,
    enableReinitialize: true,
    onSubmit: () => {
      updateResumeNameMutation({
        variables: {
          _eq: resume_id,
          resume_name: formik.values.resume_name,
          desired_position: formik.values.desired_position,
        },
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
            <FormControl>
              <FormLabel
                htmlFor="desired_position"
                fontWeight={'normal'}
                mt={2}
              >
                Желаемая должность
              </FormLabel>
              <Input
                id="desired_position"
                name="desired_position"
                type="text"
                fontSize="sm"
                size="lg"
                placeholder="React Developer, Python Developer ..."
                onChange={formik.handleChange}
                value={formik.values.desired_position as string}
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
