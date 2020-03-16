import React, { FC, memo } from 'react';
import styles from './Divide.module.scss';

export interface DividerOption {
  dividerColor?: string; // 'white' | 'pink' |
  darkMode?: true | false;
}

export interface DividerProps extends DividerOption {
}

const defaultDividerOption: DividerOption = {
  darkMode: false,
  dividerColor: 'white'
};


const Divide: FC<DividerProps> = ({ dividerColor } = { ...defaultDividerOption }) => {
  const color = !!dividerColor ? styles[dividerColor] : '';
  return <div className={`${styles.divide} ${color}`} style={{ backgroundColor: dividerColor }} />;
};

export default memo(Divide);
