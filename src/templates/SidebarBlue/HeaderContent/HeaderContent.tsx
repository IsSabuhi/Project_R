import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiMap } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa'
import styles from './HeaderContent.module.scss'

const HeaderContent = () => {
  return (
    <div className={styles.container}>
      <Text className={styles.container_userName}>
        Исрафилов Сабухи Мадад оглы
      </Text>
      <Text className={styles.container_jobPosition}>Frontend developer</Text>
      <Flex gap="55px">
        <Flex gap={2} alignItems="center">
          <Icon as={BiMap} />
          <Text>Россия, Норильск</Text>
        </Flex>
        <Flex gap={2} alignItems="center">
          <Icon as={FaInfo} />
          <Text>Возраст: 22 года</Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default HeaderContent
