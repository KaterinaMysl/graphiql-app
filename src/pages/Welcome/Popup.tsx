import { TeamDetails } from '../../utils/types';
import styles from './Popup.module.css';

type PopupProps = {
  onClick: () => void;
  data: TeamDetails;
};

const Popup = ({ onClick, data }: PopupProps) => {
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
                <span>About me: </span>
                {data.aboutMe}
              </p>
              <p>
                <span>Location: </span>
                {data.location}
              </p>
              <p>
                <span>Education: </span>
                {data.education}
              </p>
              <p>
                <span>English: </span>
                {data.english}
              </p>
              <p>
                <span>Skills: </span>
                {data.skills}
              </p>
              <p>
                <span>Contributions: </span>
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
