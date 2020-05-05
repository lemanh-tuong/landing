import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Section3, { Section3Props } from 'components/Section3/Section3';
import React, { FC } from 'react';
import styles from './Section12.module.scss';

export type Section12Props = {
  sliderSection: Section3Props[];
  sectionId: string;
  darkMode?: boolean;
  isBuilder?: boolean;
  onShowPopUpEditSlide?: () => void;
} & SectionPatternBase
  & Omit<CarouselProps<Section3Props>, 'sliderImgs'>;

const Section12: FC<Section12Props> = ({
  animation, backgroundColor, positionAnimation, backgroundImage,
  sliderSection, itemShow = 1, fluid, margin = 0, hasNav, dotClass, navClass, isBuilder, onShowPopUpEditSlide
}) => {

  const _renderSlide = (slideProperty: Section3Props) => {
    return (
      <Section3 {...slideProperty} />
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
        isBuilder={isBuilder}
        onEditable={onShowPopUpEditSlide}
      />
    </Section>
  );
};

export default Section12;
