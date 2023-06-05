import React, { useState } from 'react'
import styles from './Hobby.module.scss'
import { useSnackbar } from 'notistack'
import {
  Button,
  Collapse,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import HobbyCards from './HobbyCards/HobbyCards'
import {
  Hobby,
  InsertHobbyMutationVariables,
  useDeleteHobbyMutation,
  useGetHobbyLazyQuery,
  useInsertHobbyMutation,
} from '@/generated/projectR-hasura'

interface IHobby {
  resume_id: string
}

const initialFormHobby: InsertHobbyMutationVariables = {
  description: '',
}

function Hobby({ resume_id }: IHobby) {
  const [isOpen, setIsOpen] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insertHobbyMutation, { data, loading, error }] =
    useInsertHobbyMutation({
      onCompleted() {
        formik.resetForm()
        getHobbyList()
        return enqueueSnackbar('Данные сохранены', {
          variant: 'success',
        })
      },
      onError() {
        enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
      },
    })

  const formik = useFormik({
    initialValues: initialFormHobby,
    enableReinitialize: true,
    onSubmit: () => {
      insertHobbyMutation({
        variables: {
          description: formik.values.description,
          resume_id: resume_id,
        },
      })
    },
  })

  const [hobbyData, setHobbyData] = useState<Hobby[]>()

  const [getHobbyList] = useGetHobbyLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setHobbyData(data.hobby)
      if (data.hobby?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  const [deleteHobbyMutation] = useDeleteHobbyMutation({
    onCompleted() {
      getHobbyList()
      if (hobbyData?.length === 0) {
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
    getHobbyList()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Хобби</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            {hobbyData?.length === 0 ? (
              <Text>Напишите, чем вы увлекаетесь в свободное время</Text>
            ) : (
              <div className={styles.container_left_collapse_cards}>
                {hobbyData?.map((item, index) => {
                  return (
                    <HobbyCards
                      key={index}
                      description={item.description as string}
                      handleDelete={() =>
                        deleteHobbyMutation({
                          variables: {
                            _eq: item.hobby_id,
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
          <FormLabel as="legend" htmlFor="description">
            Введите ваши увлечения и интересы
          </FormLabel>
          <Input
            id="description"
            name="description"
            value={formik.values.description as string}
            onChange={formik.handleChange}
            required
          />
        </FormControl>

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

export default Hobby
