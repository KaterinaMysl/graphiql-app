import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Main.module.css';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
export { Main as MainLayout };
