import { AvatarBox } from '@/components/Sidebar/AvatarBox/AvatarBox'
import Header from '@/components/Sidebar/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { useGetJobseekerByIdQuery } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { joinName } from '@/utils/joinName'
import { Flex, HStack, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { MdMenu } from 'react-icons/md'

interface IMainLayoutProps {
  children: ReactElement
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const [collapse, setCollapse] = React.useState(false)

  const { userId } = useAuthContext()

  const { data, loading, error } = useGetJobseekerByIdQuery({
    variables: {
      _eq: userId,
    },
  })

  const user = data?.jobseeker[0]

  const userName = joinName(user?.lastName!, user?.name!, user?.middleName!)

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={5}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="flex-start"
        transition="ease-in-out .4s"
        borderRadius="3xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        borderRadius="3xl"
      >
        <Header
          collapse={collapse}
          email={user?.email!}
          userName={userName}
          setCollapse={setCollapse}
        />
        {/* <AvatarBox
          collapse={collapse}
          email={email}
          userName={userName}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        /> */}
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <div>{children}</div>
      </Flex>
    </HStack>
  )
}

export default MainLayout
