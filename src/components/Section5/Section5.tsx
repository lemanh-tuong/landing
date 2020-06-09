import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

export interface TypeSlideSection5 {
  imgSrc: string;
  href?: string;
}

export type Section5Props = {
  sliderImgs?: TypeSlideSection5[];
  slider?: boolean;
  sectionId: string;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<TextProps, 'isBuilder' | 'onEditable'>>
  & Omit<CarouselProps<TypeSlideSection5>, 'sliderImgs' | 'isBuilder' | 'onEditable'>;

export interface Section5PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditSlides?: () => void;
}

const Section5: FC<Section5Props & Section5PropsBuilder> = ({
  isBuilder, onShowPopupEditTitle, onShowPopupEditText, onShowPopupEditSlides, animation, positionAnimation,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  text, colorText, alignText, fontSizeText, styleText, classText,
  sliderImgs, dotClass, hasDots, hasNav, navClass, responsive, margin, itemShow, fluid, draggable, delayTime,
  backgroundColor, backgroundImage, style, className, darkMode
}) => {

  const _renderSlide = ({ imgSrc, href }: TypeSlideSection5) => {
    return (
      <a href={href} onClick={(e) => e.preventDefault()}>
        <Image imgSrc={imgSrc} type='tagImg' />
      </a>
    );
  };

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style} animation={animation} positionAnimation={positionAnimation}>
      <Row>
        <Col cols={[10]} offsets={[1]}>
          {<MainTitle isBuilder={isBuilder} onEditable={onShowPopupEditTitle} darkMode={darkMode} mainTitle={mainTitle ?? ''} colorMainTitle={colorMainTitle} alignMainTitle={alignMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle} />}
          {<Text isBuilder={isBuilder} onEditable={onShowPopupEditText} darkMode={darkMode} text={text ?? ''} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />}
        </Col>
        <div className="slides" onClick={onShowPopupEditSlides}>
          {sliderImgs ? <Carousel
            delayTime={delayTime}
            navClass={navClass}
            dotClass={dotClass}
            fluid={fluid}
            sliderImgs={sliderImgs}
            hasDots={hasDots}
            hasNav={hasNav}
            renderItem={_renderSlide}
            margin={margin} draggable={draggable}
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
