import React, { ChangeEvent, ReactNode } from 'react';
import styles from './Input.module.scss';

type RenderItem<T> = (arg: T) => ReactNode;

export interface InputOption {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  horizontal?: boolean;
  onChange?: (result: string) => void;
}

export interface InputProps extends InputOption {
  renderItem?: RenderItem<InputOption>;
}

const Input = ({ name, placeholder, defaultValue, horizontal, onChange, renderItem }: InputProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  const _renderDefault = () => {
    // return (
    //   <div className={`${styles.inputBox} ${horizontal ? styles.horizontal : null}`}>
    //     <label className={styles.inputName}>{name}</label>
    //     <input className={styles.input} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} />
    //   </div>
    // );
  };

  return (
    <div className={`${styles.inputBox} ${horizontal ? styles.horizontal : null}`}>
      <label className={styles.inputName}>{name}</label>
      <input className={styles.input} defaultValue={defaultValue} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;