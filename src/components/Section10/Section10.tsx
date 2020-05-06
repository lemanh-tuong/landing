import Button, { ButtonProps } from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Divide, { DividerProps } from 'components/Divide/Divide';
import Col from 'components/Grid/Column/Column';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

export type Section10Props = {
  sectionId: string;
  hasDivider?: boolean;
  imageSectionCol?: ImageProps;
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  backgroundButton?: ButtonProps['backgroundColor'];
  colorTextButton?: ButtonProps['color'];
  styleButton?: ButtonProps['style'];
  typeButton?: ButtonProps['type'];
  isBuilder?: boolean;
  onShowPopupEditMainTitle?: () => void;
  onShowPopupEditDivider?: () => void;
  onShowPopupEditImage?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditButton?: () => void;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<TextProps, 'isBuilder' | 'onEditable'>>
  & Partial<Omit<DividerProps, 'isBuilder' | 'onEditable'>>;

const Section10: FC<Section10Props> = ({
  animation, positionAnimation, backgroundColor, backgroundImage, style, className, darkMode,
  isBuilder, onShowPopupEditMainTitle, onShowPopupEditText, onShowPopupEditImage, onShowPopupEditButton, onShowPopupEditDivider,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  hasDivider, dividerColor,
  imageSectionCol,
  backgroundButton, hrefButton, colorTextButton, textButton, styleButton, typeButton,
  text, colorText, alignText, fontSizeText, styleText, classText,
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
          style={{ marginBottom: 30 }}
        />}
      </Col>
    );
  };

  const _renderDivider = () => {
    if (isBuilder) {
      return (
        <>
          {hasDivider ? <Divide
            style={{ marginRight: 'auto', marginLeft: 'auto' }}
            dividerColor={dividerColor}
            isBuilder={isBuilder}
            onEditable={onShowPopupEditDivider} />
            : <Divide
              dividerColor='transparent'
              isBuilder={isBuilder} onEditable={onShowPopupEditDivider} style={{ border: '1px dashed', marginBottom: 0, marginRight: 'auto', marginLeft: 'auto', zIndex: 123, cursor: 'pointer' }}
            />}
        </>
      );
    } else if (hasDivider) {
      return <Divide style={{ marginRight: 'auto', marginLeft: 'auto' }} dividerColor={dividerColor} isBuilder={isBuilder} onEditable={onShowPopupEditDivider} />;
    }
    return null;
  };

  const _renderMainTitle = () => {
    return <MainTitle
      isBuilder={isBuilder}
      onEditable={onShowPopupEditMainTitle}
      darkMode={darkMode}
      mainTitle={mainTitle ?? ''}
      colorMainTitle={colorMainTitle}
      alignMainTitle={alignMainTitle}
      fontSizeMainTitle={fontSizeMainTitle}
      styleMainTitle={styleMainTitle}
      classMainTitle={classMainTitle}
    />;
  };

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style} animation={animation} positionAnimation={positionAnimation}>
      {_renderMainTitle()}
      {_renderDivider()}
      {_renderImage()}
      {<Text isBuilder={isBuilder} onEditable={onShowPopupEditText} darkMode={darkMode} text={text ?? ''} colorText={colorText} alignText={alignText} fontSizeText={fontSizeText} styleText={styleText} classText={classText} />}
      <ButtonGroup align='center'>
        <Button type={typeButton} style={{ marginTop: 30, ...styleButton }} color={colorTextButton} backgroundColor={backgroundButton} text={textButton} href={hrefButton} isBuilder={isBuilder} dark={darkMode} onEditable={onShowPopupEditButton} />
      </ButtonGroup>
    </Section>
  );
};

export default Section10;
