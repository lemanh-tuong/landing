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
}

const InputText2: FC<InputText2Props> = ({ addonBefore, addonAfter, disabled, placeholder, defaultValue, style, onChange }) => {

  const onChangeRef = useRef(onChange);

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value) {
      onChangeRef.current?.(value);
    }
  }, [onChangeRef, value]);

  return (
    <div style={{ ...style, marginBottom: 16 }}>
      <Input placeholder={placeholder} disabled={disabled} addonBefore={addonBefore} addonAfter={addonAfter} defaultValue={defaultValue} onChange={handleChange} />
    </div>
  );
};

export default memo(InputText2);
