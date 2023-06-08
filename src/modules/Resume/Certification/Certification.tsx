import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Button,
  Collapse,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './Certification.module.scss'
import { useSnackbar } from 'notistack'
import {
  Certification,
  InsertCertificationMutationVariables,
  useDeleteCertificationMutation,
  useGetCertificationsLazyQuery,
  useInsertCertificationMutation,
} from '@/generated/projectR-hasura'
import { useFormik } from 'formik'
import CertificationCards from './CertificationCards/CertificationCards'

interface ICertification {
  resume_id: string
}

const initialFormCertification: InsertCertificationMutationVariables = {
  certification_name: '',
  date_of_receipt: '',
}

const Certification = ({ resume_id }: ICertification) => {
  const [isOpen, setIsOpen] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const [insertCertificationMutation, { data, loading, error }] =
    useInsertCertificationMutation({
      onCompleted() {
        formik.resetForm()
        getCertificationList()
        return enqueueSnackbar('Данные сохранены', {
          variant: 'success',
        })
      },
      onError() {
        enqueueSnackbar('Произошла непредвиденная ошибка', { variant: 'error' })
      },
    })

  const formik = useFormik({
    initialValues: initialFormCertification,
    enableReinitialize: true,
    onSubmit: () => {
      insertCertificationMutation({
        variables: {
          certification_name: formik.values.certification_name,
          date_of_receipt: formik.values.date_of_receipt,
          resume_id: resume_id,
        },
      })
    },
  })

  const [certificationData, setCertificationData] = useState<Certification[]>()

  const [getCertificationList] = useGetCertificationsLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setCertificationData(data?.certification as Certification[])
      if (data.certification?.length === 0) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    },
  })

  const [deleteCertificationMutation] = useDeleteCertificationMutation({
    onCompleted() {
      getCertificationList()
      if (certificationData?.length === 0) {
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
    getCertificationList()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div
          className={styles.container_left_title}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text className={styles.container_left_titleText}>Сертификаты</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            {certificationData?.length === 0 ? (
              <Text>Ваши сертификаты</Text>
            ) : (
              <div className={styles.container_left_collapse_cards}>
                {certificationData?.map((item, index) => {
                  return (
                    <CertificationCards
                      key={index}
                      certification_name={item.certification_name as string}
                      date_of_receipt={item.date_of_receipt as string}
                      handleDelete={() =>
                        deleteCertificationMutation({
                          variables: {
                            _eq: item.certification_id,
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
          <FormLabel as="legend" htmlFor="certification_name">
            Введите ваши сертификаты
          </FormLabel>
          <Input
            id="certification_name"
            name="certification_name"
            value={formik.values.certification_name as string}
            onChange={formik.handleChange}
            required
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="date_of_receipt">
            Введите ваши сертификаты
          </FormLabel>
          <Input
            id="date_of_receipt"
            name="date_of_receipt"
            type="date"
            value={formik.values.date_of_receipt as string}
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

export default Certification
