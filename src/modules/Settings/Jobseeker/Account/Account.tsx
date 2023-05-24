import React from 'react'
import styles from './Account.module.scss'
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'

const Account = () => {
  return (
    <form className={styles.container}>
      <Text fontWeight="semibold" fontSize="xl">
        Изменить пароль
      </Text>
      <Divider mt={1} mb={2} />
      <Flex gap={4}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="oldPassword">
            Старый пароль*
          </FormLabel>
          <Input
            id="oldPassword"
            name="oldPassword"
            type="password"
            placeholder="Введите текущий пароль"
            fontSize="sm"
            size="lg"
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="password">
            Новый пароль*
          </FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Введите новый пароль*"
            fontSize="sm"
            size="lg"
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="confrimPassword">
            Подтвердите пароль*
          </FormLabel>
          <Input
            id="confrimPassword"
            name="confrimPassword"
            type="password"
            placeholder="Подтвердите пароль"
            fontSize="sm"
            size="lg"
          />
        </FormControl>
      </Flex>
      <Button
        type="submit"
        colorScheme="blue"
        variant="solid"
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
        Изменить пароль
      </Button>
    </form>
  )
}

export default Account
