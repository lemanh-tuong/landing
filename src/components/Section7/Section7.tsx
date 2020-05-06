import { Button as ButtonAntd } from 'antd';
import Button, { ButtonProps } from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Rate, { RateProps } from 'components/Rate/Rate';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Section7.module.scss';

export type Section7Props = {
  sectionId: string;
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  backgroundButton?: ButtonProps['backgroundColor'];
  colorTextButton?: ButtonProps['color'];
  styleButton?: ButtonProps['style'];
  typeButton?: ButtonProps['type'];
  rateList: RateProps[];
  isBuilder?: boolean;
  onShowPopupEditTitle?: () => void;
  onShowPopUpEditText?: () => void;
  onShowPopUpEditRate?: (nowIndexRate: number) => void;
  onShowPopUpEditButton?: () => void;
  onAddRate?: (nowIndexRate: number) => void;
  onDeleteRate?: (nowIndexRate: number) => void;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'onEditable' | 'isBuilder'>>
  & Partial<Omit<TextProps, 'onEditable' | 'isBuilder'>>;

const Section7: FC<Section7Props> = ({
  animation, positionAnimation, backgroundImage, backgroundColor, className, style, darkMode,
  isBuilder, onShowPopupEditTitle, onShowPopUpEditRate, onShowPopUpEditText, onShowPopUpEditButton, onAddRate, onDeleteRate,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  text, colorText, alignText, fontSizeText, classText, styleText,
  rateList,
  backgroundButton, colorTextButton, hrefButton, styleButton, textButton, typeButton

}) => {

  const _handleAddRate = (nowIndexRate: number) => {
    return () => onAddRate?.(nowIndexRate);
  };

  const _handleDeleteRate = (nowIndexRate: number) => {
    return () => onDeleteRate?.(nowIndexRate);
  };

  const _handleShowPopupEditRate = (nowIndexRate: number) => {
    return () => onShowPopUpEditRate?.(nowIndexRate);
  };

  const _renderRate = (rateArg: RateProps, indexRate: number) => {
    return <Rate {...rateArg} onEditable={_handleShowPopupEditRate(indexRate)} isBuilder={isBuilder} />;
  };

  const _renderRateList = () => {
    if (isBuilder) {
      return (
        <>
          {rateList.length > 0 ? rateList.map((rateProperty, index) => (
            <Col key={index} cols={[12, 6, 12 / rateList.length >= 3 ? Math.floor(12 / rateList.length) : 3]}>
              <div className={styles.rateEdit}>
                {_renderRate(rateProperty, index)}
                <div className={styles.btnGroup}>
                  <ButtonAntd className={styles.addBtn} icon={<i className="fas fa-plus"></i>} shape='circle' size='large' onClick={_handleAddRate(index)} />
                  <ButtonAntd className={styles.deleteBtn} icon={<i className="fas fa-times"></i>} shape='circle' size='large' onClick={_handleDeleteRate(index)} />
                </div>
              </div>
            </Col>
          )) :
            <Col cols={[12, 12, 12]}>
              <div className={`${styles.rateEdit} ${styles.rateAdd}`} onClick={_handleAddRate(rateList.length + 1)}>
                <p>
                  Add Card
                </p>
              </div>
            </Col>
          }
        </>
      );
    }
    return (
      <>
        {rateList.map((rateProperty, index) => (
          <Col key={uuidv4()} cols={[12, 6, 12 / rateList.length >= 3 ? Math.floor(12 / rateList.length) : 3]}>
            {_renderRate(rateProperty, index)}
          </Col>
        ))}
      </>
    );
  };

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style} animation={animation} positionAnimation={positionAnimation}>
      <div className="section7Header" style={{ marginBottom: 50 }}>
        <Row>
          <Col cols={[10]} offsets={[1]}>
            {<MainTitle
              isBuilder={isBuilder}
              onEditable={onShowPopupEditTitle}
              darkMode={darkMode}
              mainTitle={mainTitle ?? ''}
              colorMainTitle={colorMainTitle}
              alignMainTitle={alignMainTitle}
              fontSizeMainTitle={fontSizeMainTitle}
              styleMainTitle={{ ...styleMainTitle, marginBottom: 20 }}
              classMainTitle={classMainTitle}
            />}
            {<Text
              isBuilder={isBuilder}
              onEditable={onShowPopUpEditText}
              text={text ?? ''}
              alignText={alignText}
              colorText={colorText}
              fontSizeText={fontSizeText}
              classText={classText}
              styleText={styleText}
            />}
          </Col>
        </Row>
      </div>
      <Row>
        {_renderRateList()}
      </Row>
      <ButtonGroup>
        <Button
          type={typeButton}
          text={textButton}
          backgroundColor={backgroundButton}
          color={colorTextButton}
          href={hrefButton}
          dark={darkMode}
          isBuilder={isBuilder}
          onEditable={onShowPopUpEditButton}
          style={{ ...styleButton, marginTop: 30 }}
          className={styles.btn}
        />
      </ButtonGroup>
    </Section>
  );
};

export default Section7;
