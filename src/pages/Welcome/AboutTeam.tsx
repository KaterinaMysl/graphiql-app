import { AboutTeamType } from '../../utils/types';
import { translations } from '../../utils/constants';
import { useLocalization } from '../../localization/LocalizationContext';
import Team from './Team';

import styles from './AboutTeam.module.css';

type AboutTeamProps = {
  data: AboutTeamType[];
  onClick: (id: number) => void;
};

const AboutTeam = ({ data, onClick }: AboutTeamProps) => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <h2>{translatedConstants.TEAM_CONTENT.title}</h2>
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
