import { Button, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import styles from './Skills.module.scss'

function Skills() {
  return (
    <div className={styles.container}>
      <Text>Ваши навыки</Text>
      <Textarea />
      <Button
        variant="solid"
        loadingText="Сохранение"
        bg="#868dfb"
        h="45"
        mb="5px"
        color="white"
        _hover={{
          bg: '#b5b9ee',
        }}
        _active={{
          bg: '#868dfb',
        }}
        marginLeft="auto"
      >
        Исследователь навыков ИИ
      </Button>
      <Button
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

export default Skills
