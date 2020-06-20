import Button, { ButtonProps } from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import Image, { ImageProps } from 'components/Image/Image';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import Text, { TextProps } from 'components/Text/Text';
import React, { FC } from 'react';

export type Section4Props = {
  imageSectionCol?: ImageProps;
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  backgroundButton?: ButtonProps['backgroundColor'];
  colorTextButton?: ButtonProps['color'];
  styleButton?: ButtonProps['style'];
  typeButton?: ButtonProps['type'];
  sizeButton?: ButtonProps['size'];
  targetButton?: ButtonProps['target'];
  sectionId: string;
} & SectionPatternBase &
  Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>> &
  Partial<Omit<TextProps, 'isBuilder' | 'onEditable'>>;

export interface Section4PropsBuilder {
  isBuilder?: boolean;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditText?: () => void;
  onShowPopupEditImage?: () => void;
  onShowPopupEditButton?: () => void;
}

const Section4: FC<Section4Props & Section4PropsBuilder> = ({
  isBuilder,
  onShowPopupEditTitle,
  onShowPopupEditText,
  onShowPopupEditImage,
  onShowPopupEditButton,
  animation,
  positionAnimation,
  mainTitle,
  colorMainTitle,
  alignMainTitle,
  fontSizeMainTitle,
  styleMainTitle,
  classMainTitle,
  backgroundButton,
  hrefButton,
  targetButton,
  colorTextButton,
  textButton,
  styleButton,
  typeButton,
  sizeButton,
  text,
  colorText,
  alignText,
  fontSizeText,
  styleText,
  classText,
  imageSectionCol,
  backgroundColor,
  backgroundImage,
  style,
  className,
  darkMode,
}) => {
  const _renderImage = () => {
    return (
      <Col cols={[12]}>
        {imageSectionCol && (
          <Image
            type="tagImg"
            isBuilder={isBuilder}
            onEditable={onShowPopupEditImage}
            imgSrc={imageSectionCol.imgSrc}
            aspectRatio={imageSectionCol.aspectRatio}
            zoom={imageSectionCol.zoom}
            parallax={imageSectionCol.parallax}
            style={{ marginBottom: 30 }}
          />
        )}
      </Col>
    );
  };

  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      className={className}
      style={style}
      animation={animation}
      positionAnimation={positionAnimation}
    >
      <Row>
        <Col cols={[10]} offsets={[1]}>
          {
            <MainTitle
              isBuilder={isBuilder}
              onEditable={onShowPopupEditTitle}
              darkMode={darkMode}
              mainTitle={mainTitle ?? ''}
              colorMainTitle={colorMainTitle}
              alignMainTitle={alignMainTitle}
              fontSizeMainTitle={fontSizeMainTitle}
              styleMainTitle={styleMainTitle}
              classMainTitle={classMainTitle}
            />
          }
          {
            <Text
              isBuilder={isBuilder}
              onEditable={onShowPopupEditText}
              darkMode={darkMode}
              text={text ?? ''}
              colorText={colorText}
              alignText={alignText}
              fontSizeText={fontSizeText}
              styleText={{ marginBottom: 50, ...styleText }}
              classText={classText}
            />
          }
        </Col>
        {_renderImage()}
        <ButtonGroup align="center">
          <Button
            size={sizeButton}
            type={typeButton}
            style={{ marginTop: 30, ...styleButton }}
            color={colorTextButton}
            backgroundColor={backgroundButton}
            text={textButton}
            href={hrefButton}
            target={targetButton}
            isBuilder={isBuilder}
            dark={darkMode}
            onEditable={onShowPopupEditButton}
          />
        </ButtonGroup>
      </Row>
    </Section>
  );
};

export default Section4;
