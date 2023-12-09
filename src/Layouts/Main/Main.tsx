import { ChildrenProps } from '../../utils/types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Main.module.css';

const Main = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}> {children}</main>
      <Footer />
    </>
  );
};
export { Main as MainLayout };
