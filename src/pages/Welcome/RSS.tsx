import { Link } from 'react-router-dom';

import { translations } from '../../utils/constants';
import rss from '../../assets/img/svg/rs_school.svg';
import { useLocalization } from '../../localization/LocalizationContext';

import styles from './RSS.module.css';

const RSS = () => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <section className={styles.rss}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={translatedConstants.RSS_CONTENT.link}>
            <img src={rss} alt={translatedConstants.RSS_CONTENT.alt} />
          </Link>
        </div>
        <div className={styles.content}>
          <h3>{translatedConstants.RSS_CONTENT.title}</h3>
          <p>{translatedConstants.RSS_CONTENT.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default RSS;
