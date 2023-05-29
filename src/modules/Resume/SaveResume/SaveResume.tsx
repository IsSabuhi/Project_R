import React from 'react'
import styles from './SaveResume.module.scss'
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useGetResumesQuery } from '@/generated/projectR-hasura'
import { normalizeDateString } from '@/utils/normalizeDate'
import ClassicTemplate from '../templates/Classic/ClassicTemplate'

interface ISaveResume {
  resume_id: string
}

function SaveResume({ resume_id }: ISaveResume) {
  const { data, loading, error } = useGetResumesQuery({
    variables: {
      _eq: resume_id,
    },
  })

  const userResumeData = data?.resumes[0]

  const dateCreate = userResumeData?.data_create!

  const dateinput = '2023-05-29T07:12:07.435306'

  console.log(normalizeDateString(dateinput))

  return (
    <div className={styles.container}>
      <div className={styles.container_main}>
        <div className={styles.container_main_header}>
          <Text>{userResumeData?.resume_name}</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Скачать
            </MenuButton>
            <MenuList>
              <MenuItem>Экспорт .PDF</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Text className={styles.container_main_text}>
          Резюме создано: {userResumeData?.data_create}
        </Text>
        <div className={styles.container_main_viewResume}>
          <div className={styles.container_main_viewResume_main}>
            <ClassicTemplate />
          </div>
        </div>
      </div>
      <div className={styles.container_sidebar}></div>
    </div>
  )
}

export default SaveResume
