import React from 'react'
import styles from './Languages.module.scss'
import {
  Button,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useSnackbar } from 'notistack'
import {
  InsetLanguageMutationVariables,
  Languages,
  useDeleteLanguagesMutation,
  useGetLanguagesLazyQuery,
  useInsetLanguageMutation,
} from '@/generated/projectR-hasura'
import { useFormik } from 'formik'
import LanguagesCards from './LanguagesCards/LanguagesCards'
import { languages, languagesLevel } from '@/configs'

interface ILanguages {
  resume_id: string
}

const initialFormLanguages: InsetLanguageMutationVariables = {
  language_level: '',
  language_name: '',
}

function Languages({ resume_id }: ILanguages) {
  const [isOpen, setIsOpen] = React.useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insetLanguageMutation, { data, loading, error }] =
    useInsetLanguageMutation({
      onCompleted() {
        formik.resetForm()
        getLanguagesList()
        return enqueueSnackbar('Данные сохранены', {
          variant: 'success',
        })
      },
      onError() {
        enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
      },
    })

  const formik = useFormik({
    initialValues: initialFormLanguages,
    enableReinitialize: true,
    onSubmit: () => {
      insetLanguageMutation({
        variables: {
          resume_id: resume_id,
          language_name: formik.values.language_name,
          language_level: formik.values.language_level,
        },
      })
    },
  })

  const [languagesData, setLanguagesData] = React.useState<Languages[]>()

  const [getLanguagesList] = useGetLanguagesLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setLanguagesData(data.languages)
      if (data.languages?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  const [deleteLanguagesMutation] = useDeleteLanguagesMutation({
    onCompleted() {
      getLanguagesList()
      if (languagesData?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
      return enqueueSnackbar('Запрос выполнен успешно', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    },
  })

  React.useEffect(() => {
    getLanguagesList()
  }, [])

  console.log(formik.values)

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Языки</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            {languagesData?.length === 0 ? (
              <Text>Добавьте языки которыми вы владете</Text>
            ) : (
              <div className={styles.container_left_collapse_cards}>
                {languagesData?.map((item, index) => {
                  return (
                    <LanguagesCards
                      key={index}
                      languages_name={item.language_name}
                      languages_level={item.language_level}
                      handleDelete={() =>
                        deleteLanguagesMutation({
                          variables: {
                            _eq: item.language_id,
                          },
                        })
                      }
                    />
                  )
                })}
              </div>
            )}
          </div>
        </Collapse>
      </div>
      <form className={styles.container_right} onSubmit={formik.handleSubmit}>
        <Flex gap={4}>
          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="language_name">
              Выберите язык
            </FormLabel>
            <Select
              id="language_name"
              name="language_name"
              placeholder="Выберите язык"
              value={formik.values.language_name as string}
              onChange={formik.handleChange}
              required
            >
              {languages.map((item, index) => {
                return (
                  <option key={index} value={item.label}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="language_level">
              Уровень владения
            </FormLabel>
            <Select
              id="language_level"
              name="language_level"
              placeholder="Уровень владения"
              value={formik.values.language_level as string}
              onChange={formik.handleChange}
              required
            >
              {languagesLevel.map((item, index) => {
                return (
                  <option key={index} value={item.label}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
          </FormControl>
        </Flex>

        <Button
          type="submit"
          variant="solid"
          loadingText="Сохранение"
          isLoading={loading}
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
    </div>
  )
}

export default Languages
