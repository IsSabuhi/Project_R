import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { GrAttachment } from 'react-icons/gr'
import React from 'react'
import styles from './GeneralInfo.module.scss'

const GeneralInfo = () => {
  return (
    <form className={styles.container}>
      <div className={styles.container_settings}>
        <div className={styles.container_settings_inputs}>
          <Text fontWeight="semibold" fontSize="2xl">
            Общая информация
          </Text>
          <Flex gap={4}>
            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor="lastName">
                Фамилия
              </FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                placeholder="Фамилия"
                disabled
              />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor="name">
                Имя
              </FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                placeholder="Имя"
                disabled
              />
            </FormControl>
          </Flex>
          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="middleName">
              Отчество
            </FormLabel>
            <Input
              id="middleName"
              name="middleName"
              type="text"
              borderRadius="15px"
              fontSize="sm"
              size="lg"
              placeholder="Отчество"
              disabled
            />
          </FormControl>
          <Flex gap={4}>
            <FormControl>
              <FormLabel as="legend" htmlFor="dateBirth">
                Дата рождения
              </FormLabel>
              <Input
                id="dateBirth"
                name="dateBirth"
                placeholder="Дата рождения"
                type="date"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel as="legend" htmlFor="gender">
                Пол
              </FormLabel>
              <Input
                id="gender"
                name="gender"
                placeholder="Пол"
                type="text"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
                disabled
              />
            </FormControl>
          </Flex>
          <Flex gap={4}>
            <FormControl>
              <FormLabel as="legend" htmlFor="gender">
                Электронная почта
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel as="legend" htmlFor="gender">
                Телефон
              </FormLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Телефон"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              />
            </FormControl>
          </Flex>
          <div>
            <Text className={styles.container_settings_password_title}>
              Пароль
            </Text>
            <Text className={styles.container_settings_password_desc}>
              Обновить пароль
            </Text>
            <Divider marginBlock={5} />
            <div className={styles.container_settings_password_inputs}>
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
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              />
            </div>
          </div>
          <Button
            type="submit"
            colorScheme="blue"
            variant="solid"
            loadingText="Сохранение"
            bg="teal.300"
            w="100%"
            h="45"
            mb="5px"
            color="white"
            _hover={{
              bg: 'teal.200',
            }}
            _active={{
              bg: 'teal.400',
            }}
          >
            Сохранить
          </Button>
        </div>

        <div className={styles.container_settings_avatar}>
          <div className={styles.container_settings_avatar_top}>
            <Image
              h={'200px'}
              w={'450px'}
              src={
                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              }
              objectFit={'cover'}
              borderTopRadius="20px"
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'2xl'}
                name="И C"
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  userName
                </Heading>
                <Text color={'gray.500'}>Frontend Developer</Text>
              </Stack>
            </Box>
          </div>
          <div className={styles.container_settings_avatar_input}>
            <Text fontWeight="semibold" fontSize="xl">
              Выберите фото профиля
            </Text>
            <Box className={styles.container_settings_avatar_input_update}>
              <Avatar name="И C" size="lg" />
              <GrAttachment />
              <div
                className={styles.container_settings_avatar_input_update_texts}
              >
                <Text>Выберите изоражение</Text>
                <Text>JPG, GIF или PNG.</Text>
                <Text>Максимальный размер 800К</Text>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </form>
  )
}

export default GeneralInfo
