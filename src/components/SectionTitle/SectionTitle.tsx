import React, { CSSProperties, FC } from 'react';
import { align, size } from 'types/types';
import styles from './SectionTitle.module.scss';

export interface MainTitleOption {
  colorMainTitle?: string;
  fontSizeMainTitle?: size;
  styleMainTitle?: CSSProperties;
  classMainTitle?: string;
  alignMainTitle?: align;
}

const defaultMainTitleOption: MainTitleOption = {
  colorMainTitle: undefined,
  alignMainTitle: undefined,
  fontSizeMainTitle: undefined,
  classMainTitle: '',
  styleMainTitle: {},
};

export interface MainTitleProps extends MainTitleOption {
  mainTitle?: string;
  darkMode?: true | false;
}

const SectionTitle: FC<MainTitleProps> = ({ mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle, darkMode, children } = { mainTitle: '', darkMode: false, ...defaultMainTitleOption }) => {
  const color = !!colorMainTitle ? colorMainTitle : '';
  const fontSize = !!fontSizeMainTitle ? fontSizeMainTitle : '';
  const align = !!alignMainTitle ? alignMainTitle : '';
  const style = !!styleMainTitle ? styleMainTitle : {};
  const classM = !!classMainTitle ? classMainTitle : '';
  const dark = darkMode ? styles.dark : '';
  return (
    <div className={`${styles.sectionTitle} ${styles[color]} ${styles[fontSize]} ${styles[align]} ${classM} ${dark}`} style={{...styleMainTitle, color: colorMainTitle}}>
      {mainTitle}
      {children}
    </div>
  );
};

export default SectionTitle;
