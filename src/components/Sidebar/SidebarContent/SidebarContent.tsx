import { APP_URLS } from '@/configs/urls'
import { useAuthContext } from '@/hooks/use-auth-context'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
import { IoMdHome } from 'react-icons/io'
import { BsCardChecklist } from 'react-icons/bs'
import { AiOutlineFolderView } from 'react-icons/ai'
import { GrTemplate } from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'

const SidebarContent = ({
  selected,
  setSelected,
}: {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { userId, role } = useAuthContext()
  return (
    <div>
      {role === 'jobseeker' ? (
        <Box paddingLeft="10%">
          <Item
            title="Главная"
            to={APP_URLS.getHomePage(userId!)}
            icon={<IoMdHome size="20px" />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Просмотр откликов"
            to="/home"
            icon={<AiOutlineFolderView size="20px" />}
            selected={selected}
            setSelected={setSelected}
          />
          {/* <Item
            title="Шаблоны резюме"
            to="/home"
            icon={<GrTemplate size="20px" />}
            selected={selected}
            setSelected={setSelected}
          /> */}
          <Item
            title="Настройки"
            to={APP_URLS.getSettingsPage(userId!)}
            icon={<FiSettings size="20px" />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      ) : (
        <Box paddingLeft="10%">
          <Item
            title="Главная"
            to={APP_URLS.getHomePage(userId!)}
            icon={<IoMdHome size="20px" />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Резюме"
            to="/home"
            icon={<BsCardChecklist size="20px" />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Настройки"
            to={APP_URLS.getSettingsPage(userId!)}
            icon={<FiSettings size="20px" />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      )}
    </div>
  )
}

export default SidebarContent
