import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MockUp, { MockUpProps } from 'components/MockUp/MockUp';
import SectionTitle, { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { Fragment, ReactNode } from 'react';

interface Section1Option {
  bgColor?: SectionPatternBase['bgColor'];
  darkMode?: true | false;
  reverse?: boolean;
  slider?: boolean;
}


export interface Section1Props<T> extends MainTitleProps, TextProps, DividerProps, MockUpProps<T>, Section1Option {
  renderLeft?: () => ReactNode;
  renderRight?: () => ReactNode;
}


const Section1 = <DataType extends any>({ mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle,
  text, colorText, fontSizeText, alignText, styleText, classText,
  hasDivider, dividerColor,
  typeMockUp, data, slider, bgColor,
  classMockUp, dotClass, hasDots, hasNav, navClass, styleMockUp,
  margin, itemShow, responsive,
  reverse, darkMode, renderLeft, renderRight }: Section1Props<DataType>) => {

  const _renderMockUp = () => {
    return <MockUp
      styleMockUp={styleMockUp} typeMockUp={typeMockUp} classMockUp={classMockUp}
      data={data} slider={slider} margin={margin} itemShow={itemShow} responsive={responsive}
      navClass={navClass} hasNav={hasNav} dotClass={dotClass} hasDots={hasDots}
    />;
  };

  const _renderDivider = () => {
    return <Divide dividerColor={dividerColor} />;
  };

  const _renderMainTitle = () => {
    return <SectionTitle
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

  const _renderLeftDefault = () => {
    return (
      <Fragment>
        {mainTitle && _renderMainTitle()}
        {hasDivider && _renderDivider()}
        {text && _renderText()}
        {renderLeft?.()}
      </Fragment>
    );
  };

  const _renderRightDefault = () => {
    return (
      <Fragment>
        {_renderMockUp()}
        {renderRight?.()}
      </Fragment>
    );
  };

  return (
    <Section bgColor={!!bgColor ? bgColor : undefined}>
      <Row>
        <Col cols={[12, 6, 6]} className={reverse ? 'order-2' : ''}>
          {_renderLeftDefault()}
        </Col>
        <Col style={{ display: 'flex', justifyContent: ' center', alignItems: 'center' }} cols={[12, 6, 6]} className={reverse ? 'order-1' : ''}>
          {_renderRightDefault()}
        </Col>
      </Row>
    </Section>
  );
};

export default Section1;
