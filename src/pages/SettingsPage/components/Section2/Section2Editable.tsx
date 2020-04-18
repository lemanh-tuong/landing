import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';
import FormCard from '../OtherForm/FormCard/FormCard';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import Section2, { Section2Props } from './Section2';

export interface Section2EditableProps extends Section2Props {
  nowIndexSection: number
};

const Section2Editable: FC<Section2EditableProps> = ({
  nowIndexSection, sectionId,
  mainTitle, alignMainTitle, colorMainTitle,
  cards, backgroundImage }) => {

  const handleShowPopupEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  }
  const handleShowPopupEditCard = () => {
    PopUp.show(`card-${sectionId}`)();
  }

  return (
    <>
      <Section2
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        backgroundImage={backgroundImage?.[0]}
        // backgroundColor={backgroundColor}
        cards={cards ? cards : []}
        isBuilder={true}
        sectionId={sectionId}
        onShowPopupEditTitle={handleShowPopupEditMainTitle}
        onShowPopupEditCard={handleShowPopupEditCard}
      />
      <PopUp id={`mainTitle-${sectionId}`} >
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`card-${sectionId}`} >
        <FormCard nowIndexSection={nowIndexSection} />
      </PopUp>
    </>
  )
}

export default Section2Editable;
