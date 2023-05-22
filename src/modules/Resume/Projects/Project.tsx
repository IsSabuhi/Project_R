import {
  Button,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import styles from './Project.module.scss'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function Project() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_title} onClick={onToggle}>
          <Text className={styles.container_left_titleText}>Ваши проекты</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            Добавьте свой первый проект
          </div>
        </Collapse>
      </div>
      <form className={styles.container_right}>
        <Flex gap={5}>
          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="project_name">
              Название вашего проекта
            </FormLabel>
            <Input
              id="project_name"
              name="project_name"
              type="text"
              borderRadius="15px"
              fontSize="sm"
              size="lg"
              placeholder="Тема проекта"
            />
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend" htmlFor="project_company">
              В какой организации вы делали свой проект?
            </FormLabel>
            <Input
              id="project_company"
              name="project_company"
              type="text"
              borderRadius="15px"
              fontSize="sm"
              size="lg"
              placeholder="Наименование организации"
            />
          </FormControl>
        </Flex>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="project_about">
            Кратко опишите что вы сделали
          </FormLabel>

          <Textarea
            id="project_about"
            name="project_about"
            borderRadius="15px"
            placeholder="Что вы сделали?"
            fontSize="sm"
            size="lg"
          />
        </FormControl>
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
      </form>
    </div>
  )
}

export default Project
