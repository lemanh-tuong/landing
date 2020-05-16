import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import iconNotifycation from 'assets/img/web_icons/notification.svg';
import Section1 from 'components/Section1/Section1';
import Section10 from 'components/Section10/Section10';
import Section11 from 'components/Section11/Section11';
import Section12 from 'components/Section12/Section12';
import Section13 from 'components/Section13/Section13';
import Section2 from 'components/Section2/Section2';
import Section3 from 'components/Section3/Section3';
import Section4 from 'components/Section4/Section4';
import Section5 from 'components/Section5/Section5';
import Section6 from 'components/Section6/Section6';
import Section7 from 'components/Section7/Section7';
import Section8 from 'components/Section8/Section8';
import Section9 from 'components/Section9/Section9';
import { Option } from 'pages/SettingsPage/SettingsPage';
import React, { Fragment } from 'react';

// const RenderSection = ({ sectionName, mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
//   text, alignText, colorText, fontSizeText, classText, styleText, darkMode
// }: Option) => {
const RenderSection = (option: Option) => {
  const {
    backgroundColor, backgroundImage, animation, positionAnimation, darkMode, reverse,
    sectionName, sectionId,
    mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
    text, alignText, colorText, fontSizeText, classText, styleText,
    imageSectionCol,
    cards, hasDivider, dividerColor,
    sliderImgs, hasNav, navClass, hasDots, dotClass, fluid, itemShow, margin, classActive, responsive, draggable,
    textButton, styleButton, hrefButton, backgroundButton, colorTextButton, typeButton, sizeButton,
    typeMockUp,
    rateList,
    card2s,
    iphoneParams, androidParams, buttons,
    iconImg,
    sliderSection,
  } = option;
  const _renderContent = () => {
    switch (sectionName) {
      case 'Section 1':
        return <Section1
          animation={animation} reverse={reverse}
          positionAnimation={positionAnimation}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          hasDivider={hasDivider}
          dividerColor={dividerColor}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          fontSizeText='sm'
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
          typeMockUp={typeMockUp}
          sliderImgs={sliderImgs ?? [
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
          backgroundButton={backgroundButton}
          colorTextButton={colorTextButton}
          typeButton={typeButton}
          sizeButton={sizeButton}
          sectionId={sectionId}
        />;
      case 'Section 2':
        return <Section2
          animation={animation}
          positionAnimation={positionAnimation}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          cards={cards ? cards : []}
          sectionId={sectionId}
        />;
      case 'Section 3':
        return <Section3
          animation={animation} reverse={reverse}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          classMainTitle={classMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          styleMainTitle={styleMainTitle}
          text={text}
          alignText={alignText}
          colorText={colorText}
          classText={classText}
          fontSizeText={fontSizeText}
          styleText={styleText}
          hasDivider={hasDivider}
          dividerColor={dividerColor ?? '#f06292'}
          sectionId={sectionId}
        />;
      case 'Section 4':
        return <Section4
          animation={animation}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          backgroundButton={backgroundButton}
          hrefButton={hrefButton}
          colorTextButton={colorTextButton}
          textButton={textButton}
          typeButton={typeButton}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          sectionId={sectionId}
        />;
      case 'Section 5':
        return <Section5
          animation={animation}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          sliderImgs={sliderImgs}
          hasNav={hasNav}
          hasDots={hasDots}
          navClass={navClass}
          dotClass={dotClass} draggable={draggable}
          fluid={fluid}
          margin={margin} responsive={responsive}
          itemShow={itemShow}
          sectionId={sectionId}
        />;
      case 'Section 6':
        return <Section6
          backgroundColor={backgroundColor} backgroundImage={backgroundImage} animation={animation} positionAnimation={positionAnimation}
          mainTitle={mainTitle} colorMainTitle={colorMainTitle} alignMainTitle={alignMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} fontSizeMainTitle={fontSizeMainTitle}
          textButton={textButton} typeButton={typeButton} sizeButton={sizeButton} hrefButton={hrefButton} colorTextButton={colorTextButton} styleButton={styleButton} backgroundButton={backgroundButton}
          sectionId={sectionId} darkMode={darkMode}
        />;
      case 'Section 7':
        return <Section7
          darkMode={darkMode} sectionId={sectionId}
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
          rateList={rateList ?? []}
          backgroundButton={backgroundButton}
          colorTextButton={colorTextButton}
          hrefButton={hrefButton}
          typeButton={typeButton}
          textButton={textButton}
          styleButton={styleButton}
          sizeButton={sizeButton}
        />;
      case 'Section 8':
        return <Section8
          sectionId={sectionId} reverse={reverse}
          animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
          card2s={card2s ?? [] as any}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle} fontSizeMainTitle={fontSizeMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor}
          text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
          textButton={textButton} typeButton={typeButton} sizeButton={sizeButton} colorTextButton={colorTextButton} backgroundButton={backgroundButton} hrefButton={hrefButton} styleButton={styleButton}
        />;
      case 'Section 9':
        return <Section9
          animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage}
          sectionId={sectionId} reverse={reverse}
          darkMode={darkMode}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor}
          text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
          buttons={buttons ?? []}
          iphoneParams={iphoneParams ?? ''} androidParams={androidParams ?? ''}
        />;
      case 'Section 10':
        return <Section10
          sectionId={sectionId}
          animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor}
          imageSectionCol={imageSectionCol}
          text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
          textButton={textButton} typeButton={typeButton} sizeButton={sizeButton} colorTextButton={colorTextButton} backgroundButton={backgroundButton} hrefButton={hrefButton} styleButton={styleButton}
        />;
      case 'Section 11':
        return <Section11
          sectionId={sectionId} reverse={reverse}
          animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor}
          imageSectionCol={imageSectionCol ?? { imgSrc: sectionImg1 }}
          text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
          iconImg={iconImg ?? { imgSrc: iconNotifycation }}
        />;
      case 'Section 12':
        return <Section12
          sliderSection={sliderSection ?? []}
          fluid={fluid} itemShow={itemShow} margin={margin} draggable={draggable}
          hasDots={hasDots} hasNav={hasNav} classActive={classActive} dotClass={dotClass} navClass={navClass}
          sectionId={sectionId}
          animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
        />;
      case 'Section 13':
        return <Section13
          sectionId={sectionId}
          animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} darkMode={darkMode}
          typeMockUp={typeMockUp}
          sliderImgs={sliderImgs ?? []} draggable={draggable} fluid={fluid} margin={margin} classActive={classActive} navClass={navClass} hasNav={hasNav} hasDots={hasDots} dotClass={dotClass}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} classMainTitle={classMainTitle} styleMainTitle={styleMainTitle}
          text={text} alignText={alignText} colorText={colorText} classText={classText} styleText={styleText} fontSizeText={fontSizeText}
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
