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
  useGetResumesQuery,
  useUpdateResumeAddTemplateMutation,
  useUpdateResumesIsConfirmedMutation,
} from '@/generated/projectR-hasura'
import { normalizeDate } from '@/utils/normalizeDate'
import template1 from '@/assets/images/resumesTemplate/template1.png'
import template2 from '@/assets/images/resumesTemplate/template2.png'
import template3 from '@/assets/images/resumesTemplate/template3.png'
import ResumesTemplateImage from './ResumesTemplate/ResumesTemplateImage'
import ClassicTemplate from '@/templates/Classic/ClassicTemplate'
import SidebarBlue from '@/templates/SidebarBlue/SidebarBlue'
import Loader from '@/components/Loader'
import { useSnackbar } from 'notistack'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'

interface ISaveResume {
  resume_id: string
}

type initialFormTemplateType = {
  template: string
  isConfirmed: boolean | undefined
}

const initialFormTemplate: initialFormTemplateType = {
  template: '',
  isConfirmed: false,
}

function SaveResume({ resume_id }: ISaveResume) {
  const { enqueueSnackbar } = useSnackbar()

  const router = useRouter()

  const [template, setTemplate] = useState<string | null>()

  // const [resumesData, setResumeData] = React.useState<Resumes[]>()

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

  const [isSharingResume, setIsSharingResume] = useState(false)
  const [resumeUrl, setResumeUrl] = useState('')

  const [isResumeGenerated, setIsResumeGenerated] = useState(false)

  const {
    data: resumesData,
    loading,
    error,
    refetch,
  } = useGetResumesQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      // setResumeData(data.resumes as Resumes[])
      setIsCheckboxChecked(data.resumes[0].isConfirmed)
      setTemplate(data.resumes[0].template)
    },
  })

  const handleResumeSharingToggle = () => {
    setIsSharingResume(!isSharingResume)

    if (!isSharingResume) {
      const newResumeUrl = `http://localhost:3000/resumeView/${resume_id}`
      setResumeUrl(newResumeUrl)
    } else {
      setResumeUrl('')
    }
  }

  const [aiGenerationSkillsMutation, { loading: aiGenerationSkillsLoading }] =
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

  const formik = useFormik({
    initialValues: initialFormTemplate,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  const [
    updateResumeAddTemplateMutation,
    { loading: updateResumeAddTemplateLoading },
  ] = useUpdateResumeAddTemplateMutation()

  const [updateResumesIsConfirmedMutation] =
    useUpdateResumesIsConfirmedMutation({
      onCompleted() {
        return enqueueSnackbar('Данные обновлены', {
          variant: 'success',
        })
      },
      onError(error) {
        enqueueSnackbar('Ошибка', { variant: 'error' })
      },
    })

  const handleCheckboxChange = () => {
    setIsCheckboxChecked((old) => {
      updateResumesIsConfirmedMutation({
        variables: {
          isConfirmed: !old,
          _eq: resume_id,
        },
      })

      return !old
    })
  }

  console.log(isCheckboxChecked)

  const totalLoading =
    aiGenerationSkillsLoading || updateResumeAddTemplateLoading || loading

  const handleUpdateResume = async () => {
    try {
      await updateResumeAddTemplateMutation({
        variables: {
          _eq: resume_id,
          template: formik.values.template,
        },
      })

      await aiGenerationSkillsMutation({
        variables: {
          resume_id: resume_id,
        },
      })

      await refetch()
      setTemplate(formik.values.template)
      setIsResumeGenerated(true)
    } catch (error) {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    }
  }

  const handleChangeSetTamplate = () => {
    setTemplate(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_main}>
        <div className={styles.container_main_header}>
          <Text fontSize="20px" fontWeight="bold" textTransform="uppercase">
            {resumesData && resumesData.resumes[0]?.resume_name}
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
              onClick={handleChangeSetTamplate}
            >
              Шаблоны
            </Button>
            <Button
              variant="solid"
              loadingText="Загрузка..."
              isLoading={
                aiGenerationSkillsLoading || updateResumeAddTemplateLoading
              }
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
              isDisabled={!formik.values.template}
              onClick={() => handleUpdateResume()}
            >
              Сгенерировать резюме
            </Button>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Скачать
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => router.push(`/resumeView/${resume_id}`)}
                >
                  Экспорт .PDF
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </div>
        <Text className={styles.container_main_text}>
          Резюме создано:{' '}
          {resumesData &&
            normalizeDate(resumesData.resumes[0]?.data_create as string)}
        </Text>
        <div className={styles.container_main_viewResume}>
          <div className={styles.container_main_viewResume_main}>
            {aiGenerationSkillsLoading ? (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Loader />
              </Box>
            ) : template != null || template != undefined ? (
              <div className={styles.container_main_viewResume_main_view}>
                {template === 'template1' && (
                  <ClassicTemplate
                    resumesData={resumesData?.resumes as Resumes[]}
                  />
                )}
                {template === 'template2' && (
                  <SidebarBlue
                    resumesData={resumesData?.resumes as Resumes[]}
                  />
                )}
              </div>
            ) : (
              <div className={styles.container_main_viewResume_main_tempaltes}>
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
                <ResumesTemplateImage
                  image={template3}
                  onSelect={() => formik.setFieldValue('template', 'template3')}
                  isSelected={formik.values.template === 'template3'}
                />
              </div>
            )}
          </div>

          <div className={styles.container_main_viewResume_sidebar}>
            <div className={styles.container_main_viewResume_sidebar_isPublic}>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
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
            {template == null && (
              <form
                onSubmit={formik.handleSubmit}
                className={styles.container_main_viewResume_sidebar_checkbox}
              >
                <Checkbox
                  id="isConfirmed"
                  name="isConfirmed"
                  onChange={handleCheckboxChange}
                  isChecked={isCheckboxChecked}
                >
                  <Text>
                    Подтверждаю и соглашаюсь, что моё резюме может быть
                    просмотрено другими пользователями
                  </Text>
                </Checkbox>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveResume
