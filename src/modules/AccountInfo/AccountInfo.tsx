import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './AccountInfo.module.scss'

const AccountInfo = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Регистрация аккаунта
      </Heading>
      <Flex>
        <Input id="login" isRequired placeholder="Логин" mr="2%" />

        <InputGroup>
          <Input
            placeholder="Пароль"
            type={showPassword ? 'text' : 'password'}
          />
          <InputRightElement h={'full'}>
            <Button
              variant={'ghost'}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Input id="email" type="email" isRequired placeholder="Email" />
      <Select placeholder="Роль" id="role" name="role">
        <option value="jobseeker">Соискатель</option>
        <option value="employer">Работодатель</option>
      </Select>
    </div>
  )
}

export default AccountInfo
