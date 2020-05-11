import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import MockUp, { MockUpProps } from 'components/MockUp/MockUp';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

interface TypeSlideSection13 {
  imgSrc: string;
}

export type Section13Props = {
  sectionId: string;
  sliderImgs: TypeSlideSection13[];
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<TextProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<MockUpProps, 'isBuilder' | 'onEditable'>>;

export interface Section13PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditMockUp?: () => void;
}

const Section13: FC<Section13Props & Section13PropsBuilder> = ({
  isBuilder, onShowPopupEditMainTitle, onShowPopupEditText, onShowPopupEditMockUp,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  text, colorText, alignText, fontSizeText, styleText, classText,
  slider, sliderImgs, dotClass, hasDots, hasNav, navClass, margin, fluid,
  styleMockUp, typeMockUp, classMockUp,
  backgroundColor, backgroundImage, darkMode, animation, positionAnimation
}) => {

  const _renderMockUp = () => {
    return <MockUp
      isBuider={isBuilder} onEditable={onShowPopupEditMockUp}
      styleMockUp={styleMockUp} typeMockUp={typeMockUp} classMockUp={classMockUp}
      sliderImgs={sliderImgs} slider={slider} margin={margin}
      navClass={navClass} hasNav={hasNav} dotClass={dotClass} hasDots={hasDots}
      fluid={fluid}
    />;
  };

  const _renderMainTitle = () => {
    return <MainTitle
      mainTitle={!!mainTitle ? mainTitle : ''}
      colorMainTitle={colorMainTitle}
      fontSizeMainTitle={fontSizeMainTitle}
      alignMainTitle={alignMainTitle}
      styleMainTitle={styleMainTitle}
      classMainTitle={classMainTitle}
      darkMode={darkMode}
      isBuilder={isBuilder}
      onEditable={onShowPopupEditMainTitle}
    />;
  };

  const _renderText = () => {
    return <Text
      text={!!text ? text : ''}
      colorText={colorText}
      fontSizeText={fontSizeText}
      alignText={alignText}
      styleText={styleText}
      classText={classText}
      darkMode={darkMode}
      onEditable={onShowPopupEditText}
      isBuilder={isBuilder}
    />;
  };

  return (
    <Section backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation} backgroundImage={backgroundImage}>
      {_renderMainTitle()}
      {_renderText()}
      <div className="screenShot" style={{ display: 'flex', justifyContent: 'center' }}>
        {_renderMockUp()}
      </div>
    </Section>
  );
};

export default Section13;
