import React, { useState } from 'react'
import styles from './SaveResume.module.scss'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Resumes,
  UpdateResumeAddTemplateMutationVariables,
  useAiGenerationSkillsMutation,
  useGetResumesLazyQuery,
  useUpdateResumeAddTemplateMutation,
} from '@/generated/projectR-hasura'
import { normalizeDate } from '@/utils/normalizeDate'
import template1 from '@/assets/images/resumesTemplate/template1.png'
import template2 from '@/assets/images/resumesTemplate/template2.png'
import ResumesTemplateImage from './ResumesTemplate/ResumesTemplateImage'
import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import SidebarBlue from '@/templates/SidebarBlue/SidebarBlue'
import Loader from '@/components/Loader'
import { useSnackbar } from 'notistack'
import { useFormik } from 'formik'

interface ISaveResume {
  resume_id: string
  onTemplateSelect?: (template: string) => void
}

const initialFormTemplate: UpdateResumeAddTemplateMutationVariables = {
  template: '',
}

function SaveResume({ resume_id, onTemplateSelect }: ISaveResume) {
  const [resumesData, setResumeData] = React.useState<Resumes[]>()

  const { enqueueSnackbar } = useSnackbar()

  const [getResumeList] = useGetResumesLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setResumeData(data.resumes as Resumes[])
    },
  })

  React.useEffect(() => {
    getResumeList()
  }, [])

  const [selectedTemplate, setSelectedTemplate] = React.useState<string | null>(
    null
  )

  // Функция для выбора шаблона
  const selectTemplate = (template: string) => {
    setSelectedTemplate(template)
  }

  // Функция для обработки выбора шаблона пользователем
  // const handleTemplateSelect = () => {
  //   if (selectedTemplate) {
  //     onTemplateSelect(selectedTemplate)
  //   }
  // }

  const [isSharingResume, setIsSharingResume] = useState(false)
  const [resumeUrl, setResumeUrl] = useState('')

  const handleResumeSharingToggle = () => {
    setIsSharingResume(!isSharingResume)

    if (!isSharingResume) {
      const newResumeUrl = `http://localhost:3000/resumeView/${resume_id}`
      setResumeUrl(newResumeUrl)
    } else {
      setResumeUrl('')
    }
  }

  // const [loading, setLoading] = useState(true)

  const [aiGenerationSkillsMutation, { data, loading, error }] =
    useAiGenerationSkillsMutation({
      onCompleted(data) {
        return enqueueSnackbar('Резюме сгенерировано успешно', {
          variant: 'success',
        })
      },
      onError(error) {
        enqueueSnackbar('Ошибка', { variant: 'error' })
      },
    })

  // React.useEffect(() => {
  //   // Имитируем задержку загрузки в течение 3 секунд
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  // }, [])

  const formik = useFormik({
    initialValues: initialFormTemplate,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  const [updateResumeAddTemplateMutation] = useUpdateResumeAddTemplateMutation({
    onCompleted() {
      return enqueueSnackbar('Данные сохранены', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    },
  })

  const handleUpdateResume = () => {
    updateResumeAddTemplateMutation({
      variables: {
        _eq: resume_id,
        template: formik.values.template,
      },
    })

    aiGenerationSkillsMutation({
      variables: {
        resume_id: resume_id,
      },
    })
  }

  console.log(formik.values)

  return (
    <div className={styles.container}>
      <div className={styles.container_main}>
        <div className={styles.container_main_header}>
          <Text fontSize="20px" fontWeight="bold" textTransform="uppercase">
            {resumesData && resumesData[0]?.resume_name}
          </Text>
          <Flex gap={5} alignItems="center">
            <Button
              variant="solid"
              loadingText="Загрузка..."
              bg="#868dfb"
              h="45"
              mb="5px"
              color="white"
              _hover={{
                bg: '#b5b9ee',
              }}
              _active={{
                bg: '#868dfb',
              }}
              marginLeft="auto"
              onClick={() => handleUpdateResume()}
            >
              Сгенерировать резюме
            </Button>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Скачать
              </MenuButton>
              <MenuList>
                <MenuItem>Экспорт .PDF</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </div>
        <Text className={styles.container_main_text}>
          Резюме создано:{' '}
          {resumesData && normalizeDate(resumesData[0]?.data_create as string)}
        </Text>
        <div className={styles.container_main_viewResume}>
          <div className={styles.container_main_viewResume_main}>
            {/* <ClassicTemplate /> */}
            {/* {loading ? (
              <Loader />
            ) : (
              <SidebarBlue resumesData={resumesData as Resumes[]} />
            )} */}
            <ResumesTemplateImage
              image={template1}
              onSelect={() => formik.setFieldValue('template', 'template1')}
              isSelected={formik.values.template === 'template1'}
            />
            <ResumesTemplateImage
              image={template2}
              onSelect={() => formik.setFieldValue('template', 'template2')}
              isSelected={formik.values.template === 'template2'}
            />
          </div>

          <div className={styles.container_main_viewResume_sidebar}>
            <div className={styles.container_main_viewResume_sidebar_isPublic}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="resume-sharing" mb="0">
                  Готов делиться резюме
                </FormLabel>
                <Switch
                  id="resume-sharing"
                  ml="3"
                  isChecked={isSharingResume}
                  onChange={handleResumeSharingToggle}
                />
              </FormControl>
              {isSharingResume && (
                <Box mt="4">
                  {resumeUrl ? (
                    <Box>
                      <Text>Ссылка на ваше резюме:</Text>
                      <Link href={resumeUrl} isExternal ml="2">
                        {resumeUrl}
                      </Link>
                    </Box>
                  ) : (
                    'Ссылка на резюме ещё не сгенерирована.'
                  )}
                </Box>
              )}
            </div>
            <div className={styles.container_main_viewResume_sidebar_checkbox}>
              <Checkbox>
                <Text>
                  Подтверждаю и соглашаюсь, что моё резюме может быть
                  просмотрено другими пользователями
                </Text>
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveResume
