import Navigate from '../../pages/Welcome/Navigate';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { HEADER } from '../../utils/constants';

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
