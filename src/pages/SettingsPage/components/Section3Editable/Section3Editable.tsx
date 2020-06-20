import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';
import Section3, { Section3Props } from '../../../../components/Section3/Section3';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormImage from '../OtherForm/FormImage/FormImage';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export interface Section3EditableProps extends Section3Props {
  nowIndexSection: number;
}

const Section3Editable: FC<Section3EditableProps> = ({
  nowIndexSection,
  sectionId,
  animation,
  positionAnimation,
  reverse,
  mainTitle,
  alignMainTitle,
  colorMainTitle,
  classMainTitle,
  fontSizeMainTitle,
  styleMainTitle,
  text,
  alignText,
  colorText,
  classText,
  fontSizeText,
  styleText,
  imageSectionCol,
  hasDivider,
  dividerColor,
  alignDivider,
  backgroundImage,
  backgroundColor,
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

  const handleShowPopupEditImage = () => {
    PopUp.show(`image-${sectionId}`)();
  };

  return (
    <>
      <Section3
        animation={animation}
        positionAnimation={positionAnimation}
        reverse={reverse}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        classMainTitle={classMainTitle}
        fontSizeMainTitle={fontSizeMainTitle}
        styleMainTitle={styleMainTitle}
        text={text}
        alignText={alignText}
        colorText={colorText}
        classText={classText}
        fontSizeText={fontSizeText}
        styleText={styleText}
        hasDivider={hasDivider}
        alignDivider={alignDivider}
        dividerColor={dividerColor ?? '#f06292'}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditDivider={handleShowPopupEditDivider}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditText={handleShowPopupEditText}
        onShowPopupEditImage={handleShowPopupEditImage}
      />
      <FormMainTitle nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormText nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormDivider nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormImage nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormSection canReverseCol={true} nowIndexSection={nowIndexSection} sectionId={sectionId} />
    </>
  );
};

export default Section3Editable;
