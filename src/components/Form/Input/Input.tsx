import { Input as InputAntd } from 'antd';
import 'antd/es/style/css';
import { AutoSizeType } from 'antd/lib/input/ResizableTextArea';
import React, { ChangeEvent, CSSProperties, FC, memo, useRef } from 'react';
import styles from './Input.module.scss';

export interface InputOption {
  type: 'input' | 'password';
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  horizontal?: boolean;
  onChange?: (result: string) => void;
  autoSize?: AutoSizeType;
  style?: CSSProperties;
}

export interface InputProps extends InputOption {
}

const Input: FC<InputProps> = ({ type, name, placeholder, defaultValue, horizontal, autoSize, style, onChange }) => {
  const onChangeRef = useRef(onChange);
  let timeout: Timeout;
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onChangeRef.current?.(value);
    }, 50);
  };

  const _renderTextArea = () => {
    return <InputAntd.TextArea
      className={styles.input}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      placeholder={placeholder}
      autoSize={autoSize ?? { maxRows: 10, minRows: 3 }}
      style={style}
    />;
  };

  const _renderPassWordArea = () => {
    return <InputAntd.Password className={`${styles.input} ${styles.flex}`} style={style} visibilityToggle={true} onChange={handleChange} />;
  };

  return (
    <div className={`${styles.inputBox} ${horizontal ? styles.horizontal : null}`}>
      <label htmlFor={name} className={styles.inputName}>{name}</label>
      {type === 'input' ? _renderTextArea() : _renderPassWordArea()}
    </div>
  );
};

export default memo(Input);
