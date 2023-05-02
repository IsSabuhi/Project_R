import { List, ListItem } from '@chakra-ui/react'
import { NavItem } from './NavItem'
import { SIDEBAR_URLS } from '@/configs/urls'

export const Navigation = ({ collapse }: any) => (
  <List w="full" my={8}>
    {SIDEBAR_URLS.map((item, index) => (
      <ListItem key={index}>
        <NavItem
          item={item}
          isActive={index === 0}
          collapse={collapse}
          href={item.href}
        />
      </ListItem>
    ))}
  </List>
)
