import React from 'react'
import styles from './Account.module.scss'
import { Button, Divider, Input, Text } from '@chakra-ui/react'

const Account = () => {
  return (
    <form className={styles.container}>
      <div>
        <Text fontWeight="semibold" fontSize="2xl">
          Пароль
        </Text>
        <Text>Обновить пароль</Text>
        <Divider mt={2} mb={5} />

        <div className={styles.main}>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
          />
          <Input
            id="confrimPassword"
            name="confrimPassword"
            type="password"
            placeholder="Пароль"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
          />
          <Button
            type="submit"
            colorScheme="blue"
            variant="solid"
            loadingText="Сохранение"
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
        </div>
      </div>
    </form>
  )
}

export default Account
