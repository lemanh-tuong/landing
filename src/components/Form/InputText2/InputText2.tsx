import { Input } from 'antd';
import React, { ChangeEvent, CSSProperties, FC, memo, useEffect, useRef, useState } from 'react';

export interface InputText2Props {
  addonBefore?: string;
  addonAfter?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (result: string) => void;
  style?: CSSProperties;
  label?: string;
}

const InputText2: FC<InputText2Props> = ({ label, addonBefore, addonAfter, disabled, placeholder, defaultValue, style, onChange }) => {

  const onChangeRef = useRef(onChange);

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChangeRef.current?.(value);
  }, [onChangeRef, value]);

  return (
    <div style={{ ...style, marginBottom: 16 }}>
      <label htmlFor={label} style={{ marginRight: 10 }}>{label}</label>
      <Input placeholder={placeholder} disabled={disabled} addonBefore={addonBefore} addonAfter={addonAfter} defaultValue={defaultValue} onChange={handleChange} />
    </div>

  );
};

export default memo(InputText2);
