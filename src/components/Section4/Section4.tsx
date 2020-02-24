import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import SectionTitle, { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC, ReactNode } from 'react';

export interface Section4Props extends SectionPatternBase, MainTitleProps, TextProps, Omit<ImageProps, 'srcImg'> {
  renderItem?: () => ReactNode;
  srcImg?: string;
}

const Section4: FC<Section4Props> = ({ mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  text, colorText, alignText, fontSizeText, styleText, classText,
  srcImg, aspectRatio, type, zoom, parallax,
  bgColor, style, className, darkMode, renderItem,
}) => {

  const _renderImage = () => {
    return (
      <Col cols={[12]}>
        {srcImg && <Image srcImg={srcImg} aspectRatio={aspectRatio} type={type} zoom={zoom} parallax={parallax} />}
      </Col>
    );
  };

  return (
    <Section bgColor={bgColor} className={className} style={style}>
      <Row>
        <Col cols={[10]} offsets={[1]}>
          <SectionTitle darkMode={darkMode} mainTitle={mainTitle} colorMainTitle={colorMainTitle} alignMainTitle={alignMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle} />
          <Text darkMode={darkMode} text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />
        </Col>
        {_renderImage()}
        {renderItem?.()}
      </Row>
    </Section>
  );
};

export default Section4;
