import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

export type TypeSlide = {
  imgSrc: string;
  href?: string;
}

export type Section5Props = {
  sliderImgs?: TypeSlide[];
  imageSectionCol?: ImageProps;
  slider?: boolean;
  isBuilder?: boolean;
  sectionId: string;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditSlides?: () => void;
} & SectionPatternBase
  & Omit<MainTitleProps, 'isBuilder' | 'onEditable'>
  & Omit<TextProps, 'isBuilder' | 'onEditable'>
  & Omit<CarouselProps<TypeSlide>, 'sliderImgs' | 'isBuilder' | 'onEditable'>

const Section5: FC<Section5Props> = ({
  isBuilder, sectionId, onShowPopupEditTitle, onShowPopupEditText, onShowPopupEditSlides,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  text, colorText, alignText, fontSizeText, styleText, classText,
  slider, sliderImgs, dotClass, hasDots, hasNav, navClass, responsive, margin, itemShow, fluid,
  backgroundColor, backgroundImage, style, className, darkMode, renderItem,
}) => {

  const _renderSlide = ({ imgSrc, href }: TypeSlide) => {
    return (
      <a href={href} onClick={(e) => e.preventDefault()}>
        <Image imgSrc={imgSrc} type='tagImg' />
      </a>
    )
  }

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style}>
      <Row>
        <Col cols={[10]} offsets={[1]}>
          <MainTitle isBuilder={isBuilder} onEditable={onShowPopupEditTitle} darkMode={darkMode} mainTitle={mainTitle} colorMainTitle={colorMainTitle} alignMainTitle={alignMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle} />
          <Text isBuilder={isBuilder} onEditable={onShowPopupEditText} darkMode={darkMode} text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />
        </Col>
        <div className="slides" onClick={onShowPopupEditSlides}>
          {sliderImgs ? <Carousel
            navClass={navClass}
            dotClass={dotClass}
            fluid={fluid}
            sliderImgs={sliderImgs}
            hasDots={hasDots}
            hasNav={hasNav}
            renderItem={_renderSlide}
            margin={margin}
            responsive={responsive}
            itemShow={itemShow}
            isBuilder={isBuilder}
            onEditable={onShowPopupEditSlides}
          /> : null}
        </div>
      </Row>
    </Section>
  );
};

export default Section5;
