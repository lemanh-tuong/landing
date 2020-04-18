import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';
import FormButton from '../OtherForm/FormButton/FormButton';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import { FormMockUp } from '../OtherForm/FormMockup/FormMockup';
import FormText from '../OtherForm/FormText/FormText';
import Section1, { Section1Props } from './Section1';

export interface Section1EditableProps extends Section1Props {
};

const Section1Editable: FC<Section1EditableProps & { nowIndexSection: number }> = ({
  nowIndexSection, sectionId,
  mainTitle, alignMainTitle, colorMainTitle,
  text, alignText, colorText,
  sliderImgs, backgroundImage,
  textButton, styleButton, hrefButton,
}) => {

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  }

  const handleShowPopupEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  }

  const handleShowPopupEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  }

  const handleShowPopupButton = () => {
    PopUp.show(`button-${sectionId}`)();
  }

  const handleShowPopupEditMockUp = () => {
    PopUp.show(`mockup-${sectionId}`)();
  }

  return (
    <>
      <Section1
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        text={text ?? ''}
        alignText={alignText}
        colorText={colorText}
        fontSizeText='sm'
        backgroundColor="gradient-orange-pink"
        backgroundImage={backgroundImage}
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
        <FormButton nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`}>
        Form divider Here
      </PopUp>
      <PopUp id={`mockup-${sectionId}`}>
        <FormMockUp
          nowIndexSection={nowIndexSection}
        />
      </PopUp>
    </>
  )
}

export default Section1Editable;
