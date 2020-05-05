import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Radio.module.scss';

export interface RadioButton {
  name: string;
  value: string;
}

export interface RadioOption {
  fieldName: string;
  data: RadioButton[];
  defaultCheckedValue: string;
  onClick?: (value: string) => void;
}

export interface RadioProps extends RadioOption {
}

const Radio = ({ fieldName, data, onClick, defaultCheckedValue }: RadioProps) => {

  const handleClick = (value: string) => {
    return () => {
      onClick?.(value);
    };
  };

  const _renderRadioItem = (name: string, value: string, index: number, defaultChecked?: boolean) => {
    return (
      <label htmlFor={`${value} ${name}`} className={styles.radioBtn} key={uuidv4()} onClick={handleClick(value)}>
        <input type="radio" className={styles.btn} id={`${value} ${name}`} name={name} tabIndex={index} defaultChecked={defaultChecked} />
        <span className={styles.name}>{value}</span>
      </label>
    );
  };

  const _renderRadioList = () => {
    return data.map((item, index) => _renderRadioItem(item.name, item.value, index, defaultCheckedValue === item.value));
  };

  const _renderDefault = () => (
    <div className={styles.radioForm}>
      <div className={styles.radioName}>
        {fieldName}
      </div>
      <div className={styles.radioGroup}>
        {_renderRadioList()}
      </div>
    </div>
  );

  return _renderDefault();
};

export default memo(Radio);
