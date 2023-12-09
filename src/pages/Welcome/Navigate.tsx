import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hook';
import { unsetToken } from '../../redux/slices/tokenSlice';
import {
  ROUTE_PATH,
  LINK_NAME,
  TOKEN_TITLE,
  emptyToken,
} from '../../utils/constants';
import { logout } from '../../services/firebase';
import useToken from '../../hooks/useToken';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Navigate = () => {
  const dispatch = useAppDispatch();
  const isToken = useToken(false);
  const [setValue] = useLocalStorage(TOKEN_TITLE, emptyToken);

  const handleLogout = () => {
    dispatch(unsetToken());
    setValue(emptyToken);
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
