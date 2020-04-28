import { Menu } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from 'components/Dropdown/Dropdown';
import { Option } from 'pages/SettingsPage/SettingsPage';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import React, { FC } from 'react';
import styles from './ToolTipFunc.module.scss';

export interface ToolTipFuncProps {
  nowIndexSection: number;
  elementProperty: Option;
}

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const ToolTipFunc: FC<ToolTipFuncProps> = ({ nowIndexSection, elementProperty }) => {
  // Destructoring
  const { reverse } = elementProperty;

  // Dispatch
  const changeReverse = thunkChangeCheckBox();

  // Handle
  const handleChange = (checked: boolean) => {
    changeReverse({ fieldName: 'reverse', checked: checked, nowIndexSection: nowIndexSection })
  }

  return (
    <Dropdown
      menu={menu}
      className={styles.toolTipFunc}
    />
  )
}

export default ToolTipFunc;
