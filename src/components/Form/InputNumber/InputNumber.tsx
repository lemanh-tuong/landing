import { InputNumber as InputNumberAntd } from 'antd';
import React, { FC } from 'react';
import styles from './InputNumber.module.scss';

export interface InputNumberProps {
  label: string;
  defaultNumber?: number;
  min?: number;
  max?: number;
  step?: number | string;
  onChange: (result?: number) => void;
}

const InputNumber: FC<InputNumberProps> = ({ label, step = 1, defaultNumber, max, min, onChange }) => {
  return (
    <div className={styles.inputNumberComponent}>
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <InputNumberAntd step={step} min={min} max={max} defaultValue={defaultNumber ?? 1} onChange={onChange} />
      </div>
    </div>
  );
};

export default InputNumber;
