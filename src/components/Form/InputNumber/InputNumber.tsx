import { InputNumber as InputNumberAntd } from 'antd';
import React, { FC } from 'react';
import styles from './InputNumber.module.scss';

export interface InputNumberProps {
  fieldName: string;
  defaultNumber?: number;
  min?: number;
  max?: number;
  onChange: (result?: number) => void;
}

const InputNumber: FC<InputNumberProps> = ({ fieldName, defaultNumber, max, min, onChange }) => {
  return <div className={styles.inputNumberComponent}>
    <div className={styles.content}>
      <div className={styles.fieldName}>{fieldName}</div>
      <InputNumberAntd min={min} max={max} defaultValue={defaultNumber || 1} onChange={onChange} />
    </div>
  </div>
}

export default InputNumber;
