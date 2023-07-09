import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './Contacts.module.scss'
import { UpdateContactsMutationVariables } from '@/generated/projectR-hasura'
import { useAuthContext } from '@/hooks/use-auth-context'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import Select from 'react-select'

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

const socialNetworkOptions = [
  {
    value: 'Facebook',
    label: 'Facebook',
    icon: <Icon as={FaFacebook} />,
  },
  {
    value: 'Twitter',
    label: 'Twitter',
    icon: <Icon as={FaTwitter} />,
  },
  {
    value: 'Instagram',
    label: 'Instagram',
    icon: <Icon as={FaInstagram} />,
  },
  {
    value: 'LinkedIn',
    label: 'LinkedIn',
    icon: <Icon as={FaLinkedin} />,
  },
  {
    value: 'GitHub',
    label: 'GitHub',
    icon: <Icon as={FaGithub} />,
  },
  {
    value: 'YouTube',
    label: 'YouTube',
    icon: <Icon as={FaYoutube} />,
  },
]

const CustomOption: React.FC<{
  value: string
  label: string
  icon: JSX.Element
}> = ({ value, label, icon }) => {
  return (
    <option value={value}>
      <Flex alignItems="center">
        <span>{icon}</span>
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

  const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = (e) => {
    setSelectedOption(e)
  }

  const data = [
    {
      value: 1,
      text: 'Up Arrow',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      ),
    },
    {
      value: 2,
      text: 'Down Arrow',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      ),
    },
    {
      value: 3,
      text: 'Left Arrow',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      ),
    },
    {
      value: 4,
      text: 'Right Arrow',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      ),
    },
  ]

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
            {/* <Select
              value={contact.socialNetwork}
              onChange={(e) => handleSocialNetworkChange(index, e.target.value)}
              bg="white"
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
            </Select> */}
            <Select
              placeholder="Select Option"
              value={selectedOption}
              options={data}
              onChange={handleChange}
              getOptionLabel={(e) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
            {/* <Input
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
            /> */}
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
