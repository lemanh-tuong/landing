import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import React, { Fragment } from 'react';
import { Option } from '../../SettingsPage';
import Section1Editable from '../Section1Editable/Section1Editable';
import Section2Editable from '../Section2Editable/Section2Editable';
import Section3Editable from '../Section3Editable/Section3Editable';
import Section4Editable from '../Section4Editable/Section4Editable';
import Section5Editable from '../Section5Editable/Section5Editable';

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
    backgroundColor, backgroundImage,
    sectionName, sectionId,
    mainTitle, alignMainTitle, colorMainTitle,
    text, alignText, colorText,
    imageSectionCol,
    cards, slider, hasDivider, dividerColor,
    sliderImgs, hasNav, navClass, hasDots, dotClass,
    textButton, styleButton, hrefButton,
    typeMockUp,
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
          backgroundColor={backgroundColor ? backgroundColor : "gradient-orange-pink"}
          backgroundImage={backgroundImage}
          slider={slider}
          typeMockUp={typeMockUp}
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
          backgroundColor={backgroundColor}
          cards={cards ? cards : []}
          isBuilder={isBuilder}
          sectionId={sectionId}
        />;
      case 'Section 3':
        return <Section3Editable
          nowIndexSection={nowIndexSecion}
          backgroundImage={backgroundImage?.[0]}
          backgroundColor={backgroundColor}
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
          backgroundColor={backgroundColor}
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
      case 'Section 5':
        return <Section5Editable
          nowIndexSection={nowIndexSecion}
          backgroundImage={backgroundImage?.[0]}
          backgroundColor={backgroundColor ? backgroundColor : 'gradient-pink-orange'}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          sliderImgs={sliderImgs}
          hasNav={hasNav}
          navClass={navClass}
          hasDots={hasDots}
          dotClass={dotClass}
          isBuilder={isBuilder}
          sectionId={sectionId}
        />
    }
  };
  return (
    <Fragment>
      {_renderContent()}
    </Fragment>
  );
};

export default RenderSection;
