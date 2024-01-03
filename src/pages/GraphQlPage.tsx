import styles from './GraphQlPage.module.css';
import { useLocalization } from '../localization/LocalizationContext';
import { translations } from '../utils/constants';
const GraphQlPage = () => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translatedConstants.GraphQlPage.title}</h1>
      <p className={styles.description}>
        {translatedConstants.GraphQlPage.text}
      </p>{' '}
    </div>
  );
};

export default GraphQlPage;
