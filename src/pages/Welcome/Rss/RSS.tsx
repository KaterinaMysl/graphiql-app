import { Link } from 'react-router-dom';

import { RSS_CONTENT } from '../../../utils/constants';
import rss from '../../../assets/img/svg/rs_school.svg';

import styles from './RSS.module.css';

const RSS = () => {
  return (
    <section className={styles.rss}>
      <div className="container">
        <div className={styles.container}>
          <h2>{RSS_CONTENT.title}</h2>
          <div className={styles.content}>
            <div className={styles.logo}>
              <div>
                <Link to={RSS_CONTENT.link}>
                  <img src={rss} alt={RSS_CONTENT.alt} />
                </Link>
              </div>
            </div>
            <div className={styles.description}>
              <p>{RSS_CONTENT.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSS;
