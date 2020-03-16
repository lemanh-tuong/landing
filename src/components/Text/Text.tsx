import React, { CSSProperties, FC } from 'react';
import { align, size } from 'types/types';
import styles from './Text.module.scss';

export interface TextOption {
  colorText?: string;
  fontSizeText?: size;
  styleText?: CSSProperties;
  classText?: string;
  alignText?: align;
  darkMode?: true | false;
}


export interface TextProps extends TextOption {
  text?: string;
}

const Text: FC<TextProps> = ({ text, colorText, fontSizeText, alignText, classText, styleText, darkMode, children }) => {
  const color = !!colorText ? colorText : '';
  const fontSize = !!fontSizeText ? fontSizeText : '';
  const align = !!alignText ? alignText : '';
  const style = !!styleText ? styleText : {};
  const classT = !!classText ? classText : '';
  const dark = darkMode ? styles.dark : '';
  return (
    <div className={`${styles.text} ${styles[fontSize]} ${styles[color]} ${styles[align]} ${classT} ${dark} `} style={{...style, color: color, fontSize: fontSize}}>
      {text}
      {children}
    </div>
  );
};


export default Text;
