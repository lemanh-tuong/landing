import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import React, { Fragment } from 'react';
import { Option } from '../../SettingsPage';
import Section1Editable from '../Section1/Section1Editable';
import Section2Editable from '../Section2/Section2Editable';
import Section3Editable from '../Section3/Section3Editable';
import Section4Editable from '../Section4/Section4Editable';

// const RenderSection = ({ sectionName, mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
//   text, alignText, colorText, fontSizeText, classText, styleText, darkMode
// }: Option) => {

export interface RenderSectionArg {
  option: Option,
  nowIndexSecion: number;
  isBuilder?: boolean
}

const RenderSection = ({ option, nowIndexSecion, isBuilder }: RenderSectionArg) => {
  const {
    sectionName, sectionId,
    mainTitle, alignMainTitle, colorMainTitle,
    text, alignText, colorText,
    imageSectionCol,
    cards, slider, hasDivider, dividerColor, sliderImgs, backgroundImage,
    textButton, styleButton, hrefButton,
  } = option;
  const _renderContent = () => {
    switch (sectionName) {
      case 'Section 1':
        return <Section1Editable
          nowIndexSection={nowIndexSecion}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          fontSizeText='sm'
          backgroundColor="gradient-orange-pink"
          backgroundImage={backgroundImage}
          slider={slider}
          sliderImgs={sliderImgs || [
            {
              imgSrc: mockUpMacContent1,
              hasVideo: true,
              videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
            },
            {
              imgSrc: mockUpMacContent2,
              hasVideo: true,
              videoUrl: 'https://www.youtube.com/'
            }
          ]}
          margin={0}
          textButton={textButton}
          styleButton={styleButton}
          hrefButton={hrefButton}
          isBuilder={isBuilder}
          sectionId={sectionId}
        />;
      case 'Section 2':
        return <Section2Editable
          nowIndexSection={nowIndexSecion}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          backgroundImage={backgroundImage?.[0]}
          // backgroundColor={backgroundColor}
          cards={cards ? cards : []}
          isBuilder={isBuilder}
          sectionId={sectionId}
        />;
      case 'Section 3':
        return <Section3Editable
          nowIndexSection={nowIndexSecion}
          backgroundImage={backgroundImage?.[0]}
          // backgroundColor={backgroundColor}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          text={text}
          alignText={alignText}
          colorText={colorText}
          hasDivider={hasDivider}
          dividerColor={dividerColor || '#f06292'}
          isBuilder={isBuilder}
          sectionId={sectionId}
        />;
      case 'Section 4':
        return <Section4Editable
          nowIndexSection={nowIndexSecion}
          backgroundImage={backgroundImage?.[0]}
          // backgroundColor={backgroundColor}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          type='tagImg'
          isBuilder={isBuilder}
          sectionId={sectionId}
        />;
    }
  };
  return (
    <Fragment>
      {_renderContent()}
    </Fragment>
  );
};

export default RenderSection;
