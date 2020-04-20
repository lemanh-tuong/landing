import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

export type Section3Props = {
  text?: string | string[];
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
  & Omit<MainTitleProps, 'isBuilder' | 'onEditable'>
  & Omit<DividerProps, 'isBuilder' | 'onEditable'>
  & Omit<TextProps, 'text' | 'isBuilder' | 'onEditable'>

const Section3: FC<Section3Props> = ({
  sectionId, isBuilder, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditTitle, onShowPopupEditImage,
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
    if (text instanceof Array) {
      return text.map((content, index) => <Text key={index} text={content} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} classText={classText} styleText={styleText} darkMode={darkMode} />);
    } else {
      return <Text onEditable={onShowPopupEditText} isBuilder={isBuilder} text={text ?? ''} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} classText={classText} styleText={styleText} darkMode={darkMode} />;
    }
  };

  const _renderRightDefault = () => {
    return <>
      {mainTitle && <MainTitle onEditable={onShowPopupEditTitle} isBuilder={isBuilder} mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} darkMode={darkMode} />}
      {hasDivider && <Divide dividerColor={dividerColor} isBuilder={isBuilder} onEditable={onShowPopupEditDivider} />}
      {text && _renderText()}
    </>;
  };

  return (
    <Section className={`section3 ${dark}`} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <Row>
        <Col cols={[12, 12, 6]} className={`${reverse ? 'order-last' : ''}`}>
          {_renderLeftDefault()}
        </Col>
        <Col cols={[12, 12, 5]} offsets={[0, 0, 1]} className={`${reverse ? 'order-first' : ''}`} >
          {_renderRightDefault()}
        </Col>
      </Row>
    </Section>
  );
};

export default Section3;