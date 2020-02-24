import React, { Component } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends PropsComponent {
  color: 'gradient' | 'primary' | 'border' | 'white' | 'transparent';
  dark: boolean;
  darkClassName?: string;
  onClick?: () => void;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    color: 'white',
    className: '',
    dark: false,
  };

  render() {
    const { children, className, style, color, dark, onClick } = this.props;
    const darkMode = dark ? styles['dark'] : '';
    return (
      <div className={className} style={style} onClick={onClick && onClick}>
        <a href="###" className={`${styles.button} ${styles[color]}  ${darkMode} ${className}`}>
          {children}
        </a>
      </div >
    );
  }
}
