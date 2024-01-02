import { AboutTeamType } from '../../utils/types';
import styles from './AboutTeam.module.css';

type PropsTeamType = {
  data: AboutTeamType;
  onClick: (id: number) => void;
};

const Team = ({
  data: { id, avatar, name, position, button },
  onClick,
}: PropsTeamType) => {
  const handlerOnClick = () => {
    onClick(id);
  };
  return (
    <div className={styles[`participant${id}`]}>
      <div>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <h3>{name}</h3>
        <p>{position}</p>
        <button onClick={handlerOnClick}>{button}</button>
      </div>
    </div>
  );
};

export default Team;
