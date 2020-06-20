import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, FC, memo } from 'react';
import { align } from 'types/types';
import styles from './Divide.module.scss';

export interface DividerOption {
  dividerColor?: string; // 'white' | 'pink' |
  darkMode?: true | false;
  style?: CSSProperties;
  className?: string;
  align?: align;
}

export interface DividerProps extends DividerOption {
  isBuilder?: boolean;
  onEditable?: () => void;
}

const defaultDividerOption: DividerOption = {
  darkMode: false,
  dividerColor: 'white',
};

const Divide: FC<DividerProps> = (
  { dividerColor = '', isBuilder = false, onEditable, align = 'left', style, className } = { ...defaultDividerOption },
) => {
  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div
            onClick={onEditable}
            className={`${styles.isBuilder} ${className} ${styles[align]} ${styles.divide} ${dividerColor ? styles[dividerColor] : ''}`}
            style={{ backgroundColor: dividerColor, ...style }}
          />
        }
      />
    );
  }

  return (
    <div
      className={`${styles.divide} ${styles[align]} ${className} ${dividerColor ? styles[dividerColor] : ''}`}
      style={{ ...style, backgroundColor: dividerColor }}
    />
  );
};

export default memo(Divide);
