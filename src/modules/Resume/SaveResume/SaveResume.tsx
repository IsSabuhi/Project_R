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
}

const initialFormTemplate: UpdateResumeAddTemplateMutationVariables = {
  template: '',
  isConfirmed: false,
}

function SaveResume({ resume_id }: ISaveResume) {
  const { enqueueSnackbar } = useSnackbar()

  const [resumesData, setResumeData] = React.useState<Resumes[]>()

  const [loading, setLoading] = useState(false)

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

  const [isSharingResume, setIsSharingResume] = useState(false)
  const [resumeUrl, setResumeUrl] = useState('')

  const [isResumeGenerated, setIsResumeGenerated] = useState(false)

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

  const handleResumeSharingToggle = () => {
    setIsSharingResume(!isSharingResume)

    if (!isSharingResume) {
      const newResumeUrl = `http://localhost:3000/resumeView/${resume_id}`
      setResumeUrl(newResumeUrl)
    } else {
      setResumeUrl('')
    }
  }

  const [aiGenerationSkillsMutation] = useAiGenerationSkillsMutation({
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

  const [updateResumeAddTemplateMutation] = useUpdateResumeAddTemplateMutation({
    // onCompleted() {
    //   return enqueueSnackbar('Данные сохранены', {
    //     variant: 'success',
    //   })
    // },
    // onError() {
    //   enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    // },
  })

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked)
  }

  const handleUpdateResume = async () => {
    if (!isCheckboxChecked) {
      return
    }
    setLoading(true)

    try {
      await updateResumeAddTemplateMutation({
        variables: {
          _eq: resume_id,
          template: formik.values.template,
          isConfirmed: formik.values.isConfirmed,
        },
      })

      await aiGenerationSkillsMutation({
        variables: {
          resume_id: resume_id,
        },
      })

      setLoading(false)
      setIsResumeGenerated(true)
      enqueueSnackbar('Данные сохранены', {
        variant: 'success',
      })
    } catch (error) {
      setLoading(false)
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    }
  }

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
              isLoading={loading}
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
              isDisabled={!isCheckboxChecked || !formik.values.template}
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
            {loading ? (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Loader />
              </Box>
            ) : isResumeGenerated ? (
              <>
                {resumesData && resumesData[0].template === 'template1' && (
                  <ClassicTemplate resumesData={resumesData as Resumes[]} />
                )}
                {resumesData && resumesData[0].template === 'template2' && (
                  <SidebarBlue resumesData={resumesData as Resumes[]} />
                )}
              </>
            ) : (
              <>
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
              </>
            )}

            {/* {!isResumeGenerated ? (
              <>
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
              </>
            ) : (
              <>
                {loading ? (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Loader />
                  </Box>
                ) : (
                  <SidebarBlue resumesData={resumesData as Resumes[]} />
                )}
              </>
            )} */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveResume
