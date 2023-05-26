import React from 'react'
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
  useDisclosure,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
  InsertWorkExperienceMutationVariables,
  useInsertWorkExperienceMutation,
  useUpdateResumeWorkExperienceMutation,
} from '@/generated/projectR-hasura'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'

interface IExperience {
  resume_id: string
}

const initialFormWorkExperience: InsertWorkExperienceMutationVariables = {
  date_dismissal: '',
  date_employment: '',
  description: '',
  jobposition: '',
  name_company: '',
  workLocation: '',
}

function Experience({ resume_id }: IExperience) {
  const { isOpen, onToggle } = useDisclosure()

  const { enqueueSnackbar } = useSnackbar()

  const [values, setValues] = React.useState(initialFormWorkExperience)

  const formik = useFormik({
    initialValues: values,
    enableReinitialize: true,
    onSubmit: () => {
      insertWorkExperienceMutation()
    },
  })

  const [insertWorkExperienceMutation, { data, loading, error }] =
    useInsertWorkExperienceMutation({
      onCompleted(d) {
        updateResumeWorkExperienceMutation({
          variables: {
            _eq: resume_id,
            experience_work_id:
              d.insert_experience_work?.returning[0].experience_work_id,
          },
        })
        formik.resetForm()
        return enqueueSnackbar('Данные сохранены', {
          variant: 'success',
        })
      },
      onError() {
        // formik.resetForm()
        enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
      },
    })

  const [updateResumeWorkExperienceMutation] =
    useUpdateResumeWorkExperienceMutation({})

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_title} onClick={onToggle}>
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
            Добавьте свой первый опыт
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
            borderRadius="15px"
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
            borderRadius="15px"
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
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                value={formik.values.date_employment as string}
                onChange={formik.handleChange}
              />
              <Input
                id="date_dismissal"
                name="date_dismissal"
                type="date"
                borderRadius="15px"
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
              borderRadius="15px"
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
            borderRadius="15px"
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
