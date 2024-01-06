import { Tab } from '../types';
import styles from './TabList.module.css';

interface Props {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  hidePanel: () => void;
}

const TabList = ({ tabs, activeTab, setActiveTab, hidePanel }: Props) => {
  return (
    <div className={styles.tabList}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={activeTab === index ? styles.active : ''}
        >
          {tab.label}
        </button>
      ))}
      <button
        className={activeTab > -1 ? styles.showHideBtn : styles.hideBtn}
        key={tabs.length}
        onClick={hidePanel}
      >
        Hide
      </button>
    </div>
  );
};

export default TabList;
