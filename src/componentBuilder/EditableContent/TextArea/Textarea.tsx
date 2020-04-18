import React, { ChangeEvent, CSSProperties, FC, FocusEvent } from 'react';
import styles from './Textarea.module.scss';

export interface TextareaProps {
  defaultValue?: string;
  autoFocus?: boolean;
  rows?: number;
  cols?: number;
  about?: string;
  maxLength?: number;
  required?: boolean;
  autoComplete?: string;
  onClick?: ((event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void);
  onChange?: ((event: ChangeEvent<HTMLTextAreaElement>) => void);
  onBlur?: ((event: ChangeEvent<HTMLTextAreaElement>) => void);
  onFocus?: ((event: FocusEvent<HTMLTextAreaElement>) => void);
  ref?: string | ((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined;
  className?: string;
  block?: boolean;
  backgroundColor?: 'transparent' | string;
  style?: CSSProperties;
}

const Textarea: FC<TextareaProps> = ({ rows, cols, about, autoComplete, autoFocus = false, defaultValue, required = false, maxLength, ref, className, block, backgroundColor, style, onClick, onBlur, onChange, onFocus }) => {

  const handleFocusEnd = (event: FocusEvent<HTMLTextAreaElement>) => {
    let temp_value = event.target.value;
    event.target.value = '';
    event.target.value = temp_value;
    onFocus?.(event);
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event);
  }

  const handleBlur = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onBlur?.(event);
  }

  const handleClick = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
    onClick?.(event);
  }

  return <textarea
    className={`${className} ${block ? styles.block : null}`}
    style={{ ...style, backgroundColor: backgroundColor }}
    defaultValue={defaultValue}
    ref={ref}
    autoFocus={autoFocus}
    onClick={handleClick}
    onChange={handleChange}
    onBlur={handleBlur}
    onFocus={handleFocusEnd}
    rows={rows}
    cols={cols}
    about={about}
    autoComplete={autoComplete}
    maxLength={maxLength}
    required={required}
  />
}

export default Textarea;
