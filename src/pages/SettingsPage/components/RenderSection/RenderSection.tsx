import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import iconNotifycation from 'assets/img/web_icons/notification.svg';
import React, { Fragment } from 'react';
import { Option } from '../../SettingsPage';
import Section10Editable from '../Section10Editable/Section10Editable';
import Section11Editable from '../Section11Editable/Section11Editable';
import Section12Editable from '../Section12Editable/Section12Editable';
import Section13Editable from '../Section13Editable/Section13Editable';
import Section1Editable from '../Section1Editable/Section1Editable';
import Section2Editable from '../Section2Editable/Section2Editable';
import Section3Editable from '../Section3Editable/Section3Editable';
import Section4Editable from '../Section4Editable/Section4Editable';
import Section5Editable from '../Section5Editable/Section5Editable';
import Section6Editable from '../Section6Editable/Section6Editable';
import Section7Editable from '../Section7Editable/Section7Editable';
import Section8Editable from '../Section8Editable/Section8Editable';
import Section9Editable from '../Section9Editable/Section9Editable';

export interface RenderSectionArg {
  option: Option;
  nowIndexSection: number;
}

const RenderSection = ({ option, nowIndexSection }: RenderSectionArg) => {
  const {
    backgroundColor, backgroundImage, animation, positionAnimation, darkMode, reverse,
    sectionName, sectionId,
    mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
    text, alignText, colorText, fontSizeText, classText, styleText,
    imageSectionCol,
    cards, slider, hasDivider, dividerColor, alignDivider,
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
        return <Section1Editable
          sizeButton={sizeButton}
          nowIndexSection={nowIndexSection}
          typeButton={typeButton}
          darkMode={darkMode}
          animation={animation}
          positionAnimation={positionAnimation}
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          classMainTitle={classMainTitle}
          styleMainTitle={styleMainTitle}
          fontSizeMainTitle={fontSizeMainTitle ?? 'md'}
          hasDivider={hasDivider}
          dividerColor={dividerColor} alignDivider={alignDivider}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          fontSizeText={fontSizeText ?? 'sm'}
          classText={classText}
          styleText={styleText}
          slider={slider}
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
          classActive={classActive}
          fluid={fluid} hasDots={hasDots} hasNav={hasNav} dotClass={dotClass} navClass={navClass}
          reverse={reverse}
          textButton={textButton}
          styleButton={styleButton}
          hrefButton={hrefButton}
          backgroundButton={backgroundButton}
          colorTextButton={colorTextButton}
          sectionId={sectionId}
        />;
      case 'Section 2':
        return <Section2Editable
          nowIndexSection={nowIndexSection}
          darkMode={darkMode}
          animation={animation}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          classMainTitle={classMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          styleMainTitle={styleMainTitle}
          cards={cards ? cards : []}
          sectionId={sectionId}
        />;
      case 'Section 3':
        return <Section3Editable
          nowIndexSection={nowIndexSection}
          darkMode={darkMode}
          animation={animation} reverse={reverse}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          classMainTitle={classMainTitle}
          styleMainTitle={styleMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          text={text}
          alignText={alignText}
          colorText={colorText}
          classText={classText}
          fontSizeText={fontSizeText}
          styleText={styleText}
          hasDivider={hasDivider}
          dividerColor={dividerColor ?? '#f06292'} alignDivider={alignDivider}
          sectionId={sectionId}
        />;
      case 'Section 4':
        return <Section4Editable
          nowIndexSection={nowIndexSection}
          darkMode={darkMode}
          animation={animation}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          classMainTitle={classMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          styleMainTitle={styleMainTitle}
          backgroundButton={backgroundButton}
          textButton={textButton}
          colorTextButton={colorTextButton}
          hrefButton={hrefButton}
          styleButton={styleButton} sizeButton={sizeButton}
          typeButton={typeButton}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          fontSizeText={fontSizeText}
          styleText={styleText}
          classText={classText}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          sectionId={sectionId}
        />;
      case 'Section 5':
        return <Section5Editable
          nowIndexSection={nowIndexSection}
          darkMode={darkMode}
          animation={animation}
          positionAnimation={positionAnimation}
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          classMainTitle={classMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          styleMainTitle={styleMainTitle}
          text={text ?? ''}
          alignText={alignText}
          colorText={colorText}
          classText={classText}
          styleText={styleText}
          fontSizeText={fontSizeText}
          sliderImgs={sliderImgs}
          draggable={draggable}
          responsive={responsive}
          fluid={fluid}
          margin={margin}
          itemShow={itemShow}
          hasNav={hasNav}
          navClass={navClass}
          hasDots={hasDots}
          dotClass={dotClass}
          sectionId={sectionId}
        />;
      case 'Section 6':
        return <Section6Editable
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
          animation={animation}
          positionAnimation={positionAnimation}
          darkMode={darkMode}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          styleMainTitle={styleMainTitle}
          classMainTitle={classMainTitle}
          backgroundButton={backgroundButton}
          colorTextButton={colorTextButton}
          typeButton={typeButton}
          hrefButton={hrefButton}
          textButton={textButton}
          styleButton={styleButton} sizeButton={sizeButton}
          nowIndexSection={nowIndexSection}
          sectionId={sectionId}
        />;
      case 'Section 7':
        return <Section7Editable
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
          animation={animation}
          positionAnimation={positionAnimation}
          darkMode={darkMode}
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          classMainTitle={classMainTitle}
          styleMainTitle={styleMainTitle}
          text={text}
          alignText={alignText}
          colorText={colorText}
          styleText={styleText}
          classText={classText}
          fontSizeText={fontSizeText}
          rateList={rateList ?? []}
          styleButton={styleButton}
          backgroundButton={backgroundButton}
          colorTextButton={colorTextButton}
          hrefButton={hrefButton}
          textButton={textButton}
          typeButton={typeButton} sizeButton={sizeButton}
          nowIndexSection={nowIndexSection}
          sectionId={sectionId}
        />;
      case 'Section 8':
        return <Section8Editable
          nowIndexSection={nowIndexSection} sizeButton={sizeButton}
          sectionId={sectionId} reverse={reverse}
          backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation} backgroundImage={backgroundImage} darkMode={darkMode}
          card2s={card2s ?? [] as any}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor} alignDivider={alignDivider}
          text={text} alignText={alignText} colorText={colorText} fontSizeText={fontSizeText} styleText={styleText} classText={classText}
          backgroundButton={backgroundButton} typeButton={typeButton} textButton={textButton} hrefButton={hrefButton} styleButton={styleButton} colorTextButton={colorTextButton}
        />;
      case 'Section 9':
        return <Section9Editable
          nowIndexSection={nowIndexSection}
          sectionId={sectionId} reverse={reverse}
          backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation} backgroundImage={backgroundImage} darkMode={darkMode}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor} alignDivider={alignDivider}
          text={text} alignText={alignText} colorText={colorText} fontSizeText={fontSizeText} styleText={styleText} classText={classText}
          buttons={buttons ?? []}
          androidParams={androidParams ?? ''}
          iphoneParams={iphoneParams ?? ''}
        />;
      case 'Section 10':
        return <Section10Editable
          nowIndexSection={nowIndexSection}
          sectionId={sectionId}
          backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation} backgroundImage={backgroundImage} darkMode={darkMode}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle}
          hasDivider={hasDivider} dividerColor={dividerColor} alignDivider={alignDivider}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          text={text} alignText={alignText} colorText={colorText} fontSizeText={fontSizeText} styleText={styleText} classText={classText}
          backgroundButton={backgroundButton} sizeButton={sizeButton} typeButton={typeButton} textButton={textButton} hrefButton={hrefButton} styleButton={styleButton} colorTextButton={colorTextButton}
        />;
      case 'Section 11':
        return <Section11Editable
          nowIndexSection={nowIndexSection}
          sectionId={sectionId} reverse={reverse}
          backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation} backgroundImage={backgroundImage} darkMode={darkMode}
          hasDivider={hasDivider} dividerColor={dividerColor} alignDivider={alignDivider}
          imageSectionCol={!!imageSectionCol ? imageSectionCol : { imgSrc: sectionImg1 }}
          iconImg={iconImg ?? { imgSrc: iconNotifycation }}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle}
          text={text} alignText={alignText} colorText={colorText} fontSizeText={fontSizeText} styleText={styleText} classText={classText}
        />;
      case 'Section 12':
        return <Section12Editable
          nowIndexSection={nowIndexSection}
          sectionId={sectionId}
          backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation}
          backgroundImage={backgroundImage} darkMode={darkMode}
          sliderSection={sliderSection ?? []}
          hasNav={hasNav} navClass={navClass} hasDots={hasDots} dotClass={dotClass} classActive={classActive}
          fluid={fluid} itemShow={itemShow} margin={margin} draggable={draggable}
        />;
      case 'Section 13':
        return <Section13Editable
          nowIndexSection={nowIndexSection}
          sectionId={sectionId}
          backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation}
          backgroundImage={backgroundImage} darkMode={darkMode}
          typeMockUp={typeMockUp} sliderImgs={sliderImgs ?? []}
          hasNav={hasNav} navClass={navClass} hasDots={hasDots} dotClass={dotClass} classActive={classActive} draggable={draggable}
          fluid={fluid} margin={margin}
          mainTitle={mainTitle} alignMainTitle={alignMainTitle} colorMainTitle={colorMainTitle} fontSizeMainTitle={fontSizeMainTitle} styleMainTitle={styleMainTitle} classMainTitle={classMainTitle}
          text={text} alignText={alignText} colorText={colorText} fontSizeText={fontSizeText} styleText={styleText} classText={classText}
        />;
      default:
        return null;
    }
  };
  return (
    <Fragment>
      {_renderContent()}
    </Fragment>
  );
};

export default RenderSection;
