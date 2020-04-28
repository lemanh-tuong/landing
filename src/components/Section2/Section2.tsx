import { Button } from 'antd';
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
  onShowPopupEditCard?: (nowIndexCard: number) => void;
  onAddCard?: (nowIndexCard: number) => void;
  onDeleteCard?: (nowIndexCard: number) => void;
} & Section2Option
  & Partial<Omit<MainTitleProps, 'onEditable' | 'isBuilder'>>
  & Pick<CardProps, 'onEditable' | 'isBuilder'>
  & Omit<CarouselOptions, 'sliderImgs' | 'onEditable' | 'isBuilder'>


const Section2 = ({
  sectionId, onShowPopupEditTitle, onShowPopupEditCard, onAddCard, onDeleteCard, isBuilder, animation, positionAnimation, backgroundColor, backgroundImage,
  mainTitle, colorMainTitle, fontSizeMainTitle, alignMainTitle, classMainTitle, styleMainTitle,
  cards, slider, hasDots, hasNav, dotClass, navClass, itemShow, responsive,
  renderItem,
  darkMode }: Section2Props) => {

  const _handleAddCard = (nowIndexCard: number) => {
    return () => onAddCard?.(nowIndexCard)
  }

  const _handleDeleteCard = (nowIndexCard: number) => {
    return () => onDeleteCard?.(nowIndexCard)
  }

  const _handleonShowPopupEditCard = (nowIndexCard: number) => {
    return () => onShowPopupEditCard?.(nowIndexCard)
  }

  const _renderCardDefault = (cardProperty: CardProps, index: number) => {
    return (
      <Card {...cardProperty}
        isBuilder={isBuilder}
        onEditable={_handleonShowPopupEditCard(index)}
      />
    );
  };

  const _renderHeaderDefault = () => {
    return (
      <div className={styles.sectionHeader}>
        {mainTitle && <MainTitle
          mainTitle={mainTitle}
          colorMainTitle={colorMainTitle}
          fontSizeMainTitle={fontSizeMainTitle}
          alignMainTitle={alignMainTitle}
          classMainTitle={classMainTitle}
          styleMainTitle={styleMainTitle}
          darkMode={darkMode}
          isBuilder={isBuilder}
          onEditable={onShowPopupEditTitle}
        />}
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

  const _renderRowContent = () => {
    if (isBuilder) {
      return (
        <>
          {cards.length > 0 ? cards.map((item, index) => (
            <Col key={index} cols={[12, 6, 12 / cards.length >= 3 ? Math.floor(12 / cards.length) : 3]}>
              <div className={styles.cardEdit}>
                {renderItem ? renderItem({ ...item }) : _renderCardDefault({ ...item }, index)}
                <div className={styles.btnGroup}>
                  <Button className={styles.addBtn} icon={<i className="fas fa-plus"></i>} shape='circle' size='large' onClick={_handleAddCard(index)} />
                  <Button className={styles.deleteBtn} icon={<i className="fas fa-times"></i>} shape='circle' size='large' onClick={_handleDeleteCard(index)} />
                </div>
              </div>
            </Col>
          )) :
            <Col cols={[12, 12, 12]}>
              <div className={`${styles.cardEdit} ${styles.cardAdd}`} onClick={_handleAddCard(cards.length + 1)}>
                <p>
                  Add Card
                </p>
              </div>
            </Col>
          }
        </>
      )
    }
    return cards.map((item, index) => <Col key={index} cols={[12, 6, 12 / cards.length >= 3 ? Math.floor(12 / cards.length) : 3]}>
      {renderItem ? renderItem({ ...item }) : _renderCardDefault({ ...item }, index)}
    </Col>);
  };

  const _renderBodyDefault = () => {
    return (
      <Row>
        {_renderRowContent()}
      </Row>
    );
  };

  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage} animation={animation} positionAnimation={positionAnimation}>
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
