import React, { FC } from 'react';
import styles from './Divide.module.scss';

export interface DividerOption {
  dividerColor?: 'white' | 'pink';
  darkMode?: true | false;
}

export interface DividerProps {
  hasDivider?: boolean;
  dividerColor?: DividerOption['dividerColor'];
}

const defaultDividerOption: DividerOption = {
  darkMode: false,
  dividerColor: 'white'
};
const Divide: FC<DividerOption> = ({ dividerColor } = { ...defaultDividerOption }) => {
  const color = !!dividerColor ? styles[dividerColor] : '';
  return <div className={`${styles.divide} ${color}`} />;
};

export default Divide;
