import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MockUp, { MockUpProps } from 'components/MockUp/MockUp';
import SectionTitle, { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC, Fragment, ReactNode } from 'react';

interface Section1Option {
  bgColor?: SectionPatternBase['bgColor'];
  darkMode?: true | false;
  reverse?: boolean;
  slider?: boolean;
}

interface RenderLeftType extends MainTitleProps, TextProps, DividerProps {

}

interface RenderRightType extends MockUpProps, Pick<Section1Option, 'slider'> {

}

export interface Section1Props extends MainTitleProps, TextProps, DividerProps, MockUpProps, Section1Option {
  renderLeft?: (arg: RenderLeftType) => ReactNode;
  renderRight?: (arg: RenderRightType) => ReactNode;
  renderProps?: () => ReactNode;
}


// const defaultSectionPattern = {
//   darkMode: false,
//   bgColor: undefined,
//   reverse: false,
// };

const Section1: FC<Section1Props> = ({ mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle,
  text, colorText, fontSizeText, alignText, styleText, classText,
  hasDivider, dividerColor,
  typeMockUp, imgMockUpContent, hasVideo, slider, bgColor,
  reverse, darkMode, renderLeft, renderRight, renderProps }) => {

  const _renderMockUp = () => {
    return <MockUp slider={slider} typeMockUp={typeMockUp} imgMockUpContent={imgMockUpContent} hasVideo={hasVideo} />;
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
      </Fragment>
    );
  };

  const _renderRightDefault = () => {
    return (
      <Fragment>
        {_renderMockUp()}
      </Fragment>
    );
  };

  const _renderButtonGroup = () => {
    return (
      <ButtonGroup scroll>
        {renderProps?.()}
      </ButtonGroup>
    );
  };

  return (
    <Section bgColor={!!bgColor ? bgColor : undefined}>
      <Row>
        <Col cols={[12, 6, 6]} className={reverse ? 'order-2' : ''}>
          {renderLeft ? renderLeft({
            mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle,
            text, colorText, fontSizeText, alignText, styleText, classText,
            hasDivider, dividerColor: 'white'
          }) : _renderLeftDefault()}
        </Col>
        <Col style={{ display: 'flex', justifyContent: ' center', alignItems: 'center' }} cols={[12, 6, 6]} className={reverse ? 'order-1' : ''}>
          {renderRight ? renderRight({ typeMockUp, imgMockUpContent, hasVideo, slider }) : _renderRightDefault()}
        </Col>
        {renderProps && _renderButtonGroup()}
      </Row>
    </Section>
  );
};

export default Section1;
