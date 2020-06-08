import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import MockUp, { MockUpProps } from 'components/MockUp/MockUp';
import { ButtonType } from 'components/Section9/Section9';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Section14.module.scss';

interface Section14Option extends SectionPatternBase {
  backgroundColor?: SectionPatternBase['backgroundColor'];
  darkMode?: true | false;
  reverse?: boolean;
  slider?: boolean;
  hasDivider?: boolean;
}

export type Section14Props = {
  sectionId: string;
  buttons: ButtonType[];
  alignDivider?: DividerProps['align'];
} & Partial<Omit<MainTitleProps, 'onEditable' | 'isBuilder'>>
  & Partial<Omit<TextProps, 'onEditable' | 'isBuilder'>>
  & Omit<DividerProps, 'onEditable' | 'isBuilder' | 'align'>
  & Omit<MockUpProps, 'onEditable' | 'isBuilder'>
  & Section14Option;

export interface Section14PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditButton?: (indexButton: number) => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditMockUp?: () => void;
}

const Section14: FC<Section14Props & Section14PropsBuilder> = ({
  isBuilder, onShowPopupEditMainTitle, onShowPopupEditText, onShowPopupEditButton, onShowPopupEditDivider, onShowPopupEditMockUp, darkMode, reverse, animation, positionAnimation, backgroundColor,
  mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, styleMainTitle, classMainTitle,
  text, colorText, fontSizeText, alignText, styleText, classText,
  hasDivider = false, dividerColor, alignDivider,
  typeMockUp, sliderImgs, slider, classMockUp, dotClass, hasDots, hasNav, navClass, styleMockUp, margin, fluid, classActive,
  buttons, backgroundImage
}) => {

  const handleShowPopupEditButton = (indexButton: number) => {
    return (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e?.preventDefault();
      onShowPopupEditButton?.(indexButton);
    };
  };

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
            dividerColor={dividerColor} align={alignDivider}
            isBuilder={isBuilder}
            onEditable={onShowPopupEditDivider} />
            : <Divide
              dividerColor='transparent' align={alignDivider}
              isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', margin: 0, zIndex: 123, cursor: 'pointer' }}
            />}
        </>
      );
    } else if (hasDivider) {
      return <Divide align={alignDivider} dividerColor={dividerColor} isBuilder={isBuilder} onEditable={onShowPopupEditDivider} />;
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
      styleText={{ ...styleText, marginBottom: 0 }}
      classText={classText}
      darkMode={darkMode}
      onEditable={onShowPopupEditText}
      isBuilder={isBuilder}
    />;
  };

  const _renderButton = ({ href, imgSrc, target }: ButtonType, index: number) => {
    if (isBuilder) {
      return (
        <PopOverText
          key={uuidv4()}
          onEdit={handleShowPopupEditButton(index)}
          component={<a href="###" onClick={handleShowPopupEditButton(index)} className={`${styles.storeBtn} ${styles.isBuilder}`}>
            <img src={imgSrc} className={styles.storeIcon} alt="App Store" />
          </a>}
        />
      );
    }
    return (
      <a key={uuidv4()} href={href} className={styles.storeBtn} target={target}>
        <img src={imgSrc} className={styles.storeIcon} alt="App Store" />
      </a>
    );
  };

  const _renderButtons = () => {
    return buttons.map((btnProperty, index) => _renderButton(btnProperty, index));
  };

  return (
    <>
      <Section backgroundColor={backgroundColor} animation={animation} backgroundImage={backgroundImage} positionAnimation={positionAnimation}>
        <Row>
          <Col cols={[12, 6, 6]} className={` ${styles.column} ${reverse ? 'order-2' : ''}`}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              {_renderMainTitle()}
              {_renderDivider()}
              {_renderText()}
              <ButtonGroup align='left' style={{ margin: '30px 0' }}>
                {_renderButtons()}
              </ButtonGroup>
            </div>
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

export default Section14;
