type gettingJWT = {
  exp: number;
  // 'https://hasura.io/jwt/claims': {
  //   // 'x-hasura-allowed-roles': string;
  //   // 'x-hasura-default-role': string;
  //   'User_id': string;
  // };
  userId: string;
  jobseekerId: string;
  role: string;
};

type newJWT = {
  userID: string;
  jobseekerID: string;
  userRole: string;
};

export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  const JWTpayload: gettingJWT = JSON.parse(jsonPayload);

  const resultJWT: newJWT = {
    userID: JWTpayload.userId,
    userRole: JWTpayload.role,
    jobseekerID: JWTpayload.jobseekerId,
  };

  return resultJWT;
};
