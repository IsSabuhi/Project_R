export const APP_URLS = {
  SIGN_IN: "/login",
  SIGN_OUT: "/",

  USER_PAGE: {
    ROOT: "/user/[id]",
    ALL_RESUMES: "/resumes",
    RECOMENDATIONS: "/user/[id]/recomendations"
  },

  getUserPage: (userId: string) => `/user/${userId}`,
  getResumesPage: (resumeId: string, userId: string) =>
    `/user/${userId}/resume/${resumeId}`
};
