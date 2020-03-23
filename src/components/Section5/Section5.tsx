import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React from 'react';

export interface Section4Props<ItemT> extends SectionPatternBase, MainTitleProps, TextProps, Omit<CarouselProps<ItemT>, 'sliderImgs'> {
  data?: ItemT[];
  imgSrc?: string;
  slider?: boolean;
}

const Section4 = <ItemT extends any>({ mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  text, colorText, alignText, fontSizeText, styleText, classText,
  slider, data, dotClass, hasDots, hasNav, navClass, responsive, margin, itemShow, fluid,
  backgroundColor, backgroundImage, style, className, darkMode, renderItem,
}: Section4Props<ItemT>) => {

  const _renderColumn = () => {
    if (data instanceof Array) {
      return data.map((item, index) => <Col key={index} cols={[12, 6, 12 / data.length >= 3 ? Math.floor(12 / data.length) : 3]}>{renderItem?.({ ...item })}</Col>);
    }
  };

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style}>
      <Row>
        <Col cols={[10]} offsets={[1]}>
          <MainTitle darkMode={darkMode} mainTitle={mainTitle} colorMainTitle={colorMainTitle} alignMainTitle={alignMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle} />
          <Text darkMode={darkMode} text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />
        </Col>
        {slider && data ? <Carousel navClass={navClass} dotClass={dotClass} fluid={fluid} sliderImgs={data} hasDots={hasDots} hasNav={hasNav} renderItem={renderItem} margin={margin} responsive={responsive} itemShow={itemShow} /> : _renderColumn()}
      </Row>
    </Section>
  );
};

export default Section4;
