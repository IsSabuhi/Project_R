import React from 'react'
import styles from './AdditionalInformation.module.scss'
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { languages } from '@/configs'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import {
  useAddAdditionalInformationMutation,
  useGetResumesQuery,
} from '@/generated/projectR-hasura'
import Language from './LanguageComponent/LanguageComponent'
import ReactQuillWrapper from '@/components/ReactQuillWrapper'

interface IAdditionalInformation {
  resume_id: string
}

interface Language {
  language: string
  level: string
}

export interface AddAdditionalInformationType {
  about_me?: string | null
  desired_position?: string | null
  programming_languages?: string | null
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
  desired_position: '',
  programming_languages: '',
  languages: languages.map((language) => ({
    language: language.name,
    level: '',
  })),
}

function AdditionalInformation({ resume_id }: IAdditionalInformation) {
  const { enqueueSnackbar } = useSnackbar()

  const [values, setValues] = React.useState(initialFormAdditionalInformation)

  const [checkboxData, setCheckboxData] = React.useState<boolean[]>([])

  const { data, loading, error } = useGetResumesQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setValues(data.resumes[0])
    },
  })

  const formik = useFormik({
    initialValues: values,
    enableReinitialize: true,
    onSubmit: () => {
      addAdditionalInformationMutation({
        variables: {
          _eq: resume_id,
          about_me: formik.values.about_me,
          driving_categories: formik.values.driving_categories,
          medical_book: formik.values.medical_book,
          military_service: formik.values.military_service,
          desired_position: formik.values.desired_position,
          programming_languages: formik.values.programming_languages,
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
      <FormControl>
        <FormLabel as="legend" htmlFor="desired_position">
          Желаемая должность
        </FormLabel>
        <Input
          id="desired_position"
          name="desired_position"
          type="text"
          fontSize="sm"
          size="lg"
          placeholder="React разработчик, администратор баз данных ..."
          value={formik.values.desired_position as string}
          onChange={formik.handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel as="legend" htmlFor="programming_languages">
          Языки программирования
        </FormLabel>
        <ReactQuillWrapper
          id="programming_languages"
          placeholder="Языки программирования"
          value={formik.values.programming_languages as string}
          onChange={(v: string) =>
            formik.setFieldValue('programming_languages', v)!
          }
        />
      </FormControl>

      <FormControl>
        <FormLabel as="legend" htmlFor="about_me">
          О себе
        </FormLabel>
        <ReactQuillWrapper
          id="about_me"
          placeholder="Напишите о себе"
          value={formik.values.about_me as string}
          onChange={(v: string) => formik.setFieldValue('about_me', v)!}
        />
      </FormControl>
      {/* TODO Разобраться почему не работает Checkbox */}
      <Checkbox
        id="military_service"
        name="military_service"
        checked={checkboxData[0]}
        onChange={(e) => {
          formik.handleChange(e)
          const newCheckboxData = [...checkboxData]
          newCheckboxData[0] = e.target.checked
          setCheckboxData(newCheckboxData)
        }}
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
