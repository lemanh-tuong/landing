import Card, { CardProps } from 'components/Card/Card';
import Carousel, { CarouselOptions } from 'components/Carousel/Carousel';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section, { SectionPatternBase } from 'components/Grid/Section/Section';
import MainTitle, { MainTitleProps } from 'components/MainTitle/MainTitle';
import React, { ReactNode } from 'react';
import styles from './Section2.module.scss';

export interface Section2Option extends SectionPatternBase {

}

export type Section2Props = {
  cards: CardProps[];
  sectionId: string;
  slider?: boolean;
  renderItem?: (item: CardProps) => ReactNode;
  isBuilder?: boolean;
  onShowPopupEditTitle?: () => void;
  onShowPopupEditCard?: () => void;
} & Section2Option
  & Omit<MainTitleProps, 'onEditable' | 'isBuilder'>
  & Pick<CardProps, 'onEditable' | 'isBuilder'>
  & Omit<CarouselOptions, 'sliderImgs' | 'onEditable' | 'isBuilder'>


const Section2 = ({
  sectionId, onShowPopupEditTitle, onShowPopupEditCard, isBuilder,
  mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, classMainTitle, styleMainTitle,
  cards, slider, hasDots, hasNav, dotClass, navClass, itemShow, responsive,
  renderItem,
  darkMode }: Section2Props) => {
  const _renderCardDefault = ({ titleCard, alignTitleCard, colorTitleCard, fontSizeTitleCard, classNameTitleCard, styleTitleCard,
    textCard, alignText, colorText, fontSizeText, styleText, classText, hasIcon, iconImg, bgColorIcon, animationIcon, sizeIcon, styleIcon }: CardProps) => {
    return (
      <Card textCard={textCard}
        alignText={alignText}
        colorText={colorText}
        fontSizeText={fontSizeText}
        styleText={styleText}
        classText={classText}
        titleCard={titleCard}
        alignTitleCard={alignTitleCard}
        colorTitleCard={colorTitleCard}
        classNameTitleCard={classNameTitleCard}
        fontSizeTitleCard={fontSizeTitleCard}
        styleTitleCard={styleTitleCard}
        hasIcon={hasIcon}
        iconImg={iconImg}
        bgColorIcon={bgColorIcon}
        animationIcon={animationIcon}
        sizeIcon={sizeIcon}
        styleIcon={styleIcon}
        isBuilder={isBuilder}
        onEditable={onShowPopupEditCard}
      />
    );
  };

  const _renderHeaderDefault = () => {
    return (
      <div className={styles.sectionHeader}>
        <MainTitle
          mainTitle={mainTitle}
          colorMainTitle={colorMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          alignMainTitle={alignMainTitle}
          classMainTitle={classMainTitle}
          styleMainTitle={styleMainTitle}
          darkMode={darkMode}
          isBuilder={isBuilder}
          onEditable={onShowPopupEditTitle}
        />
      </div>
    );
  };

  const _renderSlider = () => {
    if (cards instanceof Array)
      return <Carousel
        navClass={navClass}
        dotClass={dotClass}
        hasNav={hasNav}
        hasDots={hasDots}
        sliderImgs={cards}
        renderItem={(arg: CardProps) => renderItem ? renderItem(arg) : <Card {...arg} />}
        itemShow={itemShow}
        responsive={responsive}
      />;
  };

  const _renderColumnContent = () => {
    return cards.map((item, index) => <Col key={index} cols={[12, 6, 12 / cards.length >= 3 ? Math.floor(12 / cards.length) : 3]}>{renderItem ? renderItem({ ...item }) : _renderCardDefault({ ...item })}</Col>);
  };

  const _renderBodyDefault = () => {
    return (
      <Row>
        {_renderColumnContent()}
      </Row>
    );
  };



  return (
    <Section style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
      <Row>
        <Col cols={[8]} offsets={[2]}>
          {_renderHeaderDefault()}
        </Col>
      </Row>
      {slider ? _renderSlider() : _renderBodyDefault()}
    </Section>
  )
};
export default Section2;
