import PopUp from 'components/PopUp/PopUp';
import Section5, { Section5Props } from 'components/Section5/Section5';
import React, { FC } from 'react';
import FormButton from '../OtherForm/FormButton/FormButton';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import { FormSlides } from '../OtherForm/FormSlides/FormSlides';
import FormText from '../OtherForm/FormText/FormText';

export interface Section5EditableProps extends Section5Props {
  nowIndexSection: number;
}

const Section5Editable: FC<Section5EditableProps> = ({ nowIndexSection, sectionId, animation, positionAnimation,
  mainTitle, alignMainTitle, colorMainTitle,
  text, alignText, colorText,
  sliderImgs, hasNav, navClass, hasDots, dotClass, fluid, margin, itemShow,
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
        colorMainTitle={colorMainTitle}
        text={text ?? ''}
        alignText={alignText}
        colorText={colorText}
        sliderImgs={sliderImgs}
        hasNav={hasNav}
        hasDots={hasDots}
        navClass={navClass}
        dotClass={dotClass}
        fluid={fluid}
        margin={margin}
        itemShow={itemShow}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditSlides={handleShowPopupEditSlides}
      />
      <PopUp id={`mainTitle-${sectionId}`} >
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`} >
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button-${sectionId}`} >
        <FormButton nowIndex={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`} >
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`slides-${sectionId}`}>
        <FormSlides nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} />
      </PopUp>
    </>
  );
};

export default Section5Editable;
