import React, { FC, memo, MouseEvent } from 'react';
import styles from './Button.module.scss';
import 'antd/es/button/style/css';

interface ButtonProps extends PropsComponent {
  color?: 'gradient' | 'primary' | 'border' | 'white' | 'transparent';
  dark?: boolean;
  darkClassName?: string;
  onClick?: (event?: MouseEvent) => void;
  initial?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className, style, color = 'primary', dark, initial = false, onClick }) => {
  const darkMode = dark ? styles['dark'] : '';
  return (
    <button onClick={onClick && onClick} className={`${styles[color]}  ${darkMode} ${className} ${initial ? styles.buttonInitial : styles.button}`}>
      {children}
    </button>
  );
}

export default memo(Button);


