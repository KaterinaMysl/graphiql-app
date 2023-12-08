import styles from './RSS.module.css';
import { Link } from 'react-router-dom';
import rss from '../../assets/img/svg/rs_school.svg';
import { RSS_CONTENT } from '../../utils/constants';

const RSS = () => {
  return (
    <section className={styles.rss}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={RSS_CONTENT.link}>
            <img src={rss} alt={RSS_CONTENT.alt} />
          </Link>
        </div>
        <div className={styles.content}>
          <h3>{RSS_CONTENT.title}</h3>
          <p>{RSS_CONTENT.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default RSS;
