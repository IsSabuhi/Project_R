import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './Contacts.module.scss'
import { UpdateContactsMutationVariables } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { socialNetworkOptions } from '@/configs'
import { Select } from 'chakra-react-select'

interface IContact {
  resume_id: string
}

type socialNetworkType = {
  value: string
  label: string
  icon: JSX.Element | undefined | null
}

type formContacts = {
  email: string
  phone: string
  socialNetwork: socialNetworkType
}

const initialFormContact: formContacts = {
  email: '',
  phone: '',
  socialNetwork: { value: '', label: '', icon: null },
}

type Contact = {
  socialNetwork: socialNetworkType
  url: string
}

function Contact({ resume_id }: IContact) {
  const { enqueueSnackbar } = useSnackbar()

  const { userProfileId } = useAuthContext()

  const formik = useFormik({
    initialValues: initialFormContact,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  const [contacts, setContacts] = useState<Contact[]>([])

  const [selectedOption, setSelectedOption] = useState<formContacts[]>([])

  const handleAddContact = () => {
    setContacts([
      ...contacts,
      { socialNetwork: { value: '', label: '', icon: null }, url: '' },
    ])
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

  const handleChange = (e: any, index: number) => {
    const updatedContacts = [...contacts]
    updatedContacts[index].socialNetwork = e
    setContacts(updatedContacts)
  }

  console.log(formik.values)

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
          value={formik.values.email as string}
          onChange={formik.handleChange}
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
          value={formik.values.phone as string}
          onChange={formik.handleChange}
        />
      </FormControl>

      <div className={styles.socialNetworks}>
        {contacts.map((contact, index) => (
          <Flex gap={4} key={index}>
            <Select
              id="socialNetwork"
              name="socialNetwork"
              placeholder="Социальная сеть"
              isSearchable={false}
              value={contact.socialNetwork}
              options={socialNetworkOptions}
              onChange={(e) => handleChange(e, index)}
              className={styles.socialNetworks_select}
              getOptionLabel={(option: socialNetworkType) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {option.icon}
                  <span style={{ marginLeft: 5 }}>{option.label}</span>
                </div>
              )}
            />

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
