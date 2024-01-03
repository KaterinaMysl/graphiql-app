import { useState } from 'react';
import RSS from './RSS';
import { translations } from '../../utils/constants';
import AboutTeam from './AboutTeam';
import Popup from './Popup';
import AboutProject from './AboutProject';
import styles from './WelcomePage.module.css';
import { useLocalization } from '../../localization/LocalizationContext';

const WelcomePage = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsItem, setDetailsOpen] = useState<number>(0);
  const { lang, toggleLang } = useLocalization();
  const translatedConstants = translations[lang];

  const handlerOnClick = (id: number) => {
    setIsDetailsOpen(true);
    setDetailsOpen(id);
  };

  return (
    <div className={styles.welcomePage}>
      <button onClick={toggleLang}>{translatedConstants.MAIN.toggle}</button>
      <p>
        {translatedConstants.MAIN.current} {lang}
      </p>
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
