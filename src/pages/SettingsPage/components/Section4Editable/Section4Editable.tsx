import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';
import Section4, { Section4Props } from '../../../../components/Section4/Section4';
import FormButton from '../OtherForm/FormButton/FormButton';
import FormImage from '../OtherForm/FormImage/FormImage';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export interface Section4EditableProps extends Section4Props {
  nowIndexSection: number;
}

const Section4Editable: FC<Section4EditableProps> = ({ nowIndexSection, sectionId, animation, positionAnimation,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle,
  backgroundButton, colorTextButton, textButton, hrefButton, typeButton, sizeButton,
  imageSectionCol,
  text, alignText, colorText, fontSizeText,
  backgroundImage, backgroundColor }) => {

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };

  const handleShowPopupEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };

  const handleShowPopupEditImage = () => {
    PopUp.show(`image-${sectionId}`)();
  };

  const handleShowPopupEditButton = () => {
    PopUp.show(`button-${sectionId}`)();
  };

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
        fontSizeMainTitle={fontSizeMainTitle}
        backgroundButton={backgroundButton}
        hrefButton={hrefButton}
        colorTextButton={colorTextButton}
        typeButton={typeButton} sizeButton={sizeButton}
        textButton={textButton}
        text={text ?? ''}
        alignText={alignText}
        colorText={colorText} fontSizeText={fontSizeText}
        imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditImage={handleShowPopupEditImage}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditButton={handleShowPopupEditButton}
      />
      <FormMainTitle nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormText nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormButton nowIndex={nowIndexSection} />
      <FormImage nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormSection nowIndexSection={nowIndexSection} canReverseCol={false} sectionId={sectionId} />
    </>
  );
};

export default Section4Editable;
