import React from 'react'
import styles from './Education.module.scss'
import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useGetJobseekeEducationsQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { formatUniversityName } from '@/utils/formatUniversityName'

function Education() {
  const { userId } = useAuthContext()

  const { data, loading, error } = useGetJobseekeEducationsQuery({
    variables: {
      _eq: userId,
    },
  })

  const educationData = data?.jobseeker_education[0]

  return (
    <div className={styles.container}>
      <FormControl as="fieldset">
        <FormLabel as="legend" htmlFor="name_institution">
          Образовательное учреждение
        </FormLabel>
        <Input
          id="name_institution"
          name="name_institution"
          type="text"
          fontSize="sm"
          fontWeight="500"
          size="lg"
          placeholder="Наименование образовательного учреждения"
          defaultValue={formatUniversityName(
            data?.jobseeker_education[0]
              .jobseeker_education_educational_institution?.name_institution ||
              ''
          )}
          disabled
        />
      </FormControl>
      <Flex gap={4}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="faculity">
            Факультет
          </FormLabel>
          <Input
            id="faculity"
            name="faculity"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Факультет"
            defaultValue={educationData?.faculity as string}
            disabled
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="speciality">
            Специальность
          </FormLabel>
          <Input
            id="speciality"
            name="speciality"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Специальность"
            defaultValue={educationData?.speciality as string}
            disabled
          />
        </FormControl>
      </Flex>
      <Flex gap={4}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="education_form">
            Форма обучения
          </FormLabel>
          <Input
            id="education_form"
            name="education_form"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Форма обучения"
            defaultValue={educationData?.education_form as string}
            disabled
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="start_date">
            Дата поступления
          </FormLabel>
          <Input
            id="start_date"
            name="start_date"
            type="date"
            fontSize="sm"
            size="lg"
            defaultValue={educationData?.start_date as string}
            disabled
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="end_date">
            Дата выпуска
          </FormLabel>
          <Input
            id="end_date"
            name="end_date"
            type="date"
            fontSize="sm"
            size="lg"
            defaultValue={educationData?.end_date as string}
            disabled
          />
        </FormControl>
      </Flex>
    </div>
  )
}

export default Education
