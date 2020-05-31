import { Input as InputAntd } from 'antd';
import 'antd/es/style/css';
import { AutoSizeType } from 'antd/lib/input/ResizableTextArea';
import React, { ChangeEvent, CSSProperties, FC, memo, useRef, useState } from 'react';
import styles from './Input.module.scss';

export interface InputOption {
  type: 'input' | 'password';
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  horizontal?: boolean;
  onChange?: (result: string) => void;
  autoSize?: AutoSizeType;
  style?: CSSProperties;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
}

export interface InputProps extends InputOption {
}

const Input: FC<InputProps> = ({
  type, label, placeholder, defaultValue, horizontal, required, maxLength, minLength, regex,
  autoSize, style, onChange }) => {
  const onChangeRef = useRef(onChange);
  const [error, setError] = useState('');

  let timeout: Timeout;

  const handleError = (value: string) => {
    setError(() => {
      if (required && value.length === 0) return 'Required'
      if (minLength && value.length < minLength) return 'Not enough length'
      if (maxLength && value.length > maxLength) return 'Too long'
      if (regex && value.match(regex)) return 'Pattern Error'
      return ''
    })
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    clearTimeout(timeout);
    handleError(value);
    if (!error) {
      timeout = setTimeout(() => {
        onChangeRef.current?.(value);
      }, 100);
    }
  };

  const _renderTextArea = () => {
    return <InputAntd.TextArea
      className={styles.input}
      name={label}
      defaultValue={defaultValue}
      onChange={handleChange} onFocus={handleChange}
      placeholder={placeholder}
      autoSize={autoSize ?? { maxRows: 10, minRows: 3 }}
      style={style} minLength={minLength} maxLength={maxLength}
      required={required}
    />;
  };

  const _renderPassWordArea = () => {
    return <InputAntd.Password minLength={minLength} maxLength={maxLength} className={`${styles.input} ${styles.flex}`} style={style} visibilityToggle={true} onFocus={handleChange} onChange={handleChange} />;
  };

  return (
    <div className={`${styles.inputBox} ${horizontal ? styles.horizontal : null}`}>
      <label htmlFor={label} className={styles.inputName}>{label}</label>
      {type === 'input' ? _renderTextArea() : _renderPassWordArea()}
      {error ? <p className={styles.errorMsg}>{error}</p> : null}
    </div>
  );
};

export default memo(Input);
