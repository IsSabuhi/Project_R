import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react'
import React from 'react'
import styles from './BasicInfo.module.scss'
import { ISignUpProps } from '@/pages/signup'

interface IBasicInfo {
  formData: ISignUpProps
  onChange: any
}

const BasicInfo = ({ formData, onChange }: IBasicInfo) => {
  const GENDER = [{ name: 'Мужской' }, { name: 'Женский' }]

  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Данные пользователя
      </Heading>
      <Flex>
        <Input
          id="lastName"
          name="lastName"
          isRequired
          mr="2%"
          placeholder="Фамилия"
          value={formData.lastName}
          onChange={onChange}
        />

        <Input
          id="name"
          name="name"
          isRequired
          placeholder="Имя"
          value={formData.name}
          onChange={onChange}
        />

        <Input
          id="middleName"
          name="middleName"
          ml="2%"
          placeholder="Отчество"
          value={formData.middleName}
          onChange={onChange}
        />
      </Flex>
      <Flex display="flex" alignItems="center">
        <FormControl mr="2%">
          <FormLabel htmlFor="dateBirth" fontWeight={'normal'}>
            Дата рождения
          </FormLabel>
          <Input
            id="dateBirth"
            name="dateBirth"
            placeholder="Дата рождения"
            type="date"
            value={formData.dateBirth}
            onChange={onChange}
          />
        </FormControl>

        <FormControl display="flex" flexDirection="column">
          <FormLabel htmlFor="gender" fontWeight={'normal'}>
            Пол
          </FormLabel>
          <RadioGroup
            id="gender"
            name="gender"
            py={2}
            display="flex"
            gridColumnGap={2}
          >
            {GENDER.map(({ name }, index) => {
              return (
                <Radio key={index} value={name}>
                  {name}
                </Radio>
              )
            })}
          </RadioGroup>
        </FormControl>
      </Flex>
    </div>
  )
}

export default BasicInfo
