import { FieldsRadio, TypeRadio } from 'components/Form/Form';
import React, { FC } from 'react';
import styles from './Radio.module.scss';


const Radio: FC<FieldsRadio> = ({ label, data, onClick }) => {

  const handleClick = (label: string) => {
    return () => {
      onClick(label);
    };
  };

  const _renderRadioItem = ({ name, label, checked, key }: TypeRadio) => {
    return (
      <div className={styles.radioItem} key={key}>
        <label htmlFor={label}>{label}</label>
        <input type="radio" name={name} value={label.toString()} id={label.toString()} checked={checked} onClick={handleClick(label)} />
      </div>
    );
  };

  return (
    <div className={styles.radioForm}>
      <div className={styles.radioName}>
        {label}
      </div>
      <div className={styles.radioGroup}>
        {data.map(item => _renderRadioItem(item))}
      </div>

    </div>
  );
};

export default Radio;
