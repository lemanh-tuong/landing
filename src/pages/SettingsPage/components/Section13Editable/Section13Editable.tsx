import PopUp from 'components/PopUp/PopUp';
import Section13, { Section13Props } from 'components/Section13/Section13';
import React, { FC } from 'react';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import { FormMockUp } from '../OtherForm/FormMockup/FormMockup';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export type Section13EditableProps = {
  nowIndexSection: number;
} & Section13Props;

const Section13Editable: FC<Section13EditableProps> = ({
  nowIndexSection,
  sectionId,
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  text, alignText, colorText, fontSizeText, classText, styleText,
  sliderImgs, typeMockUp, fluid, margin, hasDots, dotClass, classActive, navClass, hasNav
}) => {

  const handleShowPopUpEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };
  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };
  const handleShowPopUpEditMockUp = () => {
    PopUp.show(`mockup-${sectionId}`)();
  };

  return (
    <div className="Section13Editable">
      <Section13
        isBuilder={true} onShowPopupEditMainTitle={handleShowPopUpEditMainTitle} onShowPopupEditText={handleShowPopUpEditText} onShowPopupEditMockUp={handleShowPopUpEditMockUp}
        sectionId={sectionId}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        typeMockUp={typeMockUp}
        sliderImgs={sliderImgs} fluid={fluid} margin={margin} classActive={classActive} navClass={navClass} hasNav={hasNav} hasDots={hasDots} dotClass={dotClass}
        mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
        text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
      />
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} canReverseCol={false} />
      </PopUp>
      <PopUp id={`mainTitle-${sectionId}`}>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`}>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`mockup-${sectionId}`}>
        <FormMockUp nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  );
};

export default Section13Editable;
