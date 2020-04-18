import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, FC } from 'react';
import { align, size } from 'types/types';
import styles from './MainTitle.module.scss';

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
  isBuilder?: boolean;
  darkMode?: true | false;
  onEditable?: () => void;
}

const SectionTitle: FC<MainTitleProps> = ({
  isBuilder = false, darkMode, children, onEditable,
  mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle
} = { mainTitle: '', darkMode: false, ...defaultMainTitleOption }) => {
  const color = !!colorMainTitle ? colorMainTitle : '';
  const fontSize = !!fontSizeMainTitle ? fontSizeMainTitle : '';
  const align = !!alignMainTitle ? alignMainTitle : '';
  const style = !!styleMainTitle ? styleMainTitle : {};
  const classM = !!classMainTitle ? classMainTitle : '';
  const dark = darkMode ? styles.dark : '';
  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div onClick={onEditable} className={` ${styles.isBuilder} ${styles.sectionTitle} ${styles[color]} ${styles[fontSize]} ${styles[align]} ${classM} ${dark}`} style={{ ...style, color: colorMainTitle }}>
            {mainTitle}
            {children}
          </div>
        }
      />
    )
  }
  return (
    <div className={`${styles.sectionTitle} ${styles[color]} ${styles[fontSize]} ${styles[align]} ${classM} ${dark}`} style={{ ...style, color: colorMainTitle }}>
      {mainTitle}
      {children}
    </div>
  );
};

export default SectionTitle;
