import React, { CSSProperties, FC, useState } from 'react';
import { Option } from '../../SettingsPage';
import PageTab from './PageTab/PageTab';
import SectionTab from './SectionTab/SectionTab';
import styles from './SideBar.module.scss';
export interface SideBarProps {
  className?: string;
  style?: CSSProperties;
}

export interface ItemSideBar extends Omit<Option, 'sectionId'> {
  id: string;
}

type TabsName = 'section' | 'page';

const SideBar: FC<SideBarProps> = ({ className }) => {

  const [nowTab, setNowTab] = useState<TabsName>('section');

  const handleChangeTab = (tabName: TabsName) => {
    return () => setNowTab(tabName);
  };

  const _renderSectionTab = () => {
    return <SectionTab className={className} />;
  };

  const _renderPageTab = () => {
    return <PageTab />;
  };

  const _renderSwitch = () => {
    switch (nowTab) {
      case 'page':
        return _renderPageTab();
      case 'section':
        return _renderSectionTab();
      default:
        return null;
    }
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContent}>
        <div className={styles.sideBarNav}>
          <div className={`${styles.btn} ${nowTab === 'section' ? styles.active : ''}`} onClick={handleChangeTab('section')}>Section</div>
          <div className={`${styles.btn} ${nowTab === 'page' ? styles.active : ''}`} onClick={handleChangeTab('page')}>Page</div>
        </div>
        {_renderSwitch()}
      </div>
    </div>
  );
};

export default SideBar;
