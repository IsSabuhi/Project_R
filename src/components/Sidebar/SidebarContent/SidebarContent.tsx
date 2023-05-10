import { SIDEBAR_URLS, SIDEBAR_URLS_EMPLOYER } from '@/configs/urls'
import { useAuthContext } from '@/hooks/use-auth-context'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const SidebarContent = ({
  selected,
  setSelected,
}: {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { role } = useAuthContext()
  return (
    <div>
      {role === 'jobseeker' ? (
        <Box paddingLeft="10%">
          {SIDEBAR_URLS.map((item, index) => {
            return (
              <Item
                key={index}
                title={item.label}
                to={item.href}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            )
          })}
        </Box>
      ) : (
        <Box paddingLeft="10%">
          {SIDEBAR_URLS_EMPLOYER.map((item, index) => {
            return (
              <Item
                key={index}
                title={item.label}
                to={item.href}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            )
          })}
        </Box>
      )}
    </div>
  )
}

export default SidebarContent
