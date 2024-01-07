import { Tab } from '../types';
import styles from './TabPanel.module.css';

interface Props {
  tabs: Tab[];
  activeTab: number;
}

const TabPanel = ({ tabs, activeTab }: Props) => {
  return (
    activeTab > -1 && (
      <div className={styles.tabPanel}>{tabs[activeTab].content}</div>
    )
  );
};
export default TabPanel;
