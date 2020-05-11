import PopUp from 'components/PopUp/PopUp';
import Section11, { Section11Props } from 'components/Section11/Section11';
import React, { FC } from 'react';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormIcon from '../OtherForm/FormIcon/FormIcon';
import FormImage from '../OtherForm/FormImage/FormImage';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export type Section11EditableProps = {
  nowIndexSection: number;
} & Section11Props;

const Section11Editable: FC<Section11EditableProps> = ({
  nowIndexSection,
  sectionId,
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode, reverse,
  imageSectionCol,
  iconImg,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  hasDivider = false, dividerColor,
  text, alignText, colorText, fontSizeText, classText, styleText,
}) => {

  const handleShowPopUpEditImage = () => {
    PopUp.show(`image-${sectionId}`)();
  };

  const handleShowPopUpEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };
  const handleShowPopUpEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  };

  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };

  const handleShowPopUpEditIcon = () => {
    PopUp.show(`icon-${sectionId}`)();
  };

  return (
    <div className="Section11Editable">
      <Section11
        sectionId={sectionId}
        isBuilder={true} onShowPopupEditMainTitle={handleShowPopUpEditMainTitle}
        onShowPopupEditText={handleShowPopUpEditText} onShowPopupEditDivider={handleShowPopUpEditDivider} onShowPopupEditImage={handleShowPopUpEditImage} onShowPopupEditIcon={handleShowPopUpEditIcon}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
        hasDivider={hasDivider} dividerColor={dividerColor}
        imageSectionCol={imageSectionCol}
        text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
        reverse={reverse} iconImg={iconImg}
      />
      <PopUp id={`section-${sectionId}`}>
        <FormSection canReverseCol={true} nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`image-${sectionId}`}>
        <FormImage nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`mainTitle-${sectionId}`}>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`}>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`}>
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`icon-${sectionId}`}>
        <FormIcon nowIndexSection={nowIndexSection} />
      </PopUp>

    </div>
  );
};

export default Section11Editable;
