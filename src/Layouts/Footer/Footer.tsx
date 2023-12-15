import rssLogo from '../../assets/img/svg/rs_school.svg';
import gitLogo from '../../assets/img/svg/github-mark.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.rss}>
            <a href="https://rs.school/react/">
              <img src={rssLogo} alt=" rss logo" />
            </a>
          </div>
          <p>© 2023 | All Rights Reserved</p>
          <div className={styles.github}>
            <a href="https://github.com/KaterinaMysl/graphiql-app">
              <img src={gitLogo} alt="github logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
