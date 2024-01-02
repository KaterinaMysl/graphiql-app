import useToken from '../../hooks/useToken';
import RSS from './RSS';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  const isToken = useToken(false);

  return (
    <div className={styles.welcomePage}>
      <p className={styles.welcomeText}>Welcome</p>
      <p className={styles.isTokenText}>
        IsToken: {isToken ? 'true' : 'false'}
      </p>
      <RSS />
    </div>
  );
};

export default WelcomePage;
