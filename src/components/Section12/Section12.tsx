import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Section3, { Section3Props } from 'components/Section3/Section3';
import React, { FC } from 'react';
import styles from './Section12.module.scss';

export type Section12Props = {
  sliderSection: Section3Props[];
  sectionId: string;
  darkMode?: boolean;
} & SectionPatternBase
  & Omit<CarouselProps<Section3Props>, 'isBuilder' | 'onEditable' | 'sliderImgs'>;

export interface Section12PropsBuilder {
  isBuilder?: boolean;
  onShowPopUpEditSlide?: () => void;
}

const Section12: FC<Section12Props & Section12PropsBuilder> = ({
  animation, backgroundColor, positionAnimation, backgroundImage,
  sliderSection, itemShow = 1, fluid, margin = 0, hasNav, dotClass, navClass, draggable, isBuilder, onShowPopUpEditSlide
}) => {
  const _renderSlide = (slideProperty: Section3Props) => {
    return (
      <Section3 backgroundColor={'transparent'} fontSizeMainTitle="lg" {...slideProperty} />
    );
  };

  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      animation={animation}
      positionAnimation={positionAnimation}
    >
      <Carousel
        sliderImgs={sliderSection}
        renderItem={slideProperty => _renderSlide(slideProperty)}
        itemShow={itemShow} fluid={fluid}
        dotClass={`${dotClass} ${styles.dot}`} hasDots={true}
        classActive={styles.active}
        navClass={navClass} hasNav={hasNav} margin={margin}
        isBuilder={isBuilder} draggable={draggable}
        onEditable={onShowPopUpEditSlide}
      />
    </Section>
  );
};

export default Section12;
