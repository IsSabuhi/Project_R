import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Text } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import dynamic from 'next/dynamic'
import React from 'react'
import { CgOptions } from 'react-icons/cg'
import { FiEdit, FiEye } from 'react-icons/fi'
import { IoMdRemoveCircle } from 'react-icons/io'
import InputWithLabel from '../../../components/common/InputWithLabel'
import { ContactDataObject } from './types'
const ActionModal = dynamic(
  () => import('../../../components/common/ActionModal')
)

interface Props {
  item?: ContactDataObject
  index?: number
  handlers?: {
    hide: (index: number) => void
    remove: (index: number) => void
    update?: (index: number, key: string, value: any) => void
  }
}

const ItemMenu: React.FC<Props> = ({ item, index, handlers }) => {
  const { hide, remove, update } = handlers
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Menu isLazy placement="auto">
      <MenuButton
        as={IconButton}
        label="Опции"
        aria-label="Show-Current-Handle-Options"
        icon={<CgOptions />}
      />
      <MenuList>
        {item.identifier !== undefined && (
          <MenuItem name="identifier" icon={<FiEdit />} onClick={onOpen}>
            Изменить идентификатор
          </MenuItem>
        )}
        <MenuItem name="hide" icon={<FiEye />} onClick={() => hide(index)}>
          {item.isHidden ? 'Показывать в резюме' : 'Скрыть из резюме'}
        </MenuItem>
        <MenuItem
          name="remove"
          color="red.500"
          icon={<IoMdRemoveCircle />}
          onClick={() => remove(index)}
        >
          Удалять
        </MenuItem>
      </MenuList>
      <ActionModal
        isOpen={isOpen}
        onClick={onClose}
        onClose={onClose}
        title="Редактировать идентификатор ссылки"
        buttonText="Confirm"
        color="green"
      >
        <Text fontSize="sm" wordBreak="break-word" mb="4">
          Измените идентификатор для {item.link}. Это будет текст, который будет
          указано в вашем резюме. Убедитесь, что это ссылка, по которой вы
          хотите перенаправить рекрутера.
        </Text>
        <InputWithLabel
          label="Новый идентификатор"
          value={item.identifier}
          onChange={(e) => update(index, 'identifier', e.target.value)}
        />
      </ActionModal>
    </Menu>
  )
}

export default ItemMenu
