import React, { useState } from 'react'
import {
  Flex,
  IconButton,
  Badge,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Text,
  Stack,
} from '@chakra-ui/react'
import { FiBell } from 'react-icons/fi'
import { DeleteIcon } from '@chakra-ui/icons'

const NotificationBadge = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMarkAsRead = () => {
    // Логика отметки уведомлений как прочитанных
  }

  const handleDeleteNotification = (id: string) => {
    // Логика удаления уведомления по его идентификатору
  }

  const notifications = [
    { id: '1', status: 'error', message: 'qweqweahksdnas2123', isRead: true },
    { id: '2', status: 'error', message: 'qweqweahksdnas2123', isRead: false },
  ]

  const count = notifications.length

  return (
    <Flex position="relative">
      <Popover
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement="bottom"
      >
        <PopoverTrigger>
          <IconButton
            icon={<FiBell />}
            aria-label="Уведомления"
            variant="ghost"
            fontSize="xl"
            mr={2}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="bold">
            Уведомления ({count})
            {count > 0 && (
              <Button ml={2} size="sm" onClick={handleMarkAsRead}>
                Прочитано
              </Button>
            )}
          </PopoverHeader>
          <PopoverBody>
            {notifications.length > 0 ? (
              <Stack spacing={2}>
                {notifications?.map((notification) => (
                  <Flex
                    key={notification.id}
                    justify="space-between"
                    align="center"
                    px={4}
                    py={2}
                    bg={notification.isRead ? 'gray.200' : 'white'}
                    borderRadius="md"
                  >
                    <Text flex={1} mr={2}>
                      {notification.message}
                    </Text>

                    <IconButton
                      aria-label="Delete Icon"
                      icon={<DeleteIcon />}
                      variant="ghost"
                      onClick={() => handleDeleteNotification(notification.id)}
                    />
                  </Flex>
                ))}
              </Stack>
            ) : (
              <Text textAlign="center">Новых уведомлений нет</Text>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {count > 0 && (
        <Badge position="absolute" top="-2px" right="-2px" colorScheme="red">
          {count}
        </Badge>
      )}
    </Flex>
  )
}

export default NotificationBadge
