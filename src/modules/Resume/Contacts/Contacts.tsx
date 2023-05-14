import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './Contacts.module.scss'

function Contacts() {
  return (
    <div className={styles.container}>
      <Flex gap={4} mt={5}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="fullName">
            Полное имя
          </FormLabel>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваше полное имя"
            disabled
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="fullName">
            Адрес электронной почты
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="text"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваш email"
            disabled
          />
        </FormControl>
      </Flex>

      <Flex gap={4} mt={5}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="fullName">
            Номер телефона
          </FormLabel>
          <Input
            id="phone"
            name="phone"
            type="text"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваш номер телефона"
            disabled
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="fullName">
            Личный сайт или релевантная ссылка
          </FormLabel>
          <Input
            id="myLink"
            name="myLink"
            type="text"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
            placeholder="http://www.mysite.com"
            disabled
          />
        </FormControl>
      </Flex>
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
  )
}

export default Contacts
