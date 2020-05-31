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
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle,
  hasDivider, dividerColor, alignDivider,
  text, alignText, colorText, fontSizeText,
  sliderImgs,
  textButton, styleButton, hrefButton, backgroundButton, colorTextButton, typeButton, sizeButton,
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
        fontSizeMainTitle={fontSizeMainTitle}
        hasDivider={hasDivider}
        alignDivider={alignDivider}
        dividerColor={dividerColor}
        text={text ?? ''}
        alignText={alignText}
        colorText={colorText}
        fontSizeText={fontSizeText}
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
        typeButton={typeButton} sizeButton={sizeButton}
        isBuilder={true}
        sectionId={sectionId}
        isBuider={true}
        onShowPopupEditMainTitle={handleShowPopupEditMainTitle}
        onShowPopupEditButton={handleShowPopupButton}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditDivider={handleShowPopupEditDivider}
        onShowPopupEditMockUp={handleShowPopupEditMockUp}
      />
      <FormMainTitle nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormText nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormButton nowIndex={nowIndexSection} />
      <FormDivider nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <PopUp id={`mockup-${sectionId}`} type='antd' title={<h3>Form Mock Up</h3>}>
        <FormMockUp draggableField={false} nowIndexSection={nowIndexSection} />
      </PopUp>
      <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} sectionId={sectionId} />
    </>
  );
};

export default Section1Editable;
