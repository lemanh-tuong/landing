import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Android from 'components/Simulator/Android';
import Iphone from 'components/Simulator/Iphone';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Section9.module.scss';

interface ButtonType {
  imgSrc: string;
  href: string;
}

export type Secction9Props = {
  sectionId: string;
  reverse?: boolean;
  hasDivider?: boolean;
  alignDivider?: DividerProps['align'];
  buttons: ButtonType[];
  iphoneParams: string;
  androidParams: string;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'onEditable' | 'isBuilder'>>
  & Partial<Omit<TextProps, 'onEditable' | 'isBuilder'>>
  & Omit<DividerProps, 'onEditable' | 'isBuilder' | 'align'>;

export interface Section9PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditButton?: (indexBtn: number) => void;
  onShowPopupEditIphoneSimulator?: () => void;
  onShowPopupEditAndroidSimulator?: () => void;
}

const Section9: FC<Secction9Props & Section9PropsBuilder> = ({
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode, reverse,
  isBuilder, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditMainTitle, onShowPopupEditButton, onShowPopupEditIphoneSimulator, onShowPopupEditAndroidSimulator,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  hasDivider, dividerColor, alignDivider,
  text, alignText, colorText, fontSizeText, classText, styleText,
  buttons,
  iphoneParams, androidParams,
}) => {

  const handleShowPopupEditButton = (indexButton: number) => {
    return (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e?.preventDefault();
      onShowPopupEditButton?.(indexButton);
    };
  };

  const _renderDivider = () => {
    if (isBuilder) {
      return (
        <>
          {hasDivider ? <Divide align={alignDivider}
            dividerColor={dividerColor}
            isBuilder={isBuilder}
            onEditable={onShowPopupEditDivider} />
            : <Divide align={alignDivider}
              dividerColor='transparent'
              isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', margin: 0, zIndex: 123, cursor: 'pointer' }}
            />}
        </>
      );
    } else if (hasDivider) {
      return <Divide align={alignDivider} dividerColor={dividerColor} isBuilder={isBuilder} onEditable={onShowPopupEditDivider} />;
    }
    return null;
  };

  const _renderButton = ({ href, imgSrc }: ButtonType, index: number) => {
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
      <a key={uuidv4()} href={href} className={styles.storeBtn}>
        <img src={imgSrc} className={styles.storeIcon} alt="App Store" />
      </a>
    );
  };

  return (
    <Section animation={animation} backgroundColor={backgroundColor} backgroundImage={backgroundImage} positionAnimation={positionAnimation}>
      <Row>
        <Col cols={[12, 12, 5]} className={`${reverse ? 'order-last' : ''}`}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            {<MainTitle
              mainTitle={mainTitle ?? ''}
              alignMainTitle={alignMainTitle}
              colorMainTitle={colorMainTitle}
              fontSizeMainTitle={fontSizeMainTitle}
              classMainTitle={classMainTitle}
              styleMainTitle={styleMainTitle}
              isBuilder={isBuilder}
              onEditable={onShowPopupEditMainTitle}
              darkMode={darkMode}
            />}
            {_renderDivider()}
            {<Text
              text={text ?? ''}
              alignText={alignText}
              fontSizeText={fontSizeText}
              classText={classText}
              colorText={colorText}
              styleText={styleText}
              darkMode={darkMode}
              isBuilder={isBuilder}
              onEditable={onShowPopupEditText}
            />}
            <ButtonGroup style={{ marginTop: 30 }} align='left'>
              {buttons.map((button, index) => _renderButton(button, index))}
            </ButtonGroup>
          </div>
        </Col>
        <Col cols={[12, 12, 7]} className={`${reverse ? 'order-first' : ''}`}>
          <div className={styles.phones}>
            <div className={`${styles.phone} ${styles.iphone}`}>
              <Iphone params={iphoneParams} isBuilder={isBuilder} onEditable={onShowPopupEditIphoneSimulator} />
            </div>
            <div className={`${styles.phone} ${styles.android}`}>
              <Android params={androidParams} isBuilder={isBuilder} onEditable={onShowPopupEditAndroidSimulator} />
            </div>
          </div>
        </Col>
      </Row>
    </Section>

  );
};

export default Section9;
