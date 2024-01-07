import { useState } from 'react';
import TabList from './TabList/TabList';
import TabPanel from './TabPanel/TabPanel';
import { Tab } from './types';
import styles from './Tabs.module.css';

interface Props {
  tabs: Tab[];
}
const Tabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const hidePanel = () => {
    setActiveTab(-1);
  };
  return (
    <div className={styles.tabsContainer}>
      <TabList
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hidePanel={hidePanel}
      />
      <TabPanel tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
