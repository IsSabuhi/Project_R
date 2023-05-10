import { AiOutlineFolderView } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { GrTemplate } from 'react-icons/gr'
import { IoMdHome } from 'react-icons/io'
import { BsCardChecklist } from 'react-icons/bs'

export const APP_URLS = {
  SIGN_IN: '/login',
  SIGN_UP: 'signup',
  SIGN_OUT: '/login',
}

export const SIDEBAR_URLS = [
  {
    label: 'Главная',
    href: '/home',
    icon: <IoMdHome size="20px" />,
  },
  {
    label: 'Просмотр откликов',
    href: '/home',
    icon: <AiOutlineFolderView size="20px" />,
  },
  {
    label: 'Шаблоны резюме',
    href: '/home',
    icon: <GrTemplate size="20px" />,
  },
  {
    label: 'Настройки',
    href: '/settings',
    icon: <FiSettings size="20px" />,
  },
]

export const SIDEBAR_URLS_EMPLOYER = [
  {
    label: 'Главная',
    href: '/home',
    icon: <IoMdHome size="20px" />,
  },
  {
    label: 'Резюме',
    href: '/home',
    icon: <BsCardChecklist size="20px" />,
  },
  {
    label: 'Настройки',
    href: '/settings',
    icon: <FiSettings size="20px" />,
  },
]
