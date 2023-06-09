import React from 'react'
import styles from './EmployerHomeContent.module.scss'
import ResumeCardView from '@/components/Resume/ResumeCardView/ResumeCardView'
import { joinName } from '@/utils/joinName'
import { Resumes } from '@/generated/projectR-hasura'
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from '@chakra-ui/react'
import AvatarBox from '@/components/Sidebar/AvatarBox/AvatarBox'
import { Search2Icon } from '@chakra-ui/icons'
import { useGetOrganizationByIdQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'

interface IEmployerHomeContent {
  resumesJobseekerData: Resumes[]
}

const EmployerHomeContent = ({
  resumesJobseekerData,
}: IEmployerHomeContent) => {
  const { userId } = useAuthContext()

  const { data, loading, error } = useGetOrganizationByIdQuery({
    variables: {
      _eq: userId,
    },
  })

  const organizationData = data?.organization[0]

  return (
    <div className={styles.container}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="2xl" m="15px">
          Резюме
        </Text>
        <div className={styles.container_avatarBox}>
          {/* <NotificationBadge /> */}
          <AvatarBox />
        </div>
      </Flex>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Поиск резюме..."
          border="1px solid #949494"
        />
        <InputRightAddon p={0} border="none">
          <Button
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
          >
            Найти
          </Button>
        </InputRightAddon>
      </InputGroup>
      <div className={styles.main}>
        {resumesJobseekerData?.map((resume, index) => {
          return (
            <ResumeCardView
              key={index}
              resume_id={resume.resume_id}
              userName={joinName(
                resume.resumes_jobseeker?.lastName!,
                resume.resumes_jobseeker?.name!,
                resume.resumes_jobseeker?.middleName!
              )}
              resume={resume as Resumes}
              isVerified={organizationData?.verified!}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EmployerHomeContent
