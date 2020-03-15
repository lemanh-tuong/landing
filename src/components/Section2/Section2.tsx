import Card, { CardProps } from 'components/Card/Card';
import Carousel, { CarouselOptions } from 'components/Carousel/Carousel';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Section from 'components/Grid/Section/Section';
import SectionTitle, { MainTitleProps } from 'components/SectionTitle/SectionTitle';
import React, { FC, ReactNode } from 'react';
import styles from './Section2.module.scss';

export interface Section2Props extends MainTitleProps, CardProps, Omit<CarouselOptions, 'data'> {
  cards: CardProps | CardProps[];
  slider?: boolean;
  renderItem?: (item: CardProps) => ReactNode;
}

const Section2: FC<Section2Props> = ({
  mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, classMainTitle, styleMainTitle,
  cards, slider, hasDots, hasNav, dotClass, navClass, itemShow, responsive,
  renderItem,
  darkMode }) => {
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
      />
    );
  };

  const _renderHeaderDefault = () => {
    return (
      <div className={styles.sectionHeader}>
        <SectionTitle
          mainTitle={mainTitle}
          colorMainTitle={colorMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          alignMainTitle={alignMainTitle}
          classMainTitle={classMainTitle}
          styleMainTitle={styleMainTitle}
          darkMode={darkMode}
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
        data={cards}
        renderItem={(arg: CardProps) => renderItem ? renderItem(arg) : <Card {...arg} />}
        itemShow={itemShow}
        responsive={responsive}
      />;
  };

  const _renderColumnContent = () => {
    if (cards instanceof Array) {
      return cards.map((item, index) => <Col key={index} cols={[12, 6, 12 / cards.length >= 3 ? Math.floor(12 / cards.length) : 3]}>{renderItem ? renderItem({ ...item }) : _renderCardDefault({ ...item })}</Col>);
    }
    return _renderCardDefault({ ...cards });
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
  );
};
export default Section2;
