import React from 'react'
import styles from './Experience.module.scss'
import {
  Box,
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
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function Experience() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_title} onClick={onToggle}>
          <Text className={styles.container_left_titleText}>Ваш опыт</Text>
          {isOpen ? (
            <ArrowDownIcon boxSize={5} />
          ) : (
            <ArrowForwardIcon boxSize={5} />
          )}
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className={styles.container_left_collapse}>
            <Divider mt={5} />
            Добавьте свой первый опыт
          </div>
        </Collapse>
      </div>
      <div className={styles.container_right}>
        <FormControl>
          <FormLabel as="legend" htmlFor="jobseekerPost">
            Кем вы работали?
          </FormLabel>
          <Input
            id="jobseekerPost"
            name="jobseekerPost"
            type="text"
            placeholder="Должность"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
          />
        </FormControl>

        <FormControl>
          <FormLabel as="legend" htmlFor="companyName">
            В какой компании вы работали?
          </FormLabel>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Наименование компании"
            borderRadius="15px"
            fontSize="sm"
            size="lg"
          />
        </FormControl>

        <Flex gap={4}>
          <FormControl>
            <FormLabel as="legend" htmlFor="date">
              Как долго вы были в компании?
            </FormLabel>
            <div className={styles.container_right_dateInput}>
              <Input
                id="dateStart"
                name="dateStart"
                type="date"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              />
              <Input
                id="dateEnd"
                name="dateEnd"
                type="date"
                borderRadius="15px"
                fontSize="sm"
                size="lg"
              />
            </div>
          </FormControl>

          <FormControl>
            <FormLabel as="legend" htmlFor="companyLocation">
              Где находилась компания ?
            </FormLabel>
            <Input
              id="companyLocation"
              name="companyLocation"
              type="text"
              placeholder="Город"
              borderRadius="15px"
              fontSize="sm"
              size="lg"
            />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel as="legend" htmlFor="aboutWork">
            Чем вы занимались в компании ?
          </FormLabel>
          <Textarea
            id="aboutWork"
            name="aboutWork"
            placeholder="Напишите чем вы занимались на прошлой работе"
            borderRadius="15px"
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
      </div>
    </div>
  )
}

export default Experience
