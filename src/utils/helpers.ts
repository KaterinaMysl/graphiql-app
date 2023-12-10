export const isTokenNotExpired = (expirationTime: string): boolean => {
  const time = new Date(expirationTime);
  const now = new Date();
  const is = now < time;

  return is;
};

// TODO:  if token from localstorage how to check validation
export const isTokenValid = (token: string): boolean => {
  return token !== '';
};
