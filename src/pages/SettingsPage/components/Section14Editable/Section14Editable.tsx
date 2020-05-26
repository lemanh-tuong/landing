import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import PopUp from 'components/PopUp/PopUp';
import Section14, { Section14Props } from 'components/Section14/Section14';
import React, { FC, useState } from 'react';
import FormButton2 from '../OtherForm/FormButton2/FormButton2';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import { FormMockUp } from '../OtherForm/FormMockup/FormMockup';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export interface Section14EditableProps extends Section14Props {
  nowIndexSection: number;
}

const Section14Editable: FC<Section14EditableProps> = ({
  nowIndexSection, sectionId, backgroundColor, backgroundImage, animation, positionAnimation, reverse,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle,
  hasDivider, dividerColor, alignDivider,
  text, alignText, colorText, fontSizeText,
  sliderImgs,
  buttons,
  typeMockUp
}) => {

  const [indexButton, setIndexButton] = useState(-1);

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };

  const handleShowPopupEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };

  const handleShowPopupEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  };

  const handleShowPopupEditButton = (nowIndexButton: number) => {
    setIndexButton(nowIndexButton);
    PopUp.show(`button2-${sectionId}`)();
  };

  const handleShowPopupEditMockUp = () => {
    PopUp.show(`mockup-${sectionId}`)();
  };

  return (
    <>
      <Section14
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
        isBuilder={true}
        sectionId={sectionId}
        isBuider={true}
        buttons={buttons}
        onShowPopupEditMainTitle={handleShowPopupEditMainTitle}
        onShowPopupEditButton={handleShowPopupEditButton}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditDivider={handleShowPopupEditDivider}
        onShowPopupEditMockUp={handleShowPopupEditMockUp}
      />
      <PopUp id={`mainTitle-${sectionId}`} type='antd'>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`} type='antd'>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button2-${sectionId}`}>
        <FormButton2 nowIndexButton={indexButton} nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`} type='antd'>
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`mockup-${sectionId}`}>
        <FormMockUp draggableField={false} nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`section-${sectionId}`} type='antd'>
        <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} />
      </PopUp>
    </>
  );
};

export default Section14Editable;
