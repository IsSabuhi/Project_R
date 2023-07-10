import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './Contacts.module.scss'
import { UpdateContactsMutationVariables } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { socialNetworkOptions } from '@/configs'

interface IContact {
  resume_id: string
}

const initialFormContact: UpdateContactsMutationVariables = {
  email: '',
  phone: '',
}

type Contact = {
  socialNetwork: string
  url: string
}

const CustomOption: React.FC<{
  value: string
  label: string
  icon: string
}> = ({ value, label, icon }) => {
  return (
    <option value={value}>
      <Flex alignItems="center">
        <img src={icon} alt={label} />
        <Text>{label}</Text>
      </Flex>
    </option>
  )
}

function Contact({ resume_id }: IContact) {
  const { enqueueSnackbar } = useSnackbar()

  const { userId } = useAuthContext()

  const formik = useFormik({
    initialValues: initialFormContact,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  const [contacts, setContacts] = useState<Contact[]>([])

  const handleAddContact = () => {
    setContacts([...contacts, { socialNetwork: '', url: '' }])
  }

  const handleSocialNetworkChange = (index: number, value: string) => {
    const updatedContacts = [...contacts]
    updatedContacts[index].socialNetwork = value
    setContacts(updatedContacts)
  }

  const handleUrlChange = (index: number, value: string) => {
    const updatedContacts = [...contacts]
    updatedContacts[index].url = value
    setContacts(updatedContacts)
  }

  const handleRemoveContact = (index: number) => {
    const updatedContacts = [...contacts]
    updatedContacts.splice(index, 1)
    setContacts(updatedContacts)
  }

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
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

      <div className={styles.socialNetworks}>
        {contacts.map((contact, index) => (
          <Flex gap={4} key={index}>
            <Select
              value={contact.socialNetwork}
              onChange={(e) => handleSocialNetworkChange(index, e.target.value)}
              bg="white"
              flex="20%"
            >
              <option value="">Выберите соцсеть</option>
              {socialNetworkOptions.map((option) => (
                <CustomOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  icon={option.icon}
                />
              ))}
            </Select>

            <Input
              id="URL"
              name="URL"
              type="text"
              value={contact.url}
              onChange={(e) => handleUrlChange(index, e.target.value)}
              placeholder="URL"
            />
            <IconButton
              aria-label="removeSocNetwork"
              as={Button}
              icon={<CloseIcon />}
              onClick={() => handleRemoveContact(index)}
            />
          </Flex>
        ))}
        <Button
          variant="solid"
          border="1px dashed"
          bg="transparent"
          color="black"
          h="45"
          mt="5px"
          _hover={{
            bg: 'teal.200',
            borderColor: 'teal.500',
          }}
          _active={{
            bg: 'teal.400',
          }}
          leftIcon={<AddIcon />}
          onClick={handleAddContact}
        >
          Добавить социальную сеть
        </Button>
      </div>

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
