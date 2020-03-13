import React, { useState } from 'react';
import { RenderItem } from '../Form';
import styles from './CheckBox.module.scss';

export interface CheckBoxOption {
  checked: boolean;
  name: string;
  reverse?: boolean;
  horizontal?: boolean;
  onClick?: () => void;
}

export interface CheckBoxProps extends CheckBoxOption {
  renderItem?: RenderItem<CheckBoxOption>;
}

const CheckBox = ({ checked, name, horizontal, renderItem, reverse, onClick }: CheckBoxProps) => {

  const [nowCheck, setNowCheck] = useState(checked);

  const handleClick = () => {
    setNowCheck(!nowCheck)
    onClick?.();
  }

  const _renderDefault = () => (
    <div className={`${styles.checkBox} ${reverse ? styles.reverse : null} ${horizontal ? styles.horizontal : null}`}>
      <label className={styles.checkBoxName}>
        {name}
      </label>
      <button className={styles.box} onClick={handleClick}>
        {nowCheck ? <i className="fas fa-check"></i> : <i style={{ color: 'white' }} className="far fa-square"></i>}
      </button>
    </div>
  );

  return _renderDefault();
};

export default CheckBox;
