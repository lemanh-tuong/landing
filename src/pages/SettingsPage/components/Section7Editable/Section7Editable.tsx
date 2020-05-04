import PopUp from 'components/PopUp/PopUp';
import Section7, { Section7Props } from 'components/Section7/Section7';
import React, { FC, useState } from 'react';
import FormButton from '../OtherForm/FormButton/FormButton';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormRate from '../OtherForm/FormRate/FormRate';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormText from '../OtherForm/FormText/FormText';

export type Section7EditableProps = {
  nowIndexSection: number;
} & Omit<Section7Props, 'onShowPopupEditTitle' | 'onShowPopUpEditText' | 'onShowPopUpEditRate' | 'onShowPopUpEditButton'>;

// const rateDefault: RateProps = {
//   authorAvatar: {
//     imgSrc: authorAvatar,
//     href: '##'
//   },
//   authorName: 'SergeyX',
//   purpose: 'Feature availability',
//   rateContent: 'Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.',
//   stars: 5,
// }

const Section7Editable: FC<Section7EditableProps> = ({
  nowIndexSection, sectionId,
  isBuilder,
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode,
  mainTitle, alignMainTitle, colorMainTitle, styleMainTitle, classMainTitle, fontSizeMainTitle,
  text, alignText, colorText, styleText, classText, fontSizeText,
  rateList,
  textButton, hrefButton, backgroundButton, colorTextButton, styleButton,
}) => {
  const [indexRate, setIndexRate] = useState(-1);

  const handleAddRate = (nowIndexRate: number) => {
    console.log(nowIndexRate)
  }

  const handleDeleteRate = (nowIndexRate: number) => {
    console.log(nowIndexRate);
  }

  const handleShowPopupEditTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  }

  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  }

  const handleShowPopUpEditRate = (nowIndexRate: number) => {
    setIndexRate(nowIndexRate);
    PopUp.show(`rate-${sectionId}`)();
  }

  const handleShowPopUpEditButton = () => {
    PopUp.show(`button-${sectionId}`)();
  }

  return (
    <div className="Section7Editable">
      <Section7
        darkMode={darkMode}
        isBuilder={isBuilder} sectionId={sectionId}
        onShowPopupEditTitle={handleShowPopupEditTitle}
        onShowPopUpEditText={handleShowPopUpEditText}
        onShowPopUpEditRate={handleShowPopUpEditRate}
        onShowPopUpEditButton={handleShowPopUpEditButton}
        onAddRate={handleAddRate}
        onDeleteRate={handleDeleteRate}
        animation={animation}
        positionAnimation={positionAnimation}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        fontSizeMainTitle={fontSizeMainTitle}
        classMainTitle={classMainTitle}
        styleMainTitle={styleMainTitle}
        text={text}
        alignText={alignText}
        colorText={colorText}
        fontSizeText={fontSizeText}
        styleText={styleText}
        classText={classText}
        rateList={rateList}
        backgroundButton={backgroundButton}
        colorTextButton={colorTextButton}
        hrefButton={hrefButton}
        textButton={textButton}
        styleButton={styleButton}
      />
      <PopUp id={`mainTitle-${sectionId}`}>
        <FormMainTitle nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`text-${sectionId}`}>
        <FormText nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`rate-${sectionId}`}>
        <FormRate nowIndexSection={nowIndexSection} nowIndexRate={indexRate} />
      </PopUp>
      <PopUp id={`button-${sectionId}`}>
        <FormButton nowIndex={nowIndexSection} type='section' />
      </PopUp>
      <PopUp id={`section-${sectionId}`}>
        <FormSection nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  )
}

export default Section7Editable;
