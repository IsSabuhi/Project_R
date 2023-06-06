import React from 'react'
import styles from './ResumeCardView.module.scss'
import Link from 'next/link'
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import {
  MdOutlineDeleteOutline,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMoreVert,
} from 'react-icons/md'

interface IResumeCardView {
  userName: string
}

interface ColorMap {
  [key: string]: string
}

// TODO Функция для средней оценки
const getColorForScore = (score: string): string => {
  const averageScore = parseFloat(score)
  const colorMap: ColorMap = {
    '5': 'green',
    '4.5': 'blue',
    '3.5': 'yellow',
  }

  let textColor = 'red'

  for (const key of Object.keys(colorMap)) {
    const threshold = parseFloat(key)
    if (averageScore <= threshold) {
      textColor = colorMap[key]
      break
    }
  }

  return textColor
}

function ResumeCardView({ userName }: IResumeCardView) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main_top}>
          <Text className={styles.main_jobPosition}>React разработчик</Text>
          <Menu>
            <MenuButton>
              <MdOutlineMoreVert />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<MdOutlineDriveFileRenameOutline />}>
                Изменить
              </MenuItem>
              <MenuItem icon={<MdOutlineDeleteOutline />}>Удалить</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Text className={styles.main_jobseekerName}>{userName}</Text>

        <Text className={styles.main_specialty}>
          Специальность:{' '}
          <span>Информационные системы и технологии (в строительстве)</span>
        </Text>

        <Flex alignItems="center" gap="10px">
          <Text className={styles.main_specialty}>Средняя оценка:</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color={getColorForScore('4,78')}
          >
            4,7
          </Text>
        </Flex>
      </div>
    </div>
  )
}

export default ResumeCardView
