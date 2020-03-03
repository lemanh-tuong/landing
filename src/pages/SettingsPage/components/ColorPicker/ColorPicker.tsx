import React, { FC } from 'react';
import styles from './ColorPicker.module.scss';

export interface ColorPickerProps {
  color: string;
  name: string;
  onClick?: () => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ color, name, onClick }) => {
  return (
    <div className={styles.colorPicker} onClick={onClick}>
      <div className={styles.color} style={{ backgroundColor: color }}></div>
      <div className={styles.colorName}>{name}</div>
    </div>
  );
};

export default ColorPicker;
