import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';
import Section4, { Section4Props } from '../../../../components/Section4/Section4';
import FormButton from '../OtherForm/FormButton/FormButton';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormImage from '../OtherForm/FormImage/FormImage';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export interface Section4EditableProps extends Section4Props {
  nowIndexSection: number
};

const Section4Editable: FC<Section4EditableProps> = ({ nowIndexSection, sectionId, animation, positionAnimation,
  mainTitle, alignMainTitle, colorMainTitle,
  backgroundButton, colorTextButton, textButton, hrefButton,
  text, alignText, colorText,
  imageSectionCol,
  backgroundImage, backgroundColor }) => {

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  }

  const handleShowPopupEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  }

  const handleShowPopupEditImage = () => {
    PopUp.show(`image-${sectionId}`)();
  }

  const handleShowPopupEditButton = () => {
    PopUp.show(`button-${sectionId}`)();
  }

  return (
    <>
      <Section4
        animation={animation}
        positionAnimation={positionAnimation}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        backgroundButton={backgroundButton}
        hrefButton={hrefButton}
        colorTextButton={colorTextButton}
        textButton={textButton}
        text={text ?? ''}
        alignText={alignText}
        colorText={colorText}
        imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditImage={handleShowPopupEditImage}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditButton={handleShowPopupEditButton}
      />
      <PopUp id={`mainTitle-${sectionId}`} >
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`} >
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button-${sectionId}`} >
        <FormButton nowIndex={nowIndexSection} type='section' />
      </PopUp>
      <PopUp id={`divider-${sectionId}`} >
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`image-${sectionId}`}>
        <FormImage nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} />
      </PopUp>
    </>
  )
}

export default Section4Editable;
