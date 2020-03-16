import React, { Component, FC, memo } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends PropsComponent {
  color?: 'gradient' | 'primary' | 'border' | 'white' | 'transparent';
  dark?: boolean;
  darkClassName?: string;
  onClick?: (arg?: any) => void;
  initial?: boolean;
}

const Button:FC<ButtonProps> = ({ children, className, style, color = 'primary', dark, initial = false, onClick }) => {
  const darkMode = dark ? styles['dark'] : '';
  return (
    <div className={className} style={style} onClick={onClick && onClick}>
      <a href="###" className={`${styles[color]}  ${darkMode} ${className} ${initial ? styles.buttonInitial : styles.button}`}>
        {children}
      </a>
    </div >
  );
}

export default memo(Button);


