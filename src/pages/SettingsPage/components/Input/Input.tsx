import React, { FC, memo, RefObject } from 'react';
import styles from './Input.module.scss';

export interface Input {
  ref?: string | ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined;
  value?: string;
}

const Input: FC<Input> = ({ ref, value }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputName}>MainTitle</label>
      <input className={styles.input} value={value} type="text" ref={ref} />
    </div>
  );
};

export default memo(Input);
