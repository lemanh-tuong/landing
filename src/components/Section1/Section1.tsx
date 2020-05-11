import Button, { ButtonProps } from 'components/Button/Button';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import MockUp, { MockUpProps } from 'components/MockUp/MockUp';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

interface Section1Option extends SectionPatternBase {
  backgroundColor?: SectionPatternBase['backgroundColor'];
  darkMode?: true | false;
  reverse?: boolean;
  slider?: boolean;
  hasDivider?: boolean;
}

export type Section1Props = {
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  styleButton?: ButtonProps['style'];
  backgroundButton?: ButtonProps['backgroundColor'];
  colorTextButton?: ButtonProps['color'];
  typeButton?: ButtonProps['type'];
  sizeButton?: ButtonProps['size'];
  sectionId: string;
} & Partial<Omit<MainTitleProps, 'onEditable' | 'isBuilder'>>
  & Partial<Omit<TextProps, 'onEditable' | 'isBuilder'>>
  & Omit<DividerProps, 'onEditable' | 'isBuilder'>
  & Omit<MockUpProps, 'onEditable' | 'isBuilder'>
  & Section1Option;

export interface Section1PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditButton?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditMockUp?: () => void;
}

const Section1: FC<Section1Props & Section1PropsBuilder> = ({
  isBuilder, onShowPopupEditMainTitle, onShowPopupEditText, onShowPopupEditButton, onShowPopupEditDivider, onShowPopupEditMockUp, darkMode, reverse, animation, positionAnimation, backgroundColor,
  mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle,
  text, colorText, fontSizeText, alignText, styleText, classText,
  hasDivider = false, dividerColor,
  typeMockUp, sliderImgs, slider, classMockUp, dotClass, hasDots, hasNav, navClass, styleMockUp, margin, fluid, classActive,
  textButton = 'Try demo', hrefButton, styleButton, backgroundButton, colorTextButton, typeButton, sizeButton
}) => {

  const _renderMockUp = () => {
    return <MockUp
      isBuider={isBuilder} onEditable={onShowPopupEditMockUp}
      styleMockUp={styleMockUp} typeMockUp={typeMockUp} classMockUp={classMockUp}
      sliderImgs={sliderImgs} slider={slider} margin={margin}
      navClass={navClass} hasNav={hasNav} dotClass={dotClass} hasDots={hasDots} fluid={fluid} classActive={classActive}
    />;
  };

  const _renderDivider = () => {
    if (isBuilder) {
      return (
        <>
          {hasDivider ? <Divide
            dividerColor={dividerColor}
            isBuilder={isBuilder}
            onEditable={onShowPopupEditDivider} />
            : <Divide
              dividerColor='transparent'
              isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', margin: 0, zIndex: 123, cursor: 'pointer' }}
            />}
        </>
      );
    } else if (hasDivider) {
      return <Divide dividerColor={dividerColor} isBuilder={isBuilder} onEditable={onShowPopupEditDivider} />;
    }
    return null;
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

  const _renderButton = () => {
    return (
      <Button
        href={hrefButton ?? ''} style={styleButton} text={textButton} size={sizeButton}
        isBuilder={isBuilder} onEditable={onShowPopupEditButton}
        backgroundColor={backgroundButton} color={colorTextButton}
        type={typeButton}
      />
    );
  };

  return (
    <>
      <Section backgroundColor={backgroundColor} animation={animation} positionAnimation={positionAnimation}>
        <Row>
          <Col cols={[12, 6, 6]} className={reverse ? 'order-2' : ''}>
            <>
              {_renderMainTitle()}
              {_renderDivider()}
              {_renderText()}
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
    </>
  );
};

export default Section1;
