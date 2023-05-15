import {
  Exact,
  GetJobseekerResumesQuery,
  InputMaybe,
  InsertResumeMutationVariables,
  useInsertResumeMutation,
} from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { LazyQueryExecFunction } from '@apollo/client'
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
  Select,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

interface IResumeModalCreate {
  isOpen: boolean
  onClose: () => void
  getResumeList: LazyQueryExecFunction<
    GetJobseekerResumesQuery,
    Exact<{
      _eq?: InputMaybe<string> | undefined
    }>
  >
}

const initialResumeModal: InsertResumeMutationVariables = {
  resume_name: '',
}

const ResumeModalCreate = ({
  isOpen,
  onClose,
  getResumeList,
}: IResumeModalCreate) => {
  const { enqueueSnackbar } = useSnackbar()

  const { userProfileId } = useAuthContext()

  const formik = useFormik({
    initialValues: initialResumeModal,
    enableReinitialize: true,
    onSubmit: () => {
      insertResumeMutation({
        variables: {
          jobseeker_id: userProfileId,
          resume_name: formik.values.resume_name,
        },
      })
    },
  })

  const [insertResumeMutation, { data, loading, error }] =
    useInsertResumeMutation({
      onCompleted() {
        onClose()
        getResumeList()
        formik.resetForm()
        return enqueueSnackbar('Резюме создано', {
          variant: 'success',
        })
      },
      onError() {
        onClose()
        formik.resetForm()
        enqueueSnackbar('Не удалось создать резюме', { variant: 'error' })
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
            <FormControl>
              <FormLabel htmlFor="specialization" fontWeight={'normal'}>
                Специальность
              </FormLabel>
              <Input
                id="specialization"
                name="specialization"
                type="text"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                placeholder="Введите название резюме"
                disabled
              />
              {/* TODO Возможно нужно будет сделать Select для тех пользователей которые не зареганы в системе*/}
              {/* <Select
                placeholder="Специальность"
                id="specialization"
                name="specialization"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              >
                <option value="IST">Информационные системы и технологии</option>
                <option value="EMIOP">
                  Экономика, менеджмент и организация производства
                </option>
                <option value="EIA">Электроэнергетика и автоматика</option>
              </Select> */}
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
