import PopUp from 'components/PopUp/PopUp';
import Section5, { Section5Props } from 'components/Section5/Section5';
import React, { FC } from 'react';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import { FormSlides } from '../OtherForm/FormSlides/FormSlides';
import FormText from '../OtherForm/FormText/FormText';

export interface Section5EditableProps extends Section5Props {
  nowIndexSection: number;
}

const Section5Editable: FC<Section5EditableProps> = ({ nowIndexSection, sectionId, animation, positionAnimation,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle,
  text, alignText, colorText, fontSizeText,
  sliderImgs, hasNav, navClass, hasDots, dotClass, fluid, margin, itemShow, responsive, draggable, delayTime,
  backgroundImage, backgroundColor }) => {

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };

  const handleShowPopupEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };

  const handleShowPopupEditSlides = () => {
    PopUp.show(`slides-${sectionId}`)();
  };

  return (
    <>
      <Section5
        animation={animation}
        positionAnimation={positionAnimation}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle}
        text={text ?? ''}
        colorText={colorText} fontSizeText={fontSizeText}
        alignText={alignText} delayTime={delayTime}
        sliderImgs={sliderImgs}
        hasNav={hasNav}
        hasDots={hasDots}
        navClass={navClass}
        dotClass={dotClass}
        fluid={fluid}
        margin={margin} responsive={responsive}
        itemShow={itemShow} draggable={draggable}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditSlides={handleShowPopupEditSlides}
      />
      <FormMainTitle nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormText nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <PopUp id={`slides-${sectionId}`} type='antd' title={<h3>Form Slides</h3>}>
        <FormSlides hasFluidField={true} hasMarginField={true} hasItemShowField={true} nowIndexSection={nowIndexSection} draggableField={true} hasNavField={true} hasDotField={true} responsiveField={true} />
      </PopUp>
      <FormSection nowIndexSection={nowIndexSection} canReverseCol={false} sectionId={sectionId} />
    </>
  );
};

export default Section5Editable;
