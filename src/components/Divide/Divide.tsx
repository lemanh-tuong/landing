import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, FC, memo } from 'react';
import styles from './Divide.module.scss';

export interface DividerOption {
  dividerColor?: string; // 'white' | 'pink' |
  darkMode?: true | false;
  style?: CSSProperties;
}

export interface DividerProps extends DividerOption {
  isBuilder?: boolean;
  onEditable?: () => void;
}

const defaultDividerOption: DividerOption = {
  darkMode: false,
  dividerColor: 'white'
};


const Divide: FC<DividerProps> = ({ dividerColor, isBuilder = false, onEditable, style } = { ...defaultDividerOption }) => {
  const color = !!dividerColor ? styles[dividerColor] : '';

  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={<div onClick={onEditable} className={`${styles.isBuilder} ${styles.divide} ${color}`} style={{ backgroundColor: dividerColor, ...style }} />} />
    );
  }

  return <div className={`${styles.divide} ${color}`} style={{ ...style, backgroundColor: dividerColor }} />;
};

export default memo(Divide);
