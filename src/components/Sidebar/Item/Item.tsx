import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MenuItem } from 'react-pro-sidebar'

interface IItemPrpos {
  title: string
  to: string
  icon: React.ReactNode
  selected: string
  setSelected: Function
}

export default function Item({
  title,
  to,
  icon,
  selected,
  setSelected,
}: IItemPrpos) {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Text>{title}</Text>
      <Link href={to} />
    </MenuItem>
  )
}
