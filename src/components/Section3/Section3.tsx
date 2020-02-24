import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import SectionTitle, { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { Component, FC, Fragment } from 'react';

interface Section3Props extends MainTitleProps, DividerProps, TextProps, ImageProps {
  renderLeft?: () => Component;
  renderRight?: () => Component;
}

const Section3: FC<Section3Props> = ({ mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle, text, alignText, colorText, fontSizeText, classText, styleText, hasDivider, dividerColor, srcImg, type, zoom, aspectRatio, className, style, darkMode, renderLeft, renderRight }) => {
  const dark = darkMode ? 'dark' : '';

  const _renderLeftDefault = () => {
    return <Image srcImg={srcImg} className={className} aspectRatio={aspectRatio} style={style} zoom={zoom} type={type} />;
  };

  const _renderRightDefault = () => {
    return <Fragment>
      {mainTitle && <SectionTitle mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} darkMode={darkMode} />}
      {hasDivider && <Divide dividerColor={dividerColor} />}
      {text && <Text text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} classText={classText} styleText={styleText} darkMode={darkMode} />}
    </Fragment>;
  };

  return (
    <Section className={`section3 ${dark}`}>
      <Row>
        <Col cols={[12, 12, 7]}>
          {renderLeft ? renderLeft() : _renderLeftDefault()}
        </Col>
        <Col cols={[12, 12, 5]}>
          {renderRight ? renderRight() : _renderRightDefault()}
        </Col>
      </Row>
    </Section>
  );
};

export default Section3;
