import { useState } from 'react';
import { translations } from '../../utils/constants';
import { useLocalization } from '../../localization/LocalizationContext';

import AboutTeam from './AboutTeam';
import Popup from './Popup';
import AboutProject from './AboutProject';
import RSS from './RSS';

import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsItem, setDetailsOpen] = useState<number>(0);
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];

  const handlerOnClick = (id: number) => {
    setIsDetailsOpen(true);
    setDetailsOpen(id);
  };

  return (
    <div className={styles.welcomePage}>
      <AboutTeam
        data={translatedConstants.ABOUT_TEAM}
        onClick={handlerOnClick}
      />
      {isDetailsOpen && (
        <Popup
          onClick={() => setIsDetailsOpen(false)}
          data={translatedConstants.ABOUT_TEAM[detailsItem].details}
        />
      )}
      <AboutProject />
      <RSS />
    </div>
  );
};

export default WelcomePage;
