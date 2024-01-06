import { TeamDetails } from '../../utils/types';
import { translations } from '../../utils/constants';
import { useLocalization } from '../../localization/LocalizationContext';

import styles from './Popup.module.css';

type PopupProps = {
  onClick: () => void;
  data: TeamDetails;
};

const Popup = ({ onClick, data }: PopupProps) => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <div className={`${styles.modal} open`}>
      <div>
        <div className={styles.wrapper}>
          <button onClick={onClick}>&times;</button>
        </div>
        <div className={styles.details}>
          <div className={styles.avatar}>
            <img src={data.avatar} alt="" />
          </div>
          <div className={styles.text}>
            <h3>{data.name}</h3>
            <div className={styles.description}>
              <p>
                <span>{translatedConstants.Popup.about}</span>
                {data.aboutMe}
              </p>
              <p>
                <span>{translatedConstants.Popup.location}</span>
                {data.location}
              </p>
              <p>
                <span>{translatedConstants.Popup.education}</span>
                {data.education}
              </p>
              <p>
                <span>{translatedConstants.Popup.english}</span>
                {data.english}
              </p>
              <p>
                <span>{translatedConstants.Popup.skills} </span>
                {data.skills}
              </p>
              <p>
                <span>{translatedConstants.Popup.contributions}</span>
                {data.contribution}
              </p>
            </div>
            <div className={styles.contact}>
              <a href={data.githubLink} target="_blank" rel="noreferrer">
                <img src={data.githubIcon} alt="github logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
