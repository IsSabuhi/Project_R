import React, { useState } from 'react'
import styles from './AdditionalInformation.module.scss'
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { drivingCategories, languages, languagesLevel } from '@/configs'
import { FieldArray, useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { useAddAdditionalInformationMutation } from '@/generated/projectR-hasura'
import Language from './LanguageComponent/LanguageComponent'

interface IAdditionalInformation {
  resume_id: string
}

interface Language {
  language: string
  level: string
}

interface AddAdditionalInformationType {
  about_me?: string | null
  driving_categories?: string | null
  medical_book?: boolean | null
  military_service?: boolean | null
  languages?: Language[] | null
}

const initialFormAdditionalInformation: AddAdditionalInformationType = {
  about_me: '',
  driving_categories: '',
  medical_book: false,
  military_service: false,
  languages: languages.map((language) => ({
    language: language.name,
    level: '',
  })),
}

function AdditionalInformation({ resume_id }: IAdditionalInformation) {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: initialFormAdditionalInformation,
    enableReinitialize: true,
    onSubmit: () => {
      const {
        about_me,
        driving_categories,
        medical_book,
        military_service,
        languages,
      } = formik.values

      // Преобразование массива языков в нужный формат перед отправкой
      const formattedLanguages = languages?.map((language) => ({
        language: language.language,
        level: language.level,
      }))

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
        value={formik.values.about_me as string}
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
