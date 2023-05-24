import {
  Avatar,
  AvatarBadge,
  Box,
  Icon,
  IconButton,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  background,
} from '@chakra-ui/react'
import React from 'react'
import GeneralInfo from './Profile/GeneralInfo'
import Account from './Account/Account'
import Education from './Education/Education'
import styles from '@/styles/Settings.module.scss'
import { MdAddAPhoto } from 'react-icons/md'
import { useGetJobseekerByIdQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { joinName } from '@/utils/joinName'

interface ColorMap {
  [key: string]: string
}

function JobseekerSettingsPage() {
  const { userId } = useAuthContext()

  const { data, loading, error } = useGetJobseekerByIdQuery({
    variables: {
      _eq: userId,
    },
  })

  const userData = data?.jobseeker[0]

  const averageScore = parseFloat(
    userData?.jobseeker_educations[0].average_score!
  )

  const colorMap: ColorMap = {
    5: 'green',
    4.5: 'blue',
    3.5: 'yellow',
  }

  let textColor = 'gray' // Цвет по умолчанию

  for (const score of Object.keys(colorMap)) {
    if (averageScore <= parseFloat(score)) {
      textColor = colorMap[score]
      break
    }
  }

  return (
    <div className={styles.container_settings}>
      <div className={styles.container_settings_leftContent}>
        <div className={styles.container_settings_leftContent_profile}>
          <Box position="relative" marginInline="45px">
            <Avatar size="2xl" />
            <Box
              position="absolute"
              bottom="0"
              right="0"
              bg="white"
              borderRadius="full"
              p="2"
            >
              <IconButton aria-label="Button" borderRadius="full">
                <Icon as={MdAddAPhoto} boxSize={6} />
              </IconButton>
            </Box>
          </Box>
          <div className={styles.container_settings_leftContent_profile_text}>
            <Text sx={{ color: '#495057', fontWeight: '500' }}>
              {joinName(
                userData?.lastName!,
                userData?.name!,
                userData?.middleName!
              )}
            </Text>
            <Text>{userData?.email}</Text>
          </div>
          <Box
            className={
              styles.container_settings_leftContent_profile_averageScore
            }
          >
            <IconButton
              aria-label="averageScore"
              sx={{ background: textColor, borderRadius: '20px' }}
              _hover={{ background: textColor }}
            >
              <Text
                className={
                  styles.container_settings_leftContent_profile_averageScore_text
                }
              >
                {userData?.jobseeker_educations[0].average_score}
              </Text>
            </IconButton>
          </Box>
        </div>
        {/* Дополнительный блок */}
      </div>
      <div className={styles.container_settings_rightContent}>
        <Tabs position="relative" variant="profileTab">
          <TabList>
            <Tab>Личная информация</Tab>
            <Tab>Аккаунт</Tab>
            <Tab>Образование</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel p={0}>
              <GeneralInfo />
            </TabPanel>
            <TabPanel p={0}>
              <Account />
            </TabPanel>
            <TabPanel p={0}>
              <Education />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>

    // <Tabs position="relative" variant="unstyled">
    //   <TabList>
    //     <Tab>Профиль</Tab>
    //     <Tab>Аккаунт</Tab>
    //     <Tab>Образование</Tab>
    //   </TabList>
    //   <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
    //   <TabPanels>
    //     <TabPanel p={0}>
    //       <GeneralInfo />
    //     </TabPanel>
    //     <TabPanel p={0}>
    //       <Account />
    //     </TabPanel>
    //     <TabPanel p={0}>
    //       <Education />
    //     </TabPanel>
    //   </TabPanels>
    // </Tabs>
  )
}

export default JobseekerSettingsPage
