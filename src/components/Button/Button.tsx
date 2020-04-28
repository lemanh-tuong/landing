import 'antd/es/button/style/css';
import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, MouseEvent } from 'react';
import styles from './Button.module.scss';

// color?: 'gradient' | 'primary' | 'border' | 'white' | 'transparent';
export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
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
  isBuilder = false, children, onEditable, backgroundColor,
  text, href, className, style, color = '', dark, initial = false, onClick
}: ButtonProps) => {
  const darkMode = dark ? styles['dark'] : '';
  const cssBackground: CSSProperties = backgroundColor ? { background: backgroundColor } : {};
  const cssColor: CSSProperties = color ? { color: color } : {};
  console.log(cssColor, color);
  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={
        <a href={href} style={{ ...style, ...cssBackground, ...cssColor }} onClick={(e) => { e.preventDefault(); onEditable?.() }} className={`${styles.isBuilder} ${styles.button} ${styles.defaultStyle} ${styles.gradient} ${darkMode} ${className}`}>
          {text}
          {children}
        </a>
      } />
    )
  }
  return (
    <a href={href} style={{ ...style, ...cssBackground, ...cssColor }} onClick={onClick && onClick} className={`${styles.defaultStyle} ${styles.button} ${darkMode} ${className} ${styles.gradient}`}>
      {text}
      {children}
    </a>
  );
}

export default Button;


