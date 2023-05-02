import {
  MdOutlineSpaceDashboard,
  MdOutlineSettingsInputComposite,
  MdOutlineNotificationsActive,
} from 'react-icons/md'

export const APP_URLS = {
  SIGN_IN: '/login',
  SIGN_UP: 'signup',
  SIGN_OUT: '/login',
  SETTINGS: '/settings',
}

export const SIDEBAR_URLS = [
  {
    type: 'link',
    label: 'Главная',
    icon: MdOutlineSpaceDashboard,
    href: '/home',
  },
  {
    type: 'link',
    label: 'Мои резюме',
    icon: MdOutlineSpaceDashboard,
    href: '/',
  },
  {
    type: 'header',
    label: 'Аккаунт',
  },
  {
    type: 'link',
    label: 'Уведомления',
    icon: MdOutlineNotificationsActive,
    href: '/',
    notifications: 24,
  },
  {
    type: 'link',
    label: 'Настройки',
    icon: MdOutlineSettingsInputComposite,
    href: '/settings',
  },
]
