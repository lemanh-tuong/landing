import 'antd/es/button/style/css';
import React, { FC, memo, MouseEvent } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends PropsComponent {
  color?: 'gradient' | 'primary' | 'border' | 'white' | 'transparent';
  dark?: boolean;
  darkClassName?: string;
  onClick?: (event?: MouseEvent) => void;
  initial?: boolean;
  text?: string;
  href?: string;
}

const Button: FC<ButtonProps> = ({ children, text, href, className, style, color = 'primary', dark, initial = false, onClick }) => {
  const darkMode = dark ? styles['dark'] : '';
  return (
    <a href={href} style={style} onClick={onClick && onClick} className={`${styles.defaultStyle} ${styles[color]}  ${darkMode} ${className} ${initial ? styles.buttonInitial : styles.button}`}>
      {text}
      {children}
    </a>
  );
};

export default memo(Button);


