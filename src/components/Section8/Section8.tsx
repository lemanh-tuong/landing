import Button, { ButtonProps } from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Card, { CardProps } from 'components/Card/Card';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Section8.module.scss';

export type Section8Props = {
  sectionId: string;
  reverse?: boolean;
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  backgroundButton?: ButtonProps['backgroundColor'];
  colorTextButton?: ButtonProps['color'];
  styleButton?: ButtonProps['style'];
  sizeButton?: ButtonProps['size'];
  typeButton?: ButtonProps['type'];
  card2s: [CardProps, CardProps, CardProps];
  alignDivider?: DividerProps['align'];
  hasDivider?: boolean;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Omit<DividerProps, 'isBuilder' | 'onEditable' | 'align'>
  & Partial<Omit<TextProps, 'isBuilder' | 'onEditable'>>;

export interface Section8PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditButton?: () => void;
  onShowPopupEditCard?: (nowIndexCard: number) => void;
}

const Section8: FC<Section8Props & Section8PropsBuilder> = ({
  animation, positionAnimation, backgroundImage, backgroundColor, darkMode, reverse,
  isBuilder, onShowPopupEditCard, onShowPopupEditMainTitle, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditButton,
  card2s,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  dividerColor, hasDivider, alignDivider,
  text, alignText, colorText, fontSizeText, classText, styleText,
  backgroundButton, colorTextButton, hrefButton, styleButton, textButton, typeButton, sizeButton
}) => {

  const handleShowPopupEditCard = (nowIndexCard: number) => {
    return () => onShowPopupEditCard?.(nowIndexCard);
  };

  return (
    <Section animation={animation} positionAnimation={positionAnimation} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <Row>
        <Col cols={[12, 12, 7]} className={`${reverse ? 'order-last' : ''}`}>
          <Row>
            <Col cols={[12, 6, 6]} className={styles.contentCenter}>
              {card2s && <Card hasIcon={true} {...card2s[0]} isBuilder={isBuilder} onEditable={handleShowPopupEditCard(0)} />}
            </Col>
            <Col cols={[12, 6, 6]}>
              {card2s?.slice(1, card2s.length).map((cardProperty, index) => <Card key={uuidv4()} hasIcon={true} {...cardProperty} isBuilder={isBuilder} onEditable={handleShowPopupEditCard(index + 1)} />)}
            </Col>
          </Row>
        </Col>
        <Col cols={[12, 12, 5]} className={`${reverse ? 'order-first' : ''}`}>
          <div className={styles.contentCenter}>
            {<MainTitle
              mainTitle={mainTitle ?? ''}
              alignMainTitle={alignMainTitle}
              classMainTitle={classMainTitle}
              fontSizeMainTitle={fontSizeMainTitle}
              colorMainTitle={colorMainTitle}
              styleMainTitle={styleMainTitle}
              isBuilder={isBuilder}
              onEditable={onShowPopupEditMainTitle}
              darkMode={darkMode}
            />}
            {hasDivider ? <Divide
              dividerColor={dividerColor} align={alignDivider}
              isBuilder={isBuilder}
              onEditable={onShowPopupEditDivider} /> : <Divide align={alignDivider} dividerColor='transparent' isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', margin: 0, zIndex: 123, cursor: 'pointer' }} />
            }
            {text && <Text
              text={text}
              alignText={alignText}
              colorText={colorText}
              fontSizeText={fontSizeText}
              classText={classText}
              styleText={styleText}
              isBuilder={isBuilder}
              onEditable={onShowPopupEditText}
              darkMode={darkMode}
            />
            }
            <ButtonGroup align='left'>
              <Button
                size={sizeButton}
                type={typeButton}
                text={textButton}
                href={hrefButton}
                backgroundColor={backgroundButton}
                isBuilder={isBuilder}
                onEditable={onShowPopupEditButton}
                style={{ ...styleButton, margin: '30px 0' }}
                color={colorTextButton}
                dark={darkMode}
              />
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Section8;
