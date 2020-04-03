import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MockUp, { MockUpProps } from 'components/MockUp/MockUp';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React from 'react';
import Button, { ButtonProps } from 'components/Button/Button';

interface Section1Option extends SectionPatternBase {
  backgroundColor?: SectionPatternBase['backgroundColor'];
  darkMode?: true | false;
  reverse?: boolean;
  slider?: boolean;
  hasDivider?: boolean;
}


export interface Section1Props<T> extends MainTitleProps, TextProps, DividerProps, MockUpProps<T>, Section1Option {
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  styleButton?: ButtonProps['style'];
}


const Section1 = <SlideType extends any>({ mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle,
  text, colorText, fontSizeText, alignText, styleText, classText,
  hasDivider = false, dividerColor,
  typeMockUp, sliderImgs, slider, backgroundColor, classMockUp, dotClass, hasDots, hasNav, navClass, styleMockUp, margin, itemShow, responsive,
  textButton = 'Try demo', hrefButton, styleButton,
  reverse, darkMode }: Section1Props<SlideType>) => {

  const _renderMockUp = () => {
    return <MockUp
      styleMockUp={styleMockUp} typeMockUp={typeMockUp} classMockUp={classMockUp}
      sliderImgs={sliderImgs} slider={slider} margin={margin} itemShow={itemShow} responsive={responsive}
      navClass={navClass} hasNav={hasNav} dotClass={dotClass} hasDots={hasDots}
    />;
  };

  const _renderDivider = () => {
    return <Divide dividerColor={dividerColor} />;
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
    />;
  };

  const _renderButton = () => {
    return (
      <Button href={hrefButton || ''} style={styleButton} text={textButton} />
    )
  }

  return (
    <Section backgroundColor={!!backgroundColor ? backgroundColor : undefined}>
      <Row>
        <Col cols={[12, 6, 6]} className={reverse ? 'order-2' : ''}>
          <>
            {mainTitle && _renderMainTitle()}
            {hasDivider && _renderDivider()}
            {text && _renderText()}
            {_renderButton()}
          </>
        </Col>
        <Col style={{ display: 'flex', justifyContent: ' center', alignItems: 'center' }} cols={[12, 6, 6]} className={reverse ? 'order-1' : ''}>
          <>
            {_renderMockUp()}
          </>
        </Col>
      </Row>
    </Section>
  );
};

export default Section1;
