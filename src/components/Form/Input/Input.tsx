import React, { ChangeEvent, memo, FC, CSSProperties } from 'react';
import styles from './Input.module.scss';
import { Input as InputAntd } from 'antd';
import 'antd/es/style/css';
import { AutoSizeType } from 'antd/lib/input/ResizableTextArea';

export interface InputOption {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  horizontal?: boolean;
  onChange?: (result: string) => void;
  autoSize?: AutoSizeType;
  style?: CSSProperties
}

export interface InputProps extends InputOption {
}

const Input: FC<InputProps> = ({ name, placeholder, defaultValue, horizontal, autoSize, style, onChange }) => {

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <div className={`${styles.inputBox} ${horizontal ? styles.horizontal : null}`}>
      <label htmlFor={name} className={styles.inputName}>{name}</label>
      <InputAntd.TextArea
        className={styles.input}
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        autoSize={autoSize || { maxRows: 10, minRows: 3 }}
        style={style}
      />
    </div>
  );
};

export default memo(Input);
