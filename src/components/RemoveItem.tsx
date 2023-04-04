import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Text } from '@chakra-ui/layout';
import dynamic from 'next/dynamic';
import React, { Fragment } from 'react';
import { FiEye } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TooltipIconButton from './TooltipIconButton';
const ActionModal = dynamic(() => import('./ActionModal'));

interface Props {
  itemType?: string;
  handleDelete: () => void;
}

const RemoveItemButton: React.FC<Props> = ({
  itemType = 'item',
  handleDelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <TooltipIconButton
        label='Удалить элемент'
        colorScheme='red'
        aria-label='Remove-Item-From-Resume'
        icon={<RiDeleteBin6Line />}
        onClick={onOpen}
      />
      <ActionModal
        title='Подтвердите удаление'
        buttonText='Удалить'
        isOpen={isOpen}
        onClick={() => {
          handleDelete();
          onClose();
        }}
        onClose={onClose}
      >
        Вы уверены, что хотите удалить это{itemType} из вашего резюме? Этот
        действие необратимо. <br />
        <br />
        <Text
          fontSize='sm'
          color={useColorModeValue('GrayText', 'whiteAlpha.700')}
        >
          Если бы вы хотели просто скрыть это из своего резюме, но при этом
          сохранить данные вы можете сделать это, используя значок глаза (
          <Icon as={FiEye} m='1' color='blue.500' />) кнопка на элементе.
        </Text>
      </ActionModal>
    </Fragment>
  );
};

export default RemoveItemButton;
