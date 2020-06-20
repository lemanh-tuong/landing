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
  mainTitle: string;
  isBuilder?: boolean;
  darkMode?: true | false;
  onEditable?: () => void;
}

const SectionTitle: FC<MainTitleProps> = (
  {
    isBuilder = false,
    darkMode,
    children,
    onEditable,
    mainTitle,
    colorMainTitle = '',
    fontSizeMainTitle = 'lg',
    alignMainTitle = 'center',
    styleMainTitle,
    classMainTitle,
  } = { mainTitle: '', darkMode: false, ...defaultMainTitleOption },
) => {
  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div
            onClick={onEditable}
            className={`${!!mainTitle ? null : styles.empty} ${styles.isBuilder} ${styles.sectionTitle} ${styles[fontSizeMainTitle]} ${
              styles[alignMainTitle]
            } ${classMainTitle} ${darkMode ? styles.dark : ''}`}
            style={{ ...styleMainTitle, color: colorMainTitle }}
          >
            {mainTitle}
            {children}
          </div>
        }
      />
    );
  }
  return (
    <div
      className={`${!!mainTitle ? null : styles.empty} ${styles.sectionTitle} ${styles[fontSizeMainTitle]} ${
        styles[alignMainTitle]
      } ${classMainTitle} ${darkMode ? styles.dark : ''}`}
      style={{ ...styleMainTitle, color: colorMainTitle }}
    >
      {mainTitle}
      {children}
    </div>
  );
};

export default SectionTitle;
