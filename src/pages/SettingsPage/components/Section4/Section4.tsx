import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React from 'react';

export type Section4Props<ItemSlide> = {
  data?: ItemSlide[];
  imageSectionCol?: ImageProps;
  slider?: boolean;
  isBuilder?: boolean;
  sectionId: string;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditImage?: () => void;
} & SectionPatternBase
  & Omit<MainTitleProps, 'isBuilder' | 'onEditable'>
  & Omit<TextProps, 'isBuilder' | 'onEditable'>
  & Omit<CarouselProps<ItemSlide>, 'sliderImgs' | 'isBuilder' | 'onEditable'>

const Section4 = <ItemT extends any>({
  isBuilder, sectionId, onShowPopupEditTitle, onShowPopupEditText, onShowPopupEditImage,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  text, colorText, alignText, fontSizeText, styleText, classText,
  imageSectionCol, aspectRatio, type, zoom, parallax,
  slider, data, dotClass, hasDots, hasNav, navClass, responsive, margin, itemShow, fluid,
  backgroundColor, backgroundImage, style, className, darkMode, renderItem,
}: Section4Props<ItemT>) => {

  const _renderImage = () => {
    return (
      <Col cols={[12]}>
        {imageSectionCol && <Image isBuilder={isBuilder} onEditable={onShowPopupEditImage} imgSrc={imageSectionCol.imgSrc} aspectRatio={imageSectionCol.aspectRatio} type={'tagImg'} zoom={imageSectionCol.zoom} parallax={imageSectionCol.parallax} />}
      </Col>
    );
  };

  const _renderColumn = () => {
    if (data instanceof Array) {
      return data.map((item, index) => <Col key={index} cols={[12, 6, 12 / data.length >= 3 ? Math.floor(12 / data.length) : 3]}>{renderItem?.({ ...item })}</Col>);
    }
  };

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style}>
      <Row>
        <Col cols={[10]} offsets={[1]}>
          <MainTitle isBuilder={isBuilder} onEditable={onShowPopupEditTitle} darkMode={darkMode} mainTitle={mainTitle} colorMainTitle={colorMainTitle} alignMainTitle={alignMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle} />
          <Text isBuilder={isBuilder} onEditable={onShowPopupEditText} darkMode={darkMode} text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />
        </Col>
        {_renderImage()}
        {slider && data ? <Carousel navClass={navClass} dotClass={dotClass} fluid={fluid} sliderImgs={data} hasDots={hasDots} hasNav={hasNav} renderItem={renderItem} margin={margin} responsive={responsive} itemShow={itemShow} /> : _renderColumn()}
      </Row>
    </Section>
  );
};

export default Section4;
