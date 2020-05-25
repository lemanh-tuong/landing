import Button from 'components/Button/Button';
import React, { FC, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RadioProps } from '../Radio/Radio';
import styles from './Radio2.module.scss';

const Radio2: FC<RadioProps> = ({ fieldName, data, onClick, defaultCheckedValue }) => {

  const handleClick = (value: string) => {
    return () => {
      onClick?.(value);
    };
  };

  const _renderRadioItem = (name: string, value: string, index: number, defaultChecked?: boolean) => {
    return (
      <label htmlFor={`${value} ${name}`} className={styles.radioBtn} key={uuidv4()} onClick={handleClick(value)}>
        <input type="radio" className={styles.btn} id={`${value} ${name}`} name={name} tabIndex={index} defaultChecked={defaultChecked} />
        <Button type='primary' size={value as any}>{value}</Button>
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

export default memo(Radio2);
