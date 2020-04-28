import PopUp from 'components/PopUp/PopUp';
import Section8, { Section8Props } from 'components/Section8/Section8';
import React, { FC, useState } from 'react';
import FormButton from '../OtherForm/FormButton/FormButton';
import FormCard2 from '../OtherForm/FormCard2/FormCard2';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export type Section8EditableProps = {
  sectionId: string;
  nowIndexSection: number;
} & Section8Props;

const Section8Editable: FC<Section8EditableProps> = ({
  sectionId,
  animation, positionAnimation, backgroundColor, backgroundImage,
  isBuilder,
  card2s,
  mainTitle, alignMainTitle, colorMainTitle, classMainTitle, fontSizeMainTitle, styleMainTitle,
  hasDivider, dividerColor,
  text, colorText, fontSizeText, alignText, classText, styleText,
  hrefButton, backgroundButton, colorTextButton, textButton, styleButton, darkMode, nowIndexSection
}) => {
  const [indexCard, setIndexCard] = useState(-1);

  const handleShowPopUpEditButton = () => {
    PopUp.show(`button-${sectionId}`)();
  }
  const handleShowPopUpEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  }
  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  }
  const handleShowPopUpEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  }
  const handleShowPopupEditCard = (nowIndexCard: number) => {
    setIndexCard(nowIndexCard);
    PopUp.show(`card-${sectionId}`)();
  }

  return (
    <div className='Section8Editable'>
      <Section8
        sectionId={sectionId}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        isBuilder={isBuilder} onShowPopupEditButton={handleShowPopUpEditButton} onShowPopupEditMainTitle={handleShowPopUpEditMainTitle}
        onShowPopupEditText={handleShowPopUpEditText} onShowPopupEditDivider={handleShowPopUpEditDivider} onShowPopupEditCard={handleShowPopupEditCard}
        card2s={card2s}
        mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} fontSizeMainTitle={fontSizeMainTitle}
        hasDivider={hasDivider} dividerColor={dividerColor}
        text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
        textButton={textButton} colorTextButton={colorTextButton} backgroundButton={backgroundButton} hrefButton={hrefButton} styleButton={styleButton}
      />
      <PopUp id={`mainTitle-${sectionId}`}>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`}>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`}>
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button-${sectionId}`}>
        <FormButton nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`card-${sectionId}`}>
        <FormCard2 nowIndexSection={nowIndexSection} indexCard={indexCard} />
      </PopUp>
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  )
}

export default Section8Editable;
