import ReactPlayer from 'react-player';

import { ABOUT_PROJECT_CONTENT, ROUTE_PATH } from '../../../utils/constants';
import styles from './AboutProject.module.css';
import { Link } from 'react-router-dom';

const AboutProject = () => {
  return (
    <section className={styles.project}>
      <div className="container">
        <div className={styles.container}>
          <h2>{ABOUT_PROJECT_CONTENT.title}</h2>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>{ABOUT_PROJECT_CONTENT.description}</p>
              <div>
                <Link to={ROUTE_PATH.graphQl} className={styles.link}>
                  <span>Get started</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.video}>
              <ReactPlayer url={ABOUT_PROJECT_CONTENT.video} controls />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
