import React, { useEffect, useState } from 'react'
import styles from './Experience.module.scss'
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
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import {
  Experience_Work,
  InsertExperienceWorkMutationVariables,
  useDeleteExperienceWorkMutation,
  useGetExperienceWorkLazyQuery,
  useInsertExperienceWorkMutation,
} from '@/generated/projectR-hasura'
import ExperienceWorkCard from './ExperienceWorkCard/ExperienceWorkCard'

interface IExperience {
  resume_id: string
}

const initialFormWorkExperience: InsertExperienceWorkMutationVariables = {
  date_dismissal: '',
  date_employment: '',
  description: '',
  jobposition: '',
  name_company: '',
  workLocation: '',
}

function Experience({ resume_id }: IExperience) {
  const [isOpen, setIsOpen] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insertExperienceWorkMutation] = useInsertExperienceWorkMutation({
    onCompleted() {
      formik.resetForm()
      getexperienceWorkList()
      return enqueueSnackbar('Данные сохранены', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    },
  })

  const formik = useFormik({
    initialValues: initialFormWorkExperience,
    enableReinitialize: true,
    onSubmit: () => {
      insertExperienceWorkMutation({
        variables: {
          date_dismissal: formik.values.date_dismissal,
          date_employment: formik.values.date_employment,
          description: formik.values.description,
          jobposition: formik.values.jobposition,
          name_company: formik.values.name_company,
          resume_id: resume_id,
          workLocation: formik.values.workLocation,
        },
      })
    },
  })

  const [experience_workData, setexperience_workData] =
    useState<Experience_Work[]>()

  const [getexperienceWorkList] = useGetExperienceWorkLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setexperience_workData(data.experience_work)
      if (data.experience_work?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  const [deleteExperienceWorkMutation] = useDeleteExperienceWorkMutation({
    onCompleted() {
      getexperienceWorkList()
      if (experience_workData?.length === 0) {
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

  useEffect(() => {
    getexperienceWorkList()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Ваш опыт</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            {experience_workData?.length === 0 ? (
              <Text>Добавьте свой первый опыт</Text>
            ) : (
              <div className={styles.container_left_collapse_cards}>
                {experience_workData?.map((item, index) => {
                  return (
                    <ExperienceWorkCard
                      key={index}
                      jobposition={item.jobposition as string}
                      name_company={item.name_company as string}
                      workLocation={item.workLocation as string}
                      handleDelete={() =>
                        deleteExperienceWorkMutation({
                          variables: {
                            _eq: item.experience_work_id,
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
        <FormControl>
          <FormLabel as="legend" htmlFor="jobposition">
            Кем вы работали?
          </FormLabel>
          <Input
            id="jobposition"
            name="jobposition"
            type="text"
            placeholder="Должность"
            fontSize="sm"
            size="lg"
            value={formik.values.jobposition as string}
            onChange={formik.handleChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel as="legend" htmlFor="name_company">
            В какой компании вы работали?
          </FormLabel>
          <Input
            id="name_company"
            name="name_company"
            type="text"
            placeholder="Наименование компании"
            fontSize="sm"
            size="lg"
            value={formik.values.name_company as string}
            onChange={formik.handleChange}
            required
          />
        </FormControl>

        <Flex gap={4}>
          <FormControl>
            <FormLabel as="legend" htmlFor="date">
              Как долго вы были в компании?
            </FormLabel>
            <div className={styles.container_right_dateInput}>
              <Input
                id="date_employment"
                name="date_employment"
                type="date"
                fontSize="sm"
                size="lg"
                value={formik.values.date_employment as string}
                onChange={formik.handleChange}
              />
              <Input
                id="date_dismissal"
                name="date_dismissal"
                type="date"
                fontSize="sm"
                size="lg"
                value={formik.values.date_dismissal as string}
                onChange={formik.handleChange}
              />
            </div>
          </FormControl>

          <FormControl>
            <FormLabel as="legend" htmlFor="workLocation">
              Где находилась компания ?
            </FormLabel>
            <Input
              id="workLocation"
              name="workLocation"
              type="text"
              placeholder="Город"
              fontSize="sm"
              size="lg"
              value={formik.values.workLocation as string}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel as="legend" htmlFor="description">
            Чем вы занимались в компании ?
          </FormLabel>
          <Textarea
            id="description"
            name="description"
            placeholder="Напишите чем вы занимались на прошлой работе"
            fontSize="sm"
            size="lg"
            value={formik.values.description as string}
            onChange={formik.handleChange}
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

export default Experience
