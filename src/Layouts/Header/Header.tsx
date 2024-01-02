import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HEADER } from '../../utils/constants';
import Navigate from '../../pages/Welcome/Navigate';

import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <Link to={HEADER.link} className={styles.logo}>
        <h2 className={styles.title}>{HEADER.title}</h2>
      </Link>
      <Navigate />
    </header>
  );
};

export default Header;
