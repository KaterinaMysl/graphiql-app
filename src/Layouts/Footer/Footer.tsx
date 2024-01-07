import styles from './Footer.module.css';
import rssLogo from '../../assets/img/svg/rs_school.svg';
import gitLogo from '../../assets/img/svg/github-mark.svg';
import { useLocalization } from '../../localization/LocalizationContext';
import { footerAltTexts, translations } from '../../utils/constants';
const Footer = () => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.rss}>
          <a href="https://rs.school/react/">
            <img src={rssLogo} alt={footerAltTexts.rss} />
          </a>
        </div>

        <p>{translatedConstants.FOOTER.text}</p>
        <div className={styles.github}>
          <a href="https://github.com/KaterinaMysl">
            <img src={gitLogo} alt={footerAltTexts.github} />
          </a>
          <a href="https://github.com/HalinaPP">
            <img src={gitLogo} alt={footerAltTexts.github} />
          </a>
          <a href="https://github.com/kazymirT">
            <img src={gitLogo} alt={footerAltTexts.github} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
