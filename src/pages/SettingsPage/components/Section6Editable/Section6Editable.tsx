import PopUp from 'components/PopUp/PopUp';
import Section6, { Section6Props } from 'components/Section6/Section6';
import React, { FC } from 'react';
import FormButton from '../OtherForm/FormButton/FormButton';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';

export interface Section6EditableProps {
  nowIndexSection: number;
}

const Section6Editable: FC<Section6EditableProps & Section6Props> = ({
  nowIndexSection,
  sectionId,
  darkMode,
  backgroundColor,
  backgroundImage,
  animation,
  positionAnimation,
  mainTitle,
  colorMainTitle,
  alignMainTitle,
  classMainTitle,
  styleMainTitle,
  fontSizeMainTitle,
  textButton,
  hrefButton,
  styleButton,
  backgroundButton,
  colorTextButton,
  typeButton,
  sizeButton,
}) => {
  const handleShowPopupEditButton = () => {
    PopUp.show(`button-${sectionId}`)();
  };

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };

  return (
    <>
      <Section6
        typeButton={typeButton}
        sizeButton={sizeButton}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        animation={animation}
        positionAnimation={positionAnimation}
        isBuilder={true}
        mainTitle={mainTitle}
        colorMainTitle={colorMainTitle}
        alignMainTitle={alignMainTitle}
        classMainTitle={classMainTitle}
        styleMainTitle={styleMainTitle}
        fontSizeMainTitle={fontSizeMainTitle}
        textButton={textButton}
        hrefButton={hrefButton}
        colorTextButton={colorTextButton}
        styleButton={styleButton}
        backgroundButton={backgroundButton}
        sectionId={sectionId}
        darkMode={darkMode}
        onShowPopupEditButton={handleShowPopupEditButton}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
      />
      <FormButton nowIndex={nowIndexSection} />
      <FormMainTitle nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormSection nowIndexSection={nowIndexSection} sectionId={sectionId} />
    </>
  );
};

export default Section6Editable;
