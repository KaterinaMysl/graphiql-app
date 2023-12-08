import { Link } from 'react-router-dom';

import Navigate from '../../pages/Welcome/Navigate';
import { HEADER } from '../../utils/constants';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={HEADER.link} className={styles.logo}>
        <h2>{HEADER.title}</h2>
      </Link>
      <Navigate />
    </header>
  );
};

export default Header;
