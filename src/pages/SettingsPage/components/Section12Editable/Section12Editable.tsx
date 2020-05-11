import PopUp from 'components/PopUp/PopUp';
import Section12, { Section12Props } from 'components/Section12/Section12';
import React, { FC } from 'react';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormSlides2 from '../OtherForm/FormSlides2/FormSlides2';

export type Section12EditableProps = {
  nowIndexSection: number;
} & Section12Props;

const Section12Editable: FC<Section12EditableProps> = ({
  nowIndexSection,
  sectionId,
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode,
  sliderSection, fluid, margin, itemShow, hasDots, hasNav, navClass, dotClass, classActive
}) => {

  const handleShowPopUpEditSlides = () => {
    PopUp.show(`slides-${sectionId}`)();
  };

  return (
    <div className="section12Editable" style={{ position: 'relative' }}>
      <Section12
        isBuilder={true}
        sliderSection={sliderSection}
        fluid={fluid} itemShow={itemShow} margin={margin}
        hasDots={hasDots} hasNav={hasNav} classActive={classActive} dotClass={dotClass} navClass={navClass}
        sectionId={sectionId}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        onShowPopUpEditSlide={handleShowPopUpEditSlides}
      />
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} />
      </PopUp>
      <PopUp id={`slides-${sectionId}`}>
        <FormSlides2 nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  );
};

export default Section12Editable;
