export const APP_URLS = {
  SIGN_IN: "/login",
  SIGN_OUT: "/",

  USER_PAGE: {
    ROOT: "/user/[id]",
    ALL_RESUMES: "/resumes",
    RECOMENDATIONS: "/user/[id]/recomendations"
  },

  EMPLOYER_PAGE: {
    ROOT: "/employer/[id]",
    ALL_JOBSEEKERS: "/jobseekers",
    ALL_RESUMES: "/resumes"
  },

  getUserPage: (userId: string) => `/user/${userId}`,
  getEmployerPage: (userId: string) => `/employer/${userId}`,
  getResumesPage: (resumeId: string, userId: string) =>
    `/user/${userId}/resume/${resumeId}`
};
