import React from 'react'
import styles from './Education.module.scss'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useGetJobseekeEducationsQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'

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
      <Text fontWeight="semibold" fontSize="2xl">
        Образование
      </Text>
      <div className={styles.main}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="name_institution">
            Образовательное учреждение
          </FormLabel>
          <Input
            id="name_institution"
            name="name_institution"
            type="text"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
            placeholder="Наименование образовательного учреждения"
            defaultValue={
              educationData?.jobseeker_education_educational_institution
                ?.name_institution as string
            }
            disabled
          />
        </FormControl>
      </div>
    </div>
  )
}

export default Education
