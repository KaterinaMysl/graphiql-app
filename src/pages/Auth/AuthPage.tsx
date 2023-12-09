import { useEffect } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../services/firebase';
import { useAppDispatch } from '../../redux/hook';
import { setToken } from '../../redux/slices/tokenSlice';
import { ROUTE_PATH, TOKEN_TITLE, emptyToken } from '../../utils/constants';
import { Token } from '../../utils/types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { MainLayout } from '../../Layouts/Main/Main';

const AuthPage = () => {
  const outlet = useOutlet();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [setValue] = useLocalStorage<Token>(TOKEN_TITLE, emptyToken);

  useEffect(() => {
    if (loading) {
      return;
    }

    (async () => {
      if (user) {
        const { token, expirationTime } = await user.getIdTokenResult();

        const currToken = { accessToken: token, expirationTime };
        dispatch(setToken(currToken));
        setValue(currToken);

        navigate(ROUTE_PATH.graphQl);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return <MainLayout>{outlet}</MainLayout>;
};

export default AuthPage;
