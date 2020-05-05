import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

export type Section3Props = {
  text?: string;
  reverse?: boolean;
  hasDivider?: boolean;
  imageSectionCol: ImageProps;
  sectionId: string;
  isBuilder?: boolean;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditImage?: () => void;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<DividerProps, 'isBuilder' | 'onEditable'>>
  & Omit<TextProps, 'text' | 'isBuilder' | 'onEditable'>;

const Section3: FC<Section3Props> = ({
  isBuilder, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditTitle, onShowPopupEditImage, animation, positionAnimation,
  backgroundColor, backgroundImage,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  text, alignText, colorText, fontSizeText, classText, styleText,
  hasDivider = false, dividerColor,
  imageSectionCol,
  className, style, reverse, darkMode }) => {
  const dark = darkMode ? 'dark' : '';

  const _renderLeftDefault = () => {
    const { imgSrc, zoom, aspectRatio } = imageSectionCol;
    return <Image isBuilder={isBuilder} onEditable={onShowPopupEditImage} imgSrc={imgSrc} className={className} aspectRatio={aspectRatio} style={style} zoom={zoom} type='tagImg' />;
  };

  const _renderText = () => {
    return <Text
      onEditable={onShowPopupEditText}
      isBuilder={isBuilder}
      text={text ?? ''}
      colorText={colorText}
      alignText={alignText}
      fontSizeText={fontSizeText}
      classText={classText}
      styleText={styleText}
      darkMode={darkMode} />;
  };

  const _renderRightDefault = () => {
    return <>
      {mainTitle && <MainTitle
        onEditable={onShowPopupEditTitle}
        isBuilder={isBuilder}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        fontSizeMainTitle={fontSizeMainTitle}
        classMainTitle={classMainTitle}
        styleMainTitle={styleMainTitle}
        darkMode={darkMode} />
      }
      {hasDivider ? <Divide
        dividerColor={dividerColor}
        isBuilder={isBuilder}
        onEditable={onShowPopupEditDivider} /> : <Divide dividerColor='transparent' isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', margin: 0, zIndex: 123, cursor: 'pointer' }} />
      }
      {text && _renderText()}
    </>;
  };

  return (
    <Section className={`section3 ${dark}`} backgroundColor={backgroundColor} backgroundImage={backgroundImage} animation={animation} positionAnimation={positionAnimation}>
      <Row>
        <Col cols={[12, 12, 6]} className={`${reverse ? 'order-last' : ''}`}>
          {_renderLeftDefault()}
        </Col>
        <Col cols={[12, 12, 5]} offsets={[0, 0, 1]} className={`${reverse ? 'order-first' : ''}`} >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            {_renderRightDefault()}
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Section3;
