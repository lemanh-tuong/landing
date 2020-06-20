import PopUp from 'components/PopUp/PopUp';
import Section9, { Secction9Props } from 'components/Section9/Section9';
import React, { FC, useState } from 'react';
import FormButton2 from '../OtherForm/FormButton2/FormButton2';
import { FormDivider } from '../OtherForm/FormDivider/FormDivider';
import FormMainTitle from '../OtherForm/FormMainTitle/FormMainTitle';
import FormSection from '../OtherForm/FormSection/FormSection';
import FormAndroidSimulator from '../OtherForm/FormSimulator/FormAndroidSimulator';
import FormIphoneSimulator from '../OtherForm/FormSimulator/FormIphoneSimulator';
import FormText from '../OtherForm/FormText/FormText';

export type Section9EditableProps = {
  nowIndexSection: number;
} & Secction9Props;

const Section9Editable: FC<Section9EditableProps> = ({
  nowIndexSection,
  animation,
  positionAnimation,
  backgroundColor,
  backgroundImage,
  sectionId,
  reverse,
  mainTitle,
  alignMainTitle,
  colorMainTitle,
  fontSizeMainTitle,
  classMainTitle,
  styleMainTitle,
  hasDivider,
  dividerColor,
  alignDivider,
  text,
  alignText,
  colorText,
  fontSizeText,
  classText,
  styleText,
  iphoneParams,
  androidParams,
  buttons,
}) => {
  const [indexButton, setIndexButton] = useState(-1);

  const handleShowPopUpEditMainTitle = () => {
    PopUp.show(`mainTitle-${sectionId}`)();
  };
  const handleShowPopUpEditText = () => {
    PopUp.show(`text-${sectionId}`)();
  };
  const handleShowPopUpEditDivider = () => {
    PopUp.show(`divider-${sectionId}`)();
  };
  const handleShowPopUpEditIphoneSimulator = () => {
    PopUp.show(`simulator-iphone-${sectionId}`)();
  };
  const handleShowPopUpEditAndroidSimulator = () => {
    PopUp.show(`simulator-android-${sectionId}`)();
  };

  const handleShowPopupEditButton = (nowIndexButton: number) => {
    setIndexButton(nowIndexButton);
    PopUp.show(`button2-${sectionId}`)();
  };

  return (
    <div className="Section9Editable">
      <Section9
        animation={animation}
        positionAnimation={positionAnimation}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        sectionId={sectionId}
        reverse={reverse}
        isBuilder={true}
        onShowPopupEditButton={handleShowPopupEditButton}
        onShowPopupEditMainTitle={handleShowPopUpEditMainTitle}
        onShowPopupEditText={handleShowPopUpEditText}
        onShowPopupEditDivider={handleShowPopUpEditDivider}
        onShowPopupEditIphoneSimulator={handleShowPopUpEditIphoneSimulator}
        onShowPopupEditAndroidSimulator={handleShowPopUpEditAndroidSimulator}
        mainTitle={mainTitle}
        alignMainTitle={alignMainTitle}
        colorMainTitle={colorMainTitle}
        fontSizeMainTitle={fontSizeMainTitle}
        classMainTitle={classMainTitle}
        styleMainTitle={styleMainTitle}
        hasDivider={hasDivider}
        dividerColor={dividerColor}
        alignDivider={alignDivider}
        text={text}
        alignText={alignText}
        colorText={colorText}
        classText={classText}
        styleText={styleText}
        fontSizeText={fontSizeText}
        buttons={buttons}
        iphoneParams={iphoneParams}
        androidParams={androidParams}
      />
      <FormSection nowIndexSection={nowIndexSection} canReverseCol={true} sectionId={sectionId} />
      <FormMainTitle nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormDivider nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <FormText nowIndexSection={nowIndexSection} sectionId={sectionId} />
      <PopUp id={`button2-${sectionId}`} type="antd" title={<h3>Form Button 2</h3>}>
        <FormButton2 nowIndexButton={indexButton} nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`simulator-iphone-${sectionId}`} type="antd" title={<h3>Iphone Simulator</h3>}>
        <FormIphoneSimulator nowIndexSection={nowIndexSection} />
      </PopUp>
      <PopUp id={`simulator-android-${sectionId}`} type="antd" title={<h3>Android Simulator</h3>}>
        <FormAndroidSimulator nowIndexSection={nowIndexSection} />
      </PopUp>
    </div>
  );
};

export default Section9Editable;
