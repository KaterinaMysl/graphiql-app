import { Link } from 'react-router-dom';

import { HEADER } from '../../utils/constants';
import Navigate from '../../pages/Welcome/Navigate';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={HEADER.link} className={styles.logo}>
        <h2 className={styles.title}>{HEADER.title}</h2>
      </Link>
      <Navigate />
    </header>
  );
};

export default Header;
