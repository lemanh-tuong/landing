import React, { CSSProperties, FC } from 'react';
import { align, size } from 'types/types';
import styles from './Text.module.scss';

export interface TextOption {
  colorText?: 'white' | 'black-3';
  fontSizeText?: size;
  styleText?: CSSProperties;
  classText?: string;
  alignText?: align;
  darkMode?: true | false;
}
const defaultTextOption: TextOption = {
  alignText: 'left',
  classText: '',
  styleText: {},
  colorText: 'black-3',
  fontSizeText: undefined,
};

export interface TextProps extends TextOption {
  text?: string;
}

const Text: FC<TextProps> = ({ text, colorText, fontSizeText, alignText, classText, styleText, darkMode, children } = { text: '', darkMode: false, ...defaultTextOption }) => {
  const color = !!colorText ? colorText : '';
  const fontSize = !!fontSizeText ? fontSizeText : '';
  const align = !!alignText ? alignText : '';
  const style = !!styleText ? styleText : {};
  const classT = !!classText ? classText : '';
  const dark = darkMode ? styles.dark : '';
  return (
    <div className={`${styles.text} ${styles[color]} ${styles[fontSize]} ${styles[align]} ${classT} ${dark} `} style={style}>
      {text}
      {children}
    </div>
  );
};


export default Text;
