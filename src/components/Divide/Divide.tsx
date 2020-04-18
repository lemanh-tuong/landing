import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { FC, memo } from 'react';
import styles from './Divide.module.scss';

export interface DividerOption {
  dividerColor?: string; // 'white' | 'pink' |
  darkMode?: true | false;
}

export interface DividerProps extends DividerOption {
  isBuilder?: boolean;
  onEditable?: () => void;
}

const defaultDividerOption: DividerOption = {
  darkMode: false,
  dividerColor: 'white'
};


const Divide: FC<DividerProps> = ({ dividerColor, isBuilder = false, onEditable } = { ...defaultDividerOption }) => {
  const color = !!dividerColor ? styles[dividerColor] : '';

  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={<div onClick={onEditable} className={`${styles.divide} ${color}`} style={{ backgroundColor: dividerColor }} />} />
    )
  }

  return <div className={`${styles.divide} ${color}`} style={{ backgroundColor: dividerColor }} />;
};

export default memo(Divide);
