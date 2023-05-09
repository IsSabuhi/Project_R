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
import { ISignUpProps } from '@/pages/signup'

interface IAccountProps {
  formData: ISignUpProps
  onChange: any
  isInputDisabled: boolean
}

const AccountInfo = ({
  formData,
  onChange,
  isInputDisabled,
}: IAccountProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className={styles.container}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Регистрация аккаунта
      </Heading>
      <Flex>
        <Input
          id="login"
          name="login"
          isRequired
          placeholder="Логин"
          mr="2%"
          value={formData.login}
          onChange={onChange}
        />
        <Input
          id="email"
          name="email"
          type="email"
          isRequired
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
        />
      </Flex>
      <Flex>
        <InputGroup mr="2%">
          <Input
            id="password"
            name="password"
            placeholder="Пароль"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={onChange}
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

        <InputGroup>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Введите пароль еще раз"
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              onChange(e)
            }}
            disabled={isInputDisabled}
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

      <Select
        placeholder="Роль"
        id="role"
        name="role"
        value={formData.role}
        onChange={onChange}
      >
        <option value="jobseeker">Соискатель</option>
        <option value="employer">Работодатель</option>
      </Select>
    </div>
  )
}

export default AccountInfo
