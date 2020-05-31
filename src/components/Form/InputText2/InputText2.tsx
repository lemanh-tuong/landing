import { Input } from 'antd';
import React, { ChangeEvent, CSSProperties, FC, memo, useRef, useState } from 'react';

export interface InputText2Props {
  addonBefore?: string;
  addonAfter?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (result: string) => void;
  style?: CSSProperties;
  label?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
}

const InputText2: FC<InputText2Props> = ({
  label, addonBefore, addonAfter, disabled, placeholder, defaultValue, maxLength, minLength, regex, required,
  style, onChange
}) => {

  const onChangeRef = useRef(onChange);
  let timeOut: Timeout;

  const [error, setError] = useState('');

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
    handleError(value);
    clearTimeout(timeOut);
    if (!error) {
      timeOut = setTimeout(() => {
        onChangeRef.current?.(value);
      }, 100)
    }
  };


  return (
    <div style={{ ...style, marginBottom: 16 }}>
      <label htmlFor={label} style={{ marginRight: 10 }}>{label}</label>
      <Input placeholder={placeholder} disabled={disabled} addonBefore={addonBefore} addonAfter={addonAfter} defaultValue={defaultValue} onChange={handleChange} />
      {!!error ? <p style={{ fontSize: 'inherit', color: 'red' }}>{error}</p> : null}
    </div>

  );
};

export default memo(InputText2);
