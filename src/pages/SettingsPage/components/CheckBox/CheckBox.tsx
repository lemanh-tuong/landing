import React, { FC, memo, useState } from 'react';
import styles from './CheckBox.module.scss';

export interface CheckBoxProps {
  checked?: boolean;
  onEvent?: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({ checked, onEvent }) => {

  const [check, setCheck] = useState(false);
  const handleClick = () => {
    setCheck(!check);
  };

  return (
    <div className={styles.checkBoxComponent}>
      <label className={styles.checkBoxName}>
        Use Slider
      </label>
      <button className={styles.checkBox} onClick={handleClick}>
        {check ? <i className="fas fa-check"></i> : <i style={{ color: 'white' }} className="far fa-square"></i>}
      </button>
    </div>
  );
};

export default memo(CheckBox);
