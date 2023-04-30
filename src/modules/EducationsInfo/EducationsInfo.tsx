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

const EducationsInfo = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Образование
      </Heading>
      <Flex flexDirection="column">
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Наименование образовательного учреждения
          </FormLabel>
          <Input
            id="first-name"
            isRequired
            placeholder="Наименование образовательного учреждения"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Наименование факультета
          </FormLabel>
          <Input id="first-name" isRequired placeholder="Факультет" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Наименование специальности
          </FormLabel>
          <Input id="first-name" isRequired placeholder="Специальность" />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Форма обучения
          </FormLabel>
          <Input id="first-name" isRequired placeholder="Форма обучения" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Группа
          </FormLabel>
          <Input id="first-name" placeholder="Группа" />
        </FormControl>
      </Flex>

      <Flex display="flex" alignItems="center">
        <FormControl mr="2%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Дата поступления
          </FormLabel>
          <Input
            id="first-name"
            isRequired
            placeholder="Дата поступления"
            type="date"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Дата окончания
          </FormLabel>
          <Input
            id="first-name"
            placeholder="Дата окончания"
            type="date"
            disabled={isChecked}
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
