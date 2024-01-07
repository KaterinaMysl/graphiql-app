import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../../localization/LocalizationContext';

import { HEADER, translations } from '../../utils/constants';
import Navigate from '../../components/Navigate/Navigate';

import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const { lang, toggleLang } = useLocalization();
  const translatedConstants = translations[lang];
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
      <div className={styles.container}>
        <div className={styles.firstblock}>
          <Link to={HEADER.link} className={styles.logo}>
            <h2 className={styles.title}>{HEADER.title}</h2>
          </Link>
          <button onClick={toggleLang}>
            {translatedConstants.MAIN.toggle}
            <p>
              {translatedConstants.MAIN.current} {lang}
            </p>
          </button>
        </div>
        <Navigate />
      </div>
    </header>
  );
};

export default Header;
