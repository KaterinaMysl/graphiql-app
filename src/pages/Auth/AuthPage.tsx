import { useEffect } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../services/firebase';
import { useAppDispatch } from '../../redux/hook';
import { setToken } from '../../redux/slices/isTokenSlice';
import { ROUTE_PATH } from '../../utils/constants';
import { MainLayout } from '../../Layouts/Main/Main';

const AuthPage = () => {
  const outlet = useOutlet();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('us=', user);

    if (loading) {
      return;
    }

    if (user) {
      dispatch(setToken(true));
      navigate(ROUTE_PATH.graphQl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return <MainLayout>{outlet}</MainLayout>;
};

export default AuthPage;
