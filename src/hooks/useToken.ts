import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hook';
import { RootState } from '../redux/store';
import { isTokenNotExpired, isTokenValid } from '../utils/helpers';

const useToken = (initialIsToken: boolean = false) => {
  const [isToken, setIsToken] = useState(initialIsToken);

  const { accessToken, expirationTime } = useAppSelector(
    (state: RootState) => state.authSlice
  );

  useEffect(() => {
    const isCurrToken =
      isTokenNotExpired(expirationTime) && isTokenValid(accessToken);
    setIsToken(isCurrToken);
  }, [expirationTime, accessToken]);

  return isToken;
};

export default useToken;
