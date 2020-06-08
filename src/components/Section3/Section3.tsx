import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';
import styles from './Section3.module.scss';

export type Section3Props = {
  text?: string;
  reverse?: boolean;
  hasDivider?: boolean;
  imageSectionCol: ImageProps;
  alignDivider?: DividerProps['align'];
  sectionId: string;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<DividerProps, 'isBuilder' | 'onEditable' | 'align'>>
  & Omit<TextProps, 'text' | 'isBuilder' | 'onEditable'>;

export interface Section3PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditImage?: () => void;
}

const Section3: FC<Section3Props & Section3PropsBuilder> = ({
  isBuilder, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditTitle, onShowPopupEditImage, animation, positionAnimation,
  backgroundColor, backgroundImage,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  text, alignText, colorText, fontSizeText, classText, styleText,
  hasDivider = false, dividerColor, alignDivider,
  imageSectionCol,
  className, style, reverse, darkMode }) => {
  const dark = darkMode ? 'dark' : '';

  const _renderLeftDefault = () => {
    const { imgSrc, zoom, aspectRatio } = imageSectionCol;
    return <Image isBuilder={isBuilder} onEditable={onShowPopupEditImage} imgSrc={imgSrc} className={`${className} ${styles.imageCol}`} aspectRatio={aspectRatio} style={style} zoom={zoom} type='tagImg' />;
  };

  const _renderText = () => {
    return <Text
      onEditable={onShowPopupEditText}
      isBuilder={isBuilder}
      text={text ?? ''}
      colorText={colorText}
      alignText={alignText}
      fontSizeText={fontSizeText}
      classText={`${classText} ${styles.text}`}
      styleText={styleText}
      darkMode={darkMode} />;
  };

  const _renderRightDefault = () => {
    return <>
      {<MainTitle
        onEditable={onShowPopupEditTitle}
        isBuilder={isBuilder}
        mainTitle={mainTitle ?? ''}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        fontSizeMainTitle={fontSizeMainTitle}
        classMainTitle={`${classMainTitle} ${styles.mainTitle}`}
        styleMainTitle={styleMainTitle}
        darkMode={darkMode} />
      }
      {hasDivider ? <Divide
        dividerColor={dividerColor} align={alignDivider}
        isBuilder={isBuilder}
        className={styles.divider}
        onEditable={onShowPopupEditDivider} /> : <Divide align={alignDivider} dividerColor='transparent' isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', margin: 0, zIndex: 123, cursor: 'pointer' }} />
      }
      {_renderText()}
    </>;
  };

  return (
    <Section className={`section3 ${dark}`} backgroundColor={backgroundColor} backgroundImage={backgroundImage} animation={animation} positionAnimation={positionAnimation}>
      <Row>
        <Col cols={[12, 12, 6]} className={`order-sm-1 ${reverse ? 'order-lg-last' : ''}`}>
          {_renderLeftDefault()}
        </Col>
        <Col cols={[12, 12, 5]} offsets={[0, 0, 1]} className={`order-sm-2   ${reverse ? 'order-lg-first' : ''}`} >
          <div className={reverse ? styles.descCol2 : styles.descCol1} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            {_renderRightDefault()}
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Section3;
