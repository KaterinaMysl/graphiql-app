import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { ROUTE_PATH, LINK_NAME } from '../../utils/constants';
import { auth, logout } from '../../services/firebase';
import { setToken } from '../../redux/slices/isTokenSlice';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navigate = () => {
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();

  console.log('us=', user);

  const handleLogout = () => {
    dispatch(setToken(false));
    logout();
  };

  return (
    <nav>
      {isToken ? (
        <>
          <Link to={ROUTE_PATH.graphQl}>{LINK_NAME.graphQl}</Link>
          <button className="logout__btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.login}`}>
            {LINK_NAME.login}
          </Link>
          <span>/</span>
          <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.registration}`}>
            {LINK_NAME.registration}
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigate;
