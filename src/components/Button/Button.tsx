import 'antd/es/button/style/css';
import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, MouseEvent } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  type?: 'gradient' | 'gradient2' | 'gradient3' | 'primary' | 'border' | 'white' | 'transparent';
  size?: 'default' | 'large' | 'middle' | 'small';
  color?: string;
  backgroundColor?: string;
  dark?: boolean;
  darkClassName?: string;
  onClick?: (event?: MouseEvent) => void;
  initial?: boolean;
  text?: string;
  href?: string;
  target?: 'default' | 'blank' | 'self';
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  isBuilder?: boolean;
  onEditable?: () => void;
}


const Button = ({
  isBuilder = false, children, onEditable, backgroundColor,
  text, href, target = 'self', className, style, color = '', type = 'white', size = 'default', dark, onClick
}: ButtonProps) => {
  const darkMode = dark ? styles['dark'] : '';
  const cssBackground: CSSProperties = backgroundColor ? { background: backgroundColor } : {};
  const cssColor: CSSProperties = color ? { color: color } : {};
  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={
        <a href={href} style={{ ...style, ...cssBackground, ...cssColor }} onClick={(e) => {
          e.preventDefault(); onEditable?.();
        }}
          className={`${styles.isBuilder} ${styles[size]} ${styles[type]} ${styles.button} ${styles.defaultStyle} ${darkMode} ${className}`}>
          {text}
          {children}
        </a>
      } />
    );
  }
  return (
    <a href={href} target={`_${target === 'default' ? 'self' : target}`} style={{ ...style, ...cssBackground, ...cssColor }} onClick={onClick && onClick}
      className={`${styles.defaultStyle} ${styles[size]} ${styles[type]} ${styles.button} ${darkMode} ${className}`}>
      {text}
      {children}
    </a>
  );
};

export default Button;


