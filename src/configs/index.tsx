import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'

export const socialNetworkOptions = [
  {
    value: 'Telegram',
    label: 'Telegram',
    icon: <Icon as={FaTelegram} />, 
  },
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

export const languages = [
  { id: 1, name: 'English', label: 'Английский'},
  { id: 2, name: 'French', label: 'Французский'},
  { id: 3, name: 'German', label: 'Немецкий'},
  { id: 4, name: 'Chinese', label: 'Китайский'},
]

export const languagesLevel = [
  {id: 1, name: 'Beginner', label: 'A1 - Начальный'},
  {id: 2, name: 'Basic', label: 'A2 - Базовый'},
  {id: 3, name: 'Average', label: 'B1 - Средний'},
  {id: 4, name: 'Above_average', label: 'B2 - Выше среднего'},
  {id: 5, name: 'Advanced', label: 'C1 - Продвинутый'},
  {id: 6, name: 'Professional', label: 'C2 - Профессиональный'},
]

export const drivingCategories = [
  {
    id: 1,
    label: 'A'
  },
  {
    id: 2,
    label: 'B'
  },
  {
    id: 3,
    label: 'BE'
  },
  {
    id: 4,
    label: 'C'
  },{
    id: 5,
    label: 'CE'
  },
  {
    id: 6,
    label: 'D'
  },{
    id: 7,
    label: 'DE'
  },
  {
    id: 8,
    label: 'M'
  },
  {
    id: 9,
    label: 'TB и TM'
  },
]