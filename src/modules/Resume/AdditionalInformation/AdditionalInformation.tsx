import React from 'react'
import styles from './AdditionalInformation.module.scss'
import { Button, Checkbox, Flex, Text, Textarea } from '@chakra-ui/react'
import { drivingCategories } from '@/configs'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import {
  AddAdditionalInformationMutationVariables,
  useAddAdditionalInformationMutation,
} from '@/generated/projectR-hasura'

interface IAdditionalInformation {
  resume_id: string
}

const initialFormAdditionalInformation: AddAdditionalInformationMutationVariables =
  {
    about_me: '',
    driving_categories: '',
    medical_book: false,
    military_service: false,
  }

function AdditionalInformation({ resume_id }: IAdditionalInformation) {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: initialFormAdditionalInformation,
    enableReinitialize: true,
    onSubmit: () => {
      addAdditionalInformationMutation({
        variables: {
          _eq: resume_id,
          about_me: formik.values.about_me,
          driving_categories: formik.values.driving_categories,
          medical_book: formik.values.medical_book,
          military_service: formik.values.military_service,
        },
      })
    },
  })

  const [addAdditionalInformationMutation] =
    useAddAdditionalInformationMutation({
      onCompleted() {
        return enqueueSnackbar('Данные сохранены', {
          variant: 'success',
        })
      },
      onError() {
        enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
      },
    })

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <Checkbox
        id="military_service"
        name="military_service"
        checked={formik.values.military_service || false}
        onChange={formik.handleChange}
      >
        Служба в армии
      </Checkbox>
      <Checkbox
        id="medical_book"
        name="medical_book"
        checked={formik.values.military_service || false}
        onChange={formik.handleChange}
      >
        Медицинская книжка
      </Checkbox>
      <div className={styles.container_drivingCategories}>
        <Text>Водительские права (категории):</Text>
        <div className={styles.container_drivingCategories_items}>
          {drivingCategories.map((item, index) => {
            return (
              <Checkbox
                key={index}
                name={`driving_categories[${index}]`}
                checked={formik.values.driving_categories!.includes(item.label)}
                onChange={formik.handleChange}
              >
                {item.label}
              </Checkbox>
            )
          })}
        </div>
      </div>
      <Textarea
        id="about_me"
        name="about_me"
        placeholder="О себе"
        value={formik.values.about_me}
        onChange={formik.handleChange}
      />
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
    </form>
  )
}

export default AdditionalInformation
