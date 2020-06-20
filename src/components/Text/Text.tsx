import PopOverText from 'componentBuilder/PopOverText/PopOverText';
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
  text: string;
  isBuilder?: boolean;
  onEditable?: () => void;
}

const Text: FC<TextProps> = ({
  isBuilder,
  text = '',
  colorText,
  fontSizeText = 'md',
  alignText = 'center',
  classText,
  styleText,
  darkMode,
  children,
  onEditable,
}) => {
  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div
            className={`${classText} ${!!text ? '' : styles.empty} ${styles.isBuilder} ${styles.text} ${styles[fontSizeText]} ${
              styles[alignText]
            } ${classText} ${darkMode ? styles.dark : ''} `}
            style={{ ...styleText, color: colorText, fontSize: fontSizeText }}
            onClick={onEditable}
            dangerouslySetInnerHTML={{ __html: text }}
          >
            {children}
          </div>
        }
      />
    );
  }
  if (!!text) {
    return (
      <div
        className={`${styles.text}
          ${classText}
          ${styles[fontSizeText]}
          ${styles[alignText]} ${classText} ${darkMode ? styles.dark : ''} `}
        style={{ ...styleText, color: colorText }}
        dangerouslySetInnerHTML={{ __html: text }}
      >
        {children}
      </div>
    );
  }
  return null;
};

export default Text;
