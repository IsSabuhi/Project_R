import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import styles from './Contacts.module.scss'
import {
  UpdateContactsMutationVariables,
  useGetJobseekerContactsQuery,
  useUpdateContactsMutation,
} from '@/generated/projectR-hasura'
import { useRouter } from 'next/router'
import { joinName } from '@/utils/joinName'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { contactsItem } from '@/configs'

interface IContact {
  resume_id: string
}

const initialFormContact: UpdateContactsMutationVariables = {
  email: '',
  phone: '',
}

function Contact({ resume_id }: IContact) {
  const { enqueueSnackbar } = useSnackbar()

  const { userId } = useAuthContext()

  const formik = useFormik({
    initialValues: initialFormContact,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <Flex gap={4} mt={5}>
        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="email">
            Адрес электронной почты
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваш email"
          />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend" htmlFor="phone">
            Номер телефона
          </FormLabel>
          <Input
            id="phone"
            name="phone"
            type="text"
            fontSize="sm"
            size="lg"
            placeholder="Введите ваш номер телефона"
          />
        </FormControl>
      </Flex>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex gap={4}>
              <Select placeholder="Select option">
                {contactsItem.map((contact, index) => {
                  return (
                    <option key={index} value={contact.label}>
                      <Flex alignItems="center">
                        <Icon as={contact.icon} mr={2} />
                        <Text>{contact.label}</Text>
                      </Flex>
                    </option>
                  )
                })}
              </Select>
              <Input type="text" />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Button
        type="submit"
        colorScheme="blue"
        variant="solid"
        loadingText="Сохранение"
        bg="teal.300"
        h="45"
        mb="5px"
        color="white"
        _hover={{
          bg: 'teal.200',
        }}
        _active={{
          bg: 'teal.400',
        }}
        marginLeft="auto"
      >
        Сохранить
      </Button>
    </form>
  )
}

export default Contact
