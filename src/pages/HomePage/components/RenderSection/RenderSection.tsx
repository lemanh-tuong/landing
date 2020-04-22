import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import Section1 from 'components/Section1/Section1';
import Section2 from 'components/Section2/Section2';
import Section3 from 'components/Section3/Section3';
import Section4 from 'components/Section4/Section4';
import Section5 from 'components/Section5/Section5';
import { Option } from 'pages/SettingsPage/SettingsPage';
import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

// const RenderSection = ({ sectionName, mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
//   text, alignText, colorText, fontSizeText, classText, styleText, darkMode
// }: Option) => {
const RenderSection = (option: Option) => {
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
        return <Section1
          sectionId={uuidv4()}
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
        />;
      case 'Section 2':
        return <Section2
          sectionId={uuidv4()}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          backgroundImage={backgroundImage?.[0]}
          backgroundColor={backgroundColor}
          cards={cards ? cards : []}
        />;
      case 'Section 3':
        return <Section3
          sectionId={uuidv4()}
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
        />;
      case 'Section 4':
        return <Section4
          sectionId={uuidv4()}
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
        />;
      case 'Section 5':
        return <Section5
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