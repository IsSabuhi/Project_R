import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './HeaderText.module.scss'
import { MdOutlineWork } from 'react-icons/md'
import { IconType } from 'react-icons/lib'

interface IHeaderText {
  title: string
  icon: IconType
}

const HeaderText = ({ title, icon }: IHeaderText) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" gap={4}>
      <Text className={styles.title}>{title}</Text>
      <div className={styles.liner}></div>
      <div className={styles.iconBlock}>
        <Icon as={icon} />
      </div>
    </Flex>
  )
}

export default HeaderText
