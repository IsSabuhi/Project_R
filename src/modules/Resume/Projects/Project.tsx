import {
  Button,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './Project.module.scss'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
  InsertProjectMutationVariables,
  Projects,
  useGetProjectsLazyQuery,
  useGetProjectsQuery,
  useInsertProjectMutation,
} from '@/generated/projectR-hasura'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'

interface IProject {
  resume_id: string
}

const initialFormProject: InsertProjectMutationVariables = {
  description: '',
  name_organization: '',
  project_name: '',
}

function Project({ resume_id }: IProject) {
  const [isOpen, setIsOpen] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insertProjectMutation] = useInsertProjectMutation({
    onCompleted() {
      formik.resetForm()
      return enqueueSnackbar('Данные сохранены', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    },
  })

  const formik = useFormik({
    initialValues: initialFormProject,
    enableReinitialize: true,
    onSubmit: () => {
      insertProjectMutation({
        variables: {
          description: formik.values.description,
          name_organization: formik.values.name_organization,
          project_name: formik.values.project_name,
          resume_id: resume_id,
        },
      })
    },
  })

  const [projectData, setProjectData] = useState<Projects[]>()

  const [getProjectsList] = useGetProjectsLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setProjectData(data.projects)
      if (data.projects?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  React.useEffect(() => {
    getProjectsList()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Ваши проекты</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            Добавьте свой первый проект
          </div>
        </Collapse>
      </div>
      <form className={styles.container_right}>
        <Flex gap={5}>
          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="project_name">
              Название вашего проекта
            </FormLabel>
            <Input
              id="project_name"
              name="project_name"
              type="text"
              fontSize="sm"
              size="lg"
              placeholder="Тема проекта"
            />
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="project_company">
              В какой организации вы делали свой проект?
            </FormLabel>
            <Input
              id="project_company"
              name="project_company"
              type="text"
              fontSize="sm"
              size="lg"
              placeholder="Наименование организации"
            />
          </FormControl>
        </Flex>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="project_about">
            Кратко опишите что вы сделали
          </FormLabel>

          <Textarea
            id="project_about"
            name="project_about"
            placeholder="Что вы сделали?"
            fontSize="sm"
            size="lg"
          />
        </FormControl>
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
    </div>
  )
}

export default Project
