import { getUniqueID } from '@/utils/getUniqueID'
import { useToast, UseToastOptions } from '@chakra-ui/react'

export const useCustomToast = () => {
  const toast = useToast()

  const createToast = (
    title: string,
    status: 'error' | 'info' | 'warning' | 'success',
    description = '',
    id = getUniqueID(),
    options?: UseToastOptions
  ) => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title,
        status,
        description,
        variant: 'solid',
        duration: 5000,
        isClosable: true,
        ...options,
      })
    }
  }

  return { toast, createToast }
}
