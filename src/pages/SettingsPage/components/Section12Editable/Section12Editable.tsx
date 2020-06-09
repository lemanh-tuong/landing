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
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode, draggable, delayTime,
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
        hasDots={hasDots} hasNav={hasNav} classActive={classActive} dotClass={dotClass} navClass={navClass} draggable={draggable} delayTime={delayTime}
        sectionId={sectionId}
        animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        onShowPopUpEditSlide={handleShowPopUpEditSlides}
      />
      <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} sectionId={sectionId} />
      <PopUp id={`slides-${sectionId}`} type='antd' title={<h3>Form Slide Section</h3>}>
        <FormSlides2 nowIndexSection={nowIndexSection} draggableField={true} />
      </PopUp>
    </div>
  );
};

export default Section12Editable;
