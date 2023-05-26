import React from 'react'
import styles from './Education.module.scss'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { useGetJobseekerEducationsQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { formatUniversityName } from '@/utils/formatUniversityName'

interface ColorMap {
  [key: string]: string
}

const getColorForScore = (score: string): string => {
  const averageScore = parseFloat(score)
  const colorMap: ColorMap = {
    '5': 'green',
    '4.5': 'blue',
    '3.5': 'yellow',
  }

  let textColor = 'red' // Цвет по умолчанию

  for (const key of Object.keys(colorMap)) {
    const threshold = parseFloat(key)
    if (averageScore <= threshold) {
      textColor = colorMap[key]
      break
    }
  }

  return textColor
}

function Education() {
  const { userId } = useAuthContext()

  const { data, loading, error } = useGetJobseekerEducationsQuery({
    variables: {
      _eq: userId,
    },
  })

  const educationsData = data?.jobseeker_education

  console.log(educationsData)

  return (
    <div className={styles.container}>
      <Accordion defaultIndex={[0]} allowToggle>
        {educationsData?.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {formatUniversityName(
                      item.jobseeker_education_educational_institution
                        ?.name_institution || ''
                    )}
                    <Text fontSize="md">Степень: {item.degree_education}</Text>
                  </Box>

                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
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
                      defaultValue={item?.faculity as string}
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
                      defaultValue={item?.speciality as string}
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
                      defaultValue={item?.education_form as string}
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
                      defaultValue={item?.start_date as string}
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
                      defaultValue={item?.end_date as string}
                      disabled
                    />
                  </FormControl>
                </Flex>
                <FormControl as="fieldset">
                  <FormLabel as="legend" htmlFor="average_score">
                    Средняя оценка
                  </FormLabel>
                  <Input
                    id="average_score"
                    name="average_score"
                    type="text"
                    width="20%"
                    fontSize="sm"
                    size="lg"
                    defaultValue={item?.average_score as string}
                    disabled
                  />
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default Education
