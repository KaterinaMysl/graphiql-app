import { ErrorPageMessage } from '../utils/constants';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorcontainer}>
      <div className={styles.title}>{ErrorPageMessage}</div>
    </div>
  );
};

export default ErrorPage;
