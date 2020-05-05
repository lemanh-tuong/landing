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
  isBuilder?: boolean;
  hasDivider?: boolean;
  buttons: ButtonType[];
  iphoneParams: string;
  androidParams: string;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditButton?: (indexBtn: number) => void;
  onShowPopupEditIphoneSimulator?: () => void;
  onShowPopupEditAndroidSimulator?: () => void;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'onEditable' | 'isBuilder'>>
  & Partial<Omit<TextProps, 'onEditable' | 'isBuilder'>>
  & Omit<DividerProps, 'onEditable' | 'isBuilder'>;

const Section9: FC<Secction9Props> = ({
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode,
  isBuilder, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditMainTitle, onShowPopupEditButton, onShowPopupEditIphoneSimulator, onShowPopupEditAndroidSimulator,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  hasDivider, dividerColor,
  text, alignText, colorText, fontSizeText, classText, styleText,
  buttons,
  iphoneParams, androidParams,
}) => {

  const handleShowPopupEditButton = (indexButton: number) => {
    return () => onShowPopupEditButton?.(indexButton);
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

  const _renderButton = ({ href, imgSrc }: ButtonType, index: number) => {
    if (isBuilder) {
      return (
        <PopOverText
          key={uuidv4()}
          onEdit={handleShowPopupEditButton(index)}
          component={<a onClick={handleShowPopupEditButton(index)} className={`${styles.storeBtn} ${styles.isBuilder}`}>
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
        <Col cols={[12, 12, 5]}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            {mainTitle && <MainTitle
              mainTitle={mainTitle}
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
            {text && <Text
              text={text}
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
        <Col cols={[12, 12, 7]}>
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
