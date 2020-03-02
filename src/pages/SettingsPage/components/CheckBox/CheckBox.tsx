import React, { FC, memo } from 'react';
import styles from './CheckBox.module.scss';

export interface CheckBoxProps {
  checked?: boolean;
  label: string;
  onClick?: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({ label, checked, onClick }) => {


  return (
    <div className={styles.checkBoxComponent}>
      <label className={styles.checkBoxName}>
        {label}
      </label>
      <button className={styles.checkBox} onClick={onClick}>
        {checked ? <i className="fas fa-check"></i> : <i style={{ color: 'white' }} className="far fa-square"></i>}
      </button>
    </div>
  );
};

export default memo(CheckBox);
