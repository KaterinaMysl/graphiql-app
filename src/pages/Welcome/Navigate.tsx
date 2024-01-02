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
import { Token } from '../../utils/types';
import styles from './Navigate.module.css';

const Navigate = () => {
  const dispatch = useAppDispatch();
  const isToken = useToken(false);
  const [, setValue] = useLocalStorage<Token>(TOKEN_TITLE, emptyToken);

  const handleLogout = () => {
    dispatch(unsetToken());
    setValue(emptyToken);
    logout();
  };

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        {isToken ? (
          <>
            <Link to={ROUTE_PATH.graphQl} className={styles.link}>
              {LINK_NAME.graphQl}
            </Link>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to={`${ROUTE_PATH.auth}/${ROUTE_PATH.login}`}
              className={styles.link}
            >
              {LINK_NAME.login}
            </Link>
            <span className={styles.separator}>/</span>
            <Link
              to={`${ROUTE_PATH.auth}/${ROUTE_PATH.registration}`}
              className={styles.link}
            >
              {LINK_NAME.registration}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigate;
