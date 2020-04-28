import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';
import styles from './Section11.module.scss';

export type Section11Props = {
  text?: string | string[];
  reverse?: boolean;
  imageSectionCol: ImageProps;
  iconImg: {
    imgSrc: string;
  }
  hasDivider?: boolean;
  sectionId: string;
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditImage?: () => void;
  onShowPopupEditIcon?: () => void;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<TextProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<DividerProps, 'isBuilder' | 'onEditable'>>


const Section11: FC<Section11Props> = ({
  sectionId, isBuilder, onShowPopupEditDivider, onShowPopupEditText, onShowPopupEditMainTitle, onShowPopupEditImage, onShowPopupEditIcon,
  animation, positionAnimation, backgroundColor, backgroundImage, darkMode, reverse,
  imageSectionCol,
  iconImg,
  mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
  hasDivider = false, dividerColor,
  text, alignText, colorText, fontSizeText, classText, styleText,
}) => {

  const _renderImage = () => {
    return (
      <Col cols={[12]}>
        {imageSectionCol && <Image
          type='tagImg' isBuilder={isBuilder}
          onEditable={onShowPopupEditImage}
          imgSrc={imageSectionCol.imgSrc}
          aspectRatio={imageSectionCol.aspectRatio}
          zoom={imageSectionCol.zoom}
          parallax={imageSectionCol.parallax}
          style={{ marginBottom: 45 }}
        />}
      </Col>
    );
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
              isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', marginBottom: 0, zIndex: 123, cursor: 'pointer' }}
            />}
        </>
      )
    }
    else if (hasDivider) {
      return <Divide dividerColor={dividerColor} isBuilder={isBuilder} onEditable={onShowPopupEditDivider} />;
    }
    return null;
  };

  const _renderIcon = () => {
    if (isBuilder) {
      return (
        <PopOverText
          onEdit={onShowPopupEditIcon}
          component={
            <div className={`icon ${styles.isBuilder}`} onClick={onShowPopupEditIcon}>
              <img src={iconImg.imgSrc} alt="section11 icon"></img>
            </div>
          }
        />
      )
    }
    return (
      <div className="icon">
        <img src={iconImg.imgSrc} alt="section11 icon"></img>
      </div>
    )
  }

  const _renderMainTitle = () => {
    if (mainTitle) {
      return (
        <MainTitle
          isBuilder={isBuilder}
          onEditable={onShowPopupEditMainTitle}
          darkMode={darkMode}
          mainTitle={mainTitle}
          colorMainTitle={colorMainTitle}
          alignMainTitle={alignMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          styleMainTitle={styleMainTitle}
          classMainTitle={classMainTitle} />
      )
    }
  }

  const _renderText = () => {
    if (text) {
      return (
        <Text isBuilder={isBuilder} onEditable={onShowPopupEditText} darkMode={darkMode} text={text} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />
      )
    }
  }

  return (
    <Section className={`section11`} backgroundColor={backgroundColor} backgroundImage={backgroundImage} animation={animation} positionAnimation={positionAnimation}>
      <Row>
        <Col cols={[12, 12, 7]} className={`${reverse ? 'order-last' : ''}`}>
          {_renderImage()}
        </Col>
        <Col cols={[12, 12, 5]} className={`${reverse ? 'order-first' : ''} ${styles.contentCenter}`} >
          <div className="content" style={{ paddingLeft: 80 }}>
            {_renderIcon()}
            {_renderMainTitle()}
            {_renderDivider()}
            {_renderText()}
          </div>
        </Col>
      </Row>
    </Section>
  )
}

export default Section11;
