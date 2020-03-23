import React, { ChangeEvent, memo, FC } from 'react';
import styles from './Input.module.scss';

export interface InputOption {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  horizontal?: boolean;
  onChange?: (result: string) => void;
}

export interface InputProps extends InputOption {
}

const Input: FC<InputProps> = ({ name, placeholder, defaultValue, horizontal, onChange }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <div className={`${styles.inputBox} ${horizontal ? styles.horizontal : null}`}>
      <label className={styles.inputName}>{name}</label>
      <input className={styles.input} defaultValue={defaultValue} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
};

export default memo(Input);
