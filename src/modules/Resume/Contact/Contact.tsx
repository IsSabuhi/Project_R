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
  IconButton,
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
import { CloseIcon } from '@chakra-ui/icons'

interface IContact {
  resume_id: string
}

const initialFormContact: UpdateContactsMutationVariables = {
  email: '',
  phone: '',
}

type Contact = {
  socialNetwork: string;
  url: string;
};

function Contact({ resume_id }: IContact) {

  const { enqueueSnackbar } = useSnackbar()

  const { userId } = useAuthContext()

  const formik = useFormik({
    initialValues: initialFormContact,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  const [contacts, setContacts] = React.useState<Contact[]>([]);

  const handleAddContact = () => {
    setContacts([...contacts, { socialNetwork: '', url: '' }]);
  };

  const handleSocialNetworkChange = (index: number, value: string) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].socialNetwork = value;
    setContacts(updatedContacts);
  };

  const handleUrlChange = (index: number, value: string) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].url = value;
    setContacts(updatedContacts);
  };

   const handleRemoveContact = (index: number) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };


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

          <div>
      {contacts.map((contact, index) => (
        <Flex gap={4} key={index} >
          <Input
            id='socialNetwork'
            name='socialNetwork'
            type="text"
            value={contact.socialNetwork}
            onChange={(e) => handleSocialNetworkChange(index, e.target.value)}
            placeholder="Social Network"
          />
          <Input
            id='URL'
            name='URL'
            type="text"
            value={contact.url}
            onChange={(e) => handleUrlChange(index, e.target.value)}
            placeholder="URL"
          />
          <IconButton aria-label='removeSocNetwork' as={Button} icon={<CloseIcon />} onClick={() => handleRemoveContact(index)} />
        </Flex>
      ))}
      <Button  colorScheme="blue"
        variant="solid"   bg="teal.300"
        h="45"
        mt="5px"
        color="white"
        _hover={{
          bg: 'teal.200',
        }}
        _active={{
          bg: 'teal.400',
        }} onClick={handleAddContact}>Добавить контакт</Button>
    </div>

      {/* <Accordion allowToggle>
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
      </Accordion> */}

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
