import PopUp from 'components/PopUp/PopUp';
import Section10, { Section10Props } from 'components/Section10/Section10';
import React, { FC } from 'react';
import FormButton from '../OtherForm/FormButton/FormButton';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormImage from '../OtherForm/FormImage/FormImage';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export type Section10EditableProps = {
  nowIndexSection: number;
} & Section10Props;

const Section10Editable: FC<Section10EditableProps> = ({
  nowIndexSection,
  animation, positionAnimation, backgroundColor, backgroundImage, style, className, darkMode,
  isBuilder, sectionId,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  hasDivider, dividerColor,
  imageSectionCol,
  backgroundButton, hrefButton, colorTextButton, textButton, styleButton,
  text, colorText, alignText, fontSizeText, styleText, classText,
}) => {

  const handleShowPopUpEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)()
  }

  const handleShowPopUpEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)()
  }

  const handleShowPopUpEditImage = () => {
    PopUp.show(`image-${sectionId}`)()
  }

  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)()
  }

  const handleShowPopUpEditButton = () => {
    PopUp.show(`button-${sectionId}`)()
  }

  return (
    <div className='Section10Editable'>
      <Section10
        sectionId={sectionId}
        isBuilder={isBuilder} onShowPopupEditButton={handleShowPopUpEditButton} onShowPopupEditMainTitle={handleShowPopUpEditMainTitle}
        onShowPopupEditText={handleShowPopUpEditText} onShowPopupEditDivider={handleShowPopUpEditDivider} onShowPopupEditImage={handleShowPopUpEditImage}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
        hasDivider={hasDivider} dividerColor={dividerColor}
        imageSectionCol={imageSectionCol}
        text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
        textButton={textButton} colorTextButton={colorTextButton} backgroundButton={backgroundButton} hrefButton={hrefButton} styleButton={styleButton}
      />
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`mainTitle-${sectionId}`}>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`}>
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`image-${sectionId}`}>
        <FormImage nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`}>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button-${sectionId}`}>
        <FormButton nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  )
}

export default Section10Editable
