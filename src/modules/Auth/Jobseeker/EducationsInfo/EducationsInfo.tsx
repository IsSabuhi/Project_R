import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './EducationsInfo.module.scss'
import { ISignUpProps } from '@/pages/signup'

interface IEducationsInfo {
  formData: ISignUpProps
  onChange: any
}

const EducationsInfo = ({ formData, onChange }: IEducationsInfo) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Образование
      </Heading>
      <Flex flexDirection="column">
        <FormControl>
          <FormLabel htmlFor="name_institution" fontWeight={'normal'}>
            Наименование образовательного учреждения
          </FormLabel>
          <Input
            id="name_institution"
            name="name_institution"
            isRequired
            placeholder="Наименование образовательного учреждения"
            value={formData.name_institution}
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="faculity" fontWeight={'normal'}>
            Наименование факультета
          </FormLabel>
          <Input
            id="faculity"
            name="faculity"
            isRequired
            placeholder="Факультет"
            value={formData.faculity}
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="speciality" fontWeight={'normal'}>
            Наименование специальности
          </FormLabel>
          <Input
            id="speciality"
            name="speciality"
            isRequired
            placeholder="Специальность"
            value={formData.speciality}
            onChange={onChange}
          />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="2%">
          <FormLabel htmlFor="education_form" fontWeight={'normal'}>
            Форма обучения
          </FormLabel>
          <Input
            id="education_form"
            isRequired
            placeholder="Форма обучения"
            value={formData.education_form}
            onChange={onChange}
          />
        </FormControl>
        {/* <FormControl>
          <FormLabel htmlFor="group" fontWeight={'normal'}>
            Группа
          </FormLabel>
          <Input
            id="group"
            placeholder="Группа"
            value={formData.group}
            onChange={onChange}
          />
        </FormControl> */}
      </Flex>

      <Flex display="flex" alignItems="center">
        <FormControl mr="2%">
          <FormLabel htmlFor="start_date" fontWeight={'normal'}>
            Дата поступления
          </FormLabel>
          <Input
            id="start_date"
            name="start_date"
            isRequired
            placeholder="Дата поступления"
            type="date"
            value={formData.start_date}
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="end_date" fontWeight={'normal'}>
            Дата окончания
          </FormLabel>
          <Input
            id="end_date"
            name="end_date"
            placeholder="Дата окончания"
            type="date"
            disabled={isChecked}
            value={formData.end_date}
            onChange={onChange}
          />
        </FormControl>
      </Flex>
      <Checkbox
        isChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      >
        По настоящее время
      </Checkbox>
    </div>
  )
}

export default EducationsInfo
