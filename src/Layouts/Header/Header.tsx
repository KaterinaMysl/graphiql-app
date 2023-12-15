import { Link } from 'react-router-dom';

import { HEADER, SCROLL_THRESHOLD } from '../../utils/constants';
import Navigate from '../../components/Navigate/Navigate';

import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const headerClass = `${styles.header} ${isSticky ? styles.sticky : ''}`;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      if (scrollY > SCROLL_THRESHOLD) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <header className={headerClass}>
      <div className="container">
        <div className={styles.content}>
          <Link to={HEADER.link} className={styles.logo}>
            <h2>{HEADER.title}</h2>
          </Link>
          <Navigate />
        </div>
      </div>
    </header>
  );
};

export default Header;
