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
  nowIndexSection: number;
  sectionId: string;
} & Section8Props;

const Section8Editable: FC<Section8EditableProps> = ({
  sectionId,
  animation, positionAnimation, backgroundColor, backgroundImage, reverse,
  card2s,
  mainTitle, alignMainTitle, colorMainTitle, classMainTitle, fontSizeMainTitle, styleMainTitle,
  hasDivider, dividerColor, alignDivider,
  text, colorText, fontSizeText, alignText, classText, styleText,
  hrefButton, backgroundButton, colorTextButton, textButton, styleButton, typeButton, sizeButton, darkMode, nowIndexSection
}) => {
  const [indexCard, setIndexCard] = useState(-1);

  const handleShowPopUpEditButton = () => {
    PopUp.show(`button-${sectionId}`)();
  };
  const handleShowPopUpEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };
  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };
  const handleShowPopUpEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  };
  const handleShowPopupEditCard = (nowIndexCard: number) => {
    setIndexCard(nowIndexCard);
    PopUp.show(`card-${sectionId}`)();
  };

  return (
    <div className='Section8Editable'>
      <Section8
        sectionId={sectionId} sizeButton={sizeButton}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        reverse={reverse}
        isBuilder={true} onShowPopupEditButton={handleShowPopUpEditButton} onShowPopupEditMainTitle={handleShowPopUpEditMainTitle}
        onShowPopupEditText={handleShowPopUpEditText} onShowPopupEditDivider={handleShowPopUpEditDivider} onShowPopupEditCard={handleShowPopupEditCard}
        card2s={card2s}
        mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} fontSizeMainTitle={fontSizeMainTitle}
        hasDivider={hasDivider} dividerColor={dividerColor} alignDivider={alignDivider}
        text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
        textButton={textButton} typeButton={typeButton} colorTextButton={colorTextButton} backgroundButton={backgroundButton} hrefButton={hrefButton} styleButton={styleButton}
      />
      <PopUp id={`mainTitle-${sectionId}`} type='antd'>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`} type='antd'>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`divider-${sectionId}`} type='antd'>
        <FormDivider nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`button-${sectionId}`}>
        <FormButton nowIndex={nowIndexSection} />
      </PopUp>
      <PopUp id={`card-${sectionId}`}>
        <FormCard2 nowIndexSection={nowIndexSection} indexCard={indexCard} />
      </PopUp>
      <PopUp id={`section-${sectionId}`} type='antd'>
        <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} />
      </PopUp>
    </div>
  );
};

export default Section8Editable;
