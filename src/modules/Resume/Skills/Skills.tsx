import {
  Button,
  Collapse,
  Divider,
  FormControl,
  FormLabel,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './Skills.module.scss'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useSnackbar } from 'notistack'
import { useFormik } from 'formik'
import {
  InsertSkillsMutationVariables,
  Skills,
  useDeleteSkillsMutation,
  useGetSkillsLazyQuery,
  useInsertSkillsMutation,
} from '@/generated/projectR-hasura'
import SkillsCards from './SkillsCards/SkillsCards'

interface ISkills {
  resume_id: string
}

const initialFormSkills: InsertSkillsMutationVariables = {
  description: '',
}

function Skills({ resume_id }: ISkills) {
  const [isOpen, setIsOpen] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insertSkillsMutation] = useInsertSkillsMutation({
    onCompleted() {
      formik.resetForm()
      getSkillsList()
      return enqueueSnackbar('Данные сохранены', {
        variant: 'success',
      })
    },
    onError() {
      enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
    },
  })

  const formik = useFormik({
    initialValues: initialFormSkills,
    enableReinitialize: true,
    onSubmit: () => {
      insertSkillsMutation({
        variables: {
          description: formik.values.description,
          resume_id: resume_id,
        },
      })
    },
  })

  const [skillsData, setSkillsData] = useState<Skills[]>()

  const [getSkillsList] = useGetSkillsLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setSkillsData(data.skills)
      if (data.skills?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  const [deleteSkillsMutation] = useDeleteSkillsMutation({
    onCompleted() {
      getSkillsList()
      if (skillsData?.length === 0) {
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
    getSkillsList()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Ваши навыки</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            {skillsData?.length === 0 ? (
              <Text>Добавьте свои первые навыки</Text>
            ) : (
              <div className={styles.container_left_collapse_cards}>
                {skillsData?.map((item, index) => {
                  return (
                    <SkillsCards
                      key={index}
                      description={item.description}
                      handleDelete={() =>
                        deleteSkillsMutation({
                          variables: {
                            _eq: item.skills_id,
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
            Ваши навыки
          </FormLabel>
          <Textarea
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

export default Skills
