import { Box, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { MdMenu, MdWorkOutline } from 'react-icons/md'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { IoMdHome } from 'react-icons/io'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import styles from './Sidebar.module.scss'
import { Logo } from './Logo/Logo'
import Item from './Item/Item'
import ItemButton from './ItemLogoutButton/ItemButton'
import { AiOutlineFolderView } from 'react-icons/ai'

interface ISideBarProps {
  logoutOnClick: () => void
}

const Sidebar = ({ logoutOnClick }: ISideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `#fff !important`,
          borderRadius: '25px',
          color: '#000000',
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
        '& .pro-menu': {
          height: '100%',
        },
        '& .pro-sidebar-layout ul': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        },
        margin: '10px',
        marginRight: 0,
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <div className={styles.sidebar_container}>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MdMenu /> : undefined}
              style={{
                margin: '10px 0 20px 0',
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Logo collapse={isCollapsed} />
                  <IconButton
                    aria-label=""
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    <MdMenu />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {/* {!isCollapsed && (
            <Box mb="25px" className={styles.main_avatar_section}>
              <Box>
                <Avatar name="Users" />
              </Box>
              <Box>
                <Text className={styles.sidebar_userNameText}>{userName}</Text>
                <Text className={styles.sidebar_userEmailText}>
                  {user_email}
                </Text>
              </Box>
            </Box>
          )} */}

            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Item
                title="Главная"
                to="/home"
                icon={<IoMdHome size="20px" />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Просмотр откликов"
                to="#"
                icon={<AiOutlineFolderView size="20px" />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Вакансии"
                to="#"
                icon={<MdWorkOutline size="20px" />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Настройки"
                to="/settings"
                icon={<FiSettings size="20px" />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </div>
          <ItemButton
            icon={<FiLogOut size="20px" />}
            title="Выйти"
            selected={selected}
            onClick={logoutOnClick}
          />
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
