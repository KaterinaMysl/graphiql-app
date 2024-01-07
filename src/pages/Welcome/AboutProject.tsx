import { Link } from 'react-router-dom';
import { translations, ROUTE_PATH } from '../../utils/constants';
import { useLocalization } from '../../localization/LocalizationContext';
// eslint-disable-next-line import/no-unresolved
import video from '../../assets/img/png/video.png';

import styles from './AboutProject.module.css';

const AboutProject = () => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <section className={styles.project}>
      <div className="container">
        <div className={styles.container}>
          <h2>{translatedConstants.ABOUT_PROJECT_CONTENT.title}</h2>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>{translatedConstants.ABOUT_PROJECT_CONTENT.description}</p>
              <div>
                <Link to={ROUTE_PATH.graphQl} className={styles.link}>
                  <span>
                    {translatedConstants.ABOUT_PROJECT_CONTENT.button}
                  </span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.video}>
              <a
                href={translatedConstants.ABOUT_PROJECT_CONTENT.video}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.videoImg}
                  src={video}
                  alt={translatedConstants.ABOUT_PROJECT_CONTENT.graphQLLink}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
