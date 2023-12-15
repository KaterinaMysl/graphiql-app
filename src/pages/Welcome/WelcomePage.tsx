import { useState } from 'react';
import RSS from './Rss/RSS';
import { ABOUT_TEAM } from '../../utils/constants';
import AboutTeam from './AboutTeam/AboutTeam';
import Popup from './AboutTeam/Popup';
import AboutProject from './AboutProject/AboutProject';

const WelcomePage = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsItem, setDetailsOpen] = useState<number>(0);

  const handlerOnClick = (id: number) => {
    setIsDetailsOpen(true);
    setDetailsOpen(id);
  };

  return (
    <>
      <AboutProject />
      <AboutTeam data={ABOUT_TEAM} onClick={handlerOnClick} />
      {isDetailsOpen && (
        <Popup
          onClick={() => setIsDetailsOpen(false)}
          data={ABOUT_TEAM[detailsItem].details}
        />
      )}
      <RSS />
    </>
  );
};

export default WelcomePage;
