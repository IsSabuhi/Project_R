export const APP_URLS = {
  SIGN_IN: '/login',
  SIGN_UP: 'signup',
  SIGN_OUT: '/login',
  VACANCY: '/vacancy',

  getSettingsPage: (userId: string) => `/settings/${userId}`,
  getHomePage: (userId: string) => `/user/${userId}`,
  getResumePage: (resumeId: string) => `/resume/${resumeId}`,
}
