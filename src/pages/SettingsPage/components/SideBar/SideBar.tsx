import { Button } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
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
      <ButtonGroup scroll={true}>
        <Button className={styles.btn} onClick={handleChangeTab('section')}>Section</Button>
        <Button className={styles.btn} onClick={handleChangeTab('page')}>Page</Button>
      </ButtonGroup>
      {_renderSwitch()}
    </div>
  );
};

export default SideBar;
