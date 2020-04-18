import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Icon, { IconProps } from 'components/Icon/Icon';
import Text, { TextOption, TextProps } from 'components/Text/Text';
import React, { CSSProperties, FC, memo } from 'react';
import { align, size } from 'types/types';
import styles from './Card.module.scss';

interface CardTitleOption {
  colorTitleCard?: string;
  alignTitleCard?: align;
  fontSizeTitleCard?: size;
  classNameTitleCard?: string;
  styleTitleCard?: CSSProperties;
}

interface CardTextOption extends TextOption {
}

export interface CardOption extends CardTitleOption, CardTextOption {
  darkMode?: boolean;
}

export interface CardProps extends CardOption, Omit<TextProps, 'text'>, IconProps {
  textCard?: string;
  titleCard?: string;
  hasIcon?: boolean;
  isBuilder?: boolean;
  onEditable?: () => void;
}


const Card: FC<CardProps> = ({
  isBuilder, onEditable,
  titleCard, colorTitleCard, fontSizeTitleCard, alignTitleCard, classNameTitleCard, styleTitleCard,
  textCard, colorText, fontSizeText, alignText, styleText, classText,
  hasIcon, iconImg, sizeIcon, animationIcon, bgColorIcon, styleIcon, classNameIcon,
  darkMode }) => {
  const titleColor = colorTitleCard ? colorTitleCard : '';
  const titleFontSize = fontSizeTitleCard ? fontSizeTitleCard : '';
  const titleAlign = alignTitleCard ? alignTitleCard : '';
  const dark = darkMode ? styles.dark : '';

  const _renderCardTitle = () => {
    return (
      <h2 className={`${classNameTitleCard} ${styles.cardTitle} ${styles[titleColor]} ${styles[titleFontSize]} ${styles[titleAlign]} ${dark}`} style={{ ...styleTitleCard, color: colorTitleCard }}>
        {titleCard}
      </h2>
    );
  };

  const _renderText = () => {
    return <Text
      text={textCard ?? ''}
      alignText={alignText}
      classText={classText}
      colorText={colorText}
      fontSizeText={fontSizeText}
      styleText={{ ...styleText, width: '100%', color: colorText }} />;
  };

  const _renderIcon = () => {
    return <div className={styles.cardIcon}>
      <Icon iconImg={iconImg}
        animationIcon={animationIcon}
        styleIcon={styleIcon}
        bgColorIcon={bgColorIcon}
        darkMode={darkMode} sizeIcon={sizeIcon}
        classNameIcon={classNameIcon} />
    </div>;
  };
  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={
        <div onClick={onEditable} className={`${styles.isBuilder} ${styles.card} ${darkMode}`}>
          {hasIcon && _renderIcon()}
          {titleCard && _renderCardTitle()}
          {textCard && _renderText()}
        </div>
      } />
    )
  }
  return (
    <div className={`${styles.card} ${darkMode}`}>
      {hasIcon && _renderIcon()}
      {titleCard && _renderCardTitle()}
      {textCard && _renderText()}
    </div>
  );
};

export default memo(Card);
