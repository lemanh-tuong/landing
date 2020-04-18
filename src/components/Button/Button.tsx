import 'antd/es/button/style/css';
import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, MouseEvent } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  color?: 'gradient' | 'primary' | 'border' | 'white' | 'transparent';
  dark?: boolean;
  darkClassName?: string;
  onClick?: (event?: MouseEvent) => void;
  initial?: boolean;
  text?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  isBuilder?: boolean;
  onEditable?: () => void;
}


const Button = ({
  isBuilder = false, children, onEditable,
  text, href, className, style, color = 'primary', dark, initial = false, onClick
}: ButtonProps) => {
  const darkMode = dark ? styles['dark'] : '';

  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={
        <a href={href} style={style} onClick={onClick && onClick} className={`${styles.isBuilder} ${styles.defaultStyle} ${styles[color]} ${darkMode} ${className} ${initial ? styles.buttonInitial : styles.button}`}>
          {text}
          {children}
        </a>
      } />
    )
  }
  return (
    <a href={href} style={style} onClick={onClick && onClick} className={`${styles.defaultStyle} ${styles[color]}  ${darkMode} ${className} ${initial ? styles.buttonInitial : styles.button}`}>
      {text}
      {children}
    </a>
  );
}

export default Button;


