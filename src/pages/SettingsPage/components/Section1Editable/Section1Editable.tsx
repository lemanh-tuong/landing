import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';
import Section1, { Section1Props } from '../../../../components/Section1/Section1';
import FormButton from '../OtherForm/FormButton/FormButton';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import { FormMockUp } from '../OtherForm/FormMockup/FormMockup';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export interface Section1EditableProps extends Section1Props {
}

const Section1Editable: FC<Section1EditableProps & { nowIndexSection: number }> = ({
  nowIndexSection, sectionId, backgroundColor, backgroundImage, animation, positionAnimation, reverse,
  mainTitle, alignMainTitle, colorMainTitle,
  hasDivider, dividerColor,
  text, alignText, colorText,
  sliderImgs,
  textButton, styleButton, hrefButton, backgroundButton, colorTextButton, typeButton,
  typeMockUp
}) => {

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };

  const handleShowPopupEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };

  const handleShowPopupEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  };

  const handleShowPopupButton = () => {
    PopUp.show(`button-${sectionId}`)();
  };

  const handleShowPopupEditMockUp = () => {
    PopUp.show(`mockup-${sectionId}`)();
  };

  return (
    <>
      <Section1
        animation={animation} reverse={reverse}
        positionAnimation={positionAnimation}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        hasDivider={hasDivider}
        dividerColor={dividerColor}
        text={text ?? ''}
        alignText={alignText}
        colorText={colorText}
        fontSizeText='sm'
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        typeMockUp={typeMockUp}
        sliderImgs={sliderImgs || [
          {
            imgSrc: mockUpMacContent1,
            hasVideo: true,
            videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
          },
          {
            imgSrc: mockUpMacContent2,
            hasVideo: true,
            videoUrl: 'https://www.youtube.com/'
          }
        ]}
        margin={0}
        textButton={textButton}
        styleButton={styleButton}
        hrefButton={hrefButton}
        backgroundButton={backgroundButton}
        colorTextButton={colorTextButton}
        typeButton={typeButton}
        isBuilder={true}
        sectionId={sectionId}
        isBuider={true}
        onShowPopupEditMainTitle={handleShowPopupEditMainTitle}
        onShowPopupEditButton={handleShowPopupButton}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditDivider={handleShowPopupEditDivider}
        onShowPopupEditMockUp={handleShowPopupEditMockUp}
      />
      <PopUp id={`mainTitle-${sectionId}`}>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`}>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button-${sectionId}`}>
        <FormButton nowIndex={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`}>
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`mockup-${sectionId}`}>
        <FormMockUp nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} />
      </PopUp>
    </>
  );
};

export default Section1Editable;
