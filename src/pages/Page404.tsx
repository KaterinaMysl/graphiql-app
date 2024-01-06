import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/LocalizationContext';
import { translations } from '../utils/constants';

import styles from './Page404.module.css';

const Page404 = () => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translatedConstants.P404.title}</h1>
      <p className={styles.description}>
        {translatedConstants.P404.text}
        {<br />}
        <Link to="/">{translatedConstants.P404.link}</Link>
      </p>
    </div>
  );
};

export default Page404;
