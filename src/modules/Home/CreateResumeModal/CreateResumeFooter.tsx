import { Status } from '@/src/utils/constants'
import { Button, HStack, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Method } from '../CreateResumeModal'

interface Props {
  method: Method
  actionCallback: (method: Method) => Promise<void>
  onCloseCallback: () => void
  status?: Status
}

const CreateResumeFooter: React.FC<Props> = ({
  method,
  onCloseCallback,
  actionCallback,
  status,
}) => {
  return (
    <ModalFooter display="flex" justifyContent="flex-end">
      {/* Available when template gallery implemented */}
      {/* <Button
        variant="link"
        rightIcon={<FiExternalLink />}
        _focus={{ outline: "none" }}
        fontWeight="normal"
        size="sm"
      >
        Browse template gallery for more
      </Button> */}
      <HStack>
        <Button
          colorScheme="purple"
          rightIcon={<FiArrowRight />}
          isDisabled={method === null}
          isLoading={status === Status.loading}
          loadingText="Создание нового резюме"
          onClick={() => actionCallback(method)}
        >
          Начать
        </Button>
        <Button onClick={onCloseCallback} variant="ghost">
          Отменить
        </Button>
      </HStack>
    </ModalFooter>
  )
}

export default CreateResumeFooter
