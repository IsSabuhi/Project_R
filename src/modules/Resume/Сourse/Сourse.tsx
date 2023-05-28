import React, { useState } from 'react'
import styles from './Сourses.module.scss'
import {
  Button,
  Collapse,
  Divider,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useSnackbar } from 'notistack'
import { useFormik } from 'formik'
import {
  Course,
  InsertCourseMutationVariables,
  useDeleteCourseMutation,
  useGetCourseLazyQuery,
  useInsertCourseMutation,
} from '@/generated/projectR-hasura'
import CourseCards from './CourseCards/CourseCards'

interface IСourse {
  resume_id: string
}

const initialFormСourse: InsertCourseMutationVariables = {
  course_name: '',
  course_location: '',
  date_receipt: '',
  description: '',
}

function Сourse({ resume_id }: IСourse) {
  const [isOpen, setIsOpen] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insertCourseWorkMutation] = useInsertCourseMutation({
    onCompleted() {
      formik.resetForm()
      getCourseList()
      return enqueueSnackbar('Данные сохранены', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    },
  })

  const formik = useFormik({
    initialValues: initialFormСourse,
    enableReinitialize: true,
    onSubmit: () => {
      insertCourseWorkMutation({
        variables: {
          course_location: formik.values.course_location,
          course_name: formik.values.course_name,
          date_receipt: formik.values.date_receipt,
          description: formik.values.description,
          resume_id: resume_id,
        },
      })
    },
  })

  const [courseWorkData, setCourseWorkData] = useState<Course[]>()

  const [getCourseList] = useGetCourseLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setCourseWorkData(data.course)
      if (data.course?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  const [deleteCourseMutation] = useDeleteCourseMutation({
    onCompleted() {
      getCourseList()
      if (courseWorkData?.length === 0) {
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
    getCourseList()
  }, [])

  console.log(courseWorkData)

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Ваши курсы</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            {courseWorkData?.length === 0 ? (
              <Text>Добавьте свой первый образовательный курс</Text>
            ) : (
              <div className={styles.container_left_collapse_cards}>
                {courseWorkData?.map((item, index) => {
                  return (
                    <CourseCards
                      key={index}
                      course_name={item.course_name as string}
                      course_location={item.course_location as string}
                      date_receipt={item.date_receipt as string}
                      handleDelete={() =>
                        deleteCourseMutation({
                          variables: {
                            _eq: item.course_id,
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
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="course_name">
            Название курса
          </FormLabel>
          <Input
            id="course_name"
            name="course_name"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Название курса"
            value={formik.values.course_name as string}
            onChange={formik.handleChange}
            required
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="course_location">
            Проводившая организация
          </FormLabel>
          <Input
            id="course_location"
            name="course_location"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Наименование места где вы проходили курсы"
            value={formik.values.course_location as string}
            onChange={formik.handleChange}
            required
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="date_receipt">
            Дата окончания *
          </FormLabel>
          <Input
            id="date_receipt"
            name="date_receipt"
            type="date"
            fontSize="sm"
            size="lg"
            value={formik.values.date_receipt as string}
            onChange={formik.handleChange}
            required
          />
          <Text>
            * Если учитесь в настоящее время, укажите год предполагаемого
            окончания
          </Text>
          {/* <NumberInput
            id="date_receipt"
            name="date_receipt"
            min={2000}
            max={2023}
            allowMouseWheel={false}
            isInvalid={year.length !== 4} // Помечаем как недопустимое значение, если длина не равна 4
            placeholder="2020"
            value={formik.values.date_receipt as string}
            onChange={formik.handleChange}
          >
            <NumberInputField
              fontSize="sm"
              placeholder="2020"
              pattern="\d{4}" // Паттерн для ввода только цифр
            />
            <NumberInputStepper />
          </NumberInput> */}
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

export default Сourse
