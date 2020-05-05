import Button, { ButtonProps } from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import React, { FC } from 'react';

export type Section6Props = {
  textButton?: ButtonProps['text'];
  hrefButton?: ButtonProps['href'];
  backgroundButton?: ButtonProps['backgroundColor'];
  colorTextButton?: ButtonProps['color'];
  styleButton?: ButtonProps['style'];
  typeButton?: ButtonProps['type'];
  isBuilder?: boolean;
  sectionId: string;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditButton?: () => void;
} & SectionPatternBase
  & Partial<Omit<MainTitleProps, 'isBuilder' | 'onEditable'>>;

const Section6: FC<Section6Props> = ({
  isBuilder, onShowPopupEditTitle, onShowPopupEditButton, animation, positionAnimation,
  mainTitle, colorMainTitle, alignMainTitle, fontSizeMainTitle, styleMainTitle, classMainTitle,
  textButton, hrefButton, styleButton, backgroundButton, colorTextButton, typeButton,
  backgroundColor, backgroundImage, style, className, darkMode,
}) => {

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} className={className} style={style} animation={animation} positionAnimation={positionAnimation}>
      <Row>
        <Col cols={[10]} offsets={[1]}>
          {mainTitle && <MainTitle
            isBuilder={isBuilder}
            onEditable={onShowPopupEditTitle}
            darkMode={darkMode}
            mainTitle={mainTitle}
            colorMainTitle={colorMainTitle}
            alignMainTitle={alignMainTitle}
            fontSizeMainTitle={fontSizeMainTitle}
            styleMainTitle={{ ...styleMainTitle, marginBottom: 20 }}
            classMainTitle={classMainTitle}
          />}
        </Col>
        <ButtonGroup align='center' >
          <Button
            type={typeButton}
            isBuilder={isBuilder}
            onEditable={onShowPopupEditButton}
            text={textButton} href={hrefButton}
            style={styleButton}
            backgroundColor={backgroundButton}
            color={colorTextButton}
          />
        </ButtonGroup>
      </Row>
    </Section>
  );
};

export default Section6;
