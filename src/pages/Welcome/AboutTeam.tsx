import styles from './AboutTeam.module.css';
import { AboutTeamType } from '../../utils/types';
import Team from './Team';

type AboutTeamProps = {
  data: AboutTeamType[];
  onClick: (id: number) => void;
};

const AboutTeam = ({ data, onClick }: AboutTeamProps) => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <h2>MEET OUR CREATIVE TEAM</h2>
          <div className={styles.content}>
            {data.map((item) => (
              <Team key={item.id} data={item} onClick={onClick} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
