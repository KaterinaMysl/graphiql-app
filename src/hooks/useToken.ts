import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hook';
import { RootState } from '../redux/store';
import { isTokenNotExpired, isTokenValid } from '../utils/helpers';

const useToken = (initialIsToken: boolean) => {
  const [isToken, setIsToken] = useState(initialIsToken);

  const { accessToken, expirationTime } = useAppSelector(
    (state: RootState) => state.tokenSlice
  );

  useEffect(() => {
    const isCurrToken =
      isTokenNotExpired(expirationTime) && isTokenValid(accessToken);
    setIsToken(isCurrToken);
  }, [expirationTime, accessToken]);

  return isToken;
};

export default useToken;
