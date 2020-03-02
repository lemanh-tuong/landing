import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import SectionTitle, { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { Component, FC, Fragment } from 'react';

export interface Section3Props extends MainTitleProps, DividerProps, Omit<TextProps, 'text'>, ImageProps, SectionPatternBase {
  renderLeft?: () => Component;
  renderRight?: () => Component;
  text?: string | string[];
  reverse?: boolean;
}

const Section3: FC<Section3Props> = ({ bgColor, mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle, text, alignText, colorText, fontSizeText, classText, styleText, hasDivider, dividerColor, srcImg, type, zoom, aspectRatio, className, style, reverse, darkMode, renderLeft, renderRight }) => {
  const dark = darkMode ? 'dark' : '';

  const _renderLeftDefault = () => {
    return <Image srcImg={srcImg} className={className} aspectRatio={aspectRatio} style={style} zoom={zoom} type='tagImg' />;
  };

  const _renderText = () => {
    if (text instanceof Array) {
      return text.map((content, index) => <Text key={index} text={content} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} classText={classText} styleText={styleText} darkMode={darkMode} />);
    } else {
      return <Text text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} classText={classText} styleText={styleText} darkMode={darkMode} />;
    }
  };

  const _renderRightDefault = () => {
    return <Fragment>
      {mainTitle && <SectionTitle mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} darkMode={darkMode} />}
      {hasDivider && <Divide dividerColor={dividerColor} />}
      {text && _renderText()}
    </Fragment>;
  };

  return (
    <Section className={`section3 ${dark}`} bgColor={bgColor}>
      <Row>
        <Col cols={[12, 12, 6]} className={`${reverse ? 'order-last' : ''}`}>
          {renderLeft ? renderLeft() : _renderLeftDefault()}
        </Col>
        <Col cols={[12, 12, 5]} offsets={[0, 0, 1]} className={`${reverse ? 'order-first' : ''}`} >
          {renderRight ? renderRight() : _renderRightDefault()}
        </Col>
      </Row>
    </Section>
  );
};

export default Section3;
