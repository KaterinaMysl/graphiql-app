import { useState } from 'react';
import RSS from './RSS';
import { ABOUT_TEAM } from '../../utils/constants';
import AboutTeam from './AboutTeam';
import Popup from './Popup';
import AboutProject from './AboutProject';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsItem, setDetailsOpen] = useState<number>(0);

  const handlerOnClick = (id: number) => {
    setIsDetailsOpen(true);
    setDetailsOpen(id);
  };

  return (
    <div className={styles.welcomePage}>
      <AboutTeam data={ABOUT_TEAM} onClick={handlerOnClick} />
      {isDetailsOpen && (
        <Popup
          onClick={() => setIsDetailsOpen(false)}
          data={ABOUT_TEAM[detailsItem].details}
        />
      )}
      <AboutProject />
      <RSS />
    </div>
  );
};

export default WelcomePage;
