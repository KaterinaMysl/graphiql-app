import styles from './Page404.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Page Not Found</h1>
      <p className={styles.description}>
        The page you are looking for might be in another universe.{<br />}
        <Link to="/">Go back to the home page.</Link>
      </p>
    </div>
  );
};

export default Page404;
