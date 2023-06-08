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
import {
  Resumes,
  useGetResumesLazyQuery,
  useGetResumesQuery,
} from '@/generated/projectR-hasura'
import { normalizeDate } from '@/utils/normalizeDate'
import ClassicTemplate from '@/templates/Classic/ClassicTemplate'

interface ISaveResume {
  resume_id: string
}

function SaveResume({ resume_id }: ISaveResume) {
  const [resumesData, setResumeData] = React.useState<Resumes[]>()

  const [getResumeList] = useGetResumesLazyQuery({
    variables: {
      _eq: resume_id,
    },
    onCompleted(data) {
      setResumeData(data.resumes as Resumes[])
    },
  })

  console.log(resumesData)

  React.useEffect(() => {
    getResumeList()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.container_main}>
        <div className={styles.container_main_header}>
          <Text fontSize="20px" fontWeight="bold" textTransform="uppercase">
            {resumesData && resumesData[0]?.resume_name}
          </Text>
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
          Резюме создано:{' '}
          {resumesData && normalizeDate(resumesData[0]?.data_create as string)}
        </Text>
        <div className={styles.container_main_viewResume}>
          <div className={styles.container_main_viewResume_main}>
            <ClassicTemplate />
          </div>
        </div>
      </div>
      {/* <div className={styles.container_sidebar}></div> */}
    </div>
  )
}

export default SaveResume
