export const APP_URLS = {
  SIGN_IN: '/login',
  SIGN_UP: 'signup',
  SIGN_OUT: '/login',

  getSettingsPage: (userId: string) => `/settings/${userId}`,
  getHomePage: (userId: string) => `/home/${userId}`,
  getResumePage: (resumeId: string) => `/resume/${resumeId}`,
}
