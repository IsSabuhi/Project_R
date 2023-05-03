import { Text } from '@chakra-ui/react'
import React from 'react'
import { MenuItem } from 'react-pro-sidebar'

interface IItemButtonProps {
  title: string
  icon: React.ReactNode
  selected: string
  onClick: () => void
}

export default function ItemButton({
  title,
  icon,
  selected,
  onClick,
}: IItemButtonProps) {
  return (
    <MenuItem active={selected === title} onClick={onClick} icon={icon}>
      <Text>{title}</Text>
    </MenuItem>
  )
}
