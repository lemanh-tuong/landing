import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Image, { ImageProps } from 'components/Image/Image';
import useSlide from 'hooks/useSlide';
import React, { CSSProperties, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Carousel.module.scss';

const createArrayEnum = (length: number) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  return arr;
};

export interface breakpoint {
  '576px'?: number;
  '768px'?: number;
  '992px'?: number;
  '1200px'?: number;
}

export interface CarouselOptions {
  hasNav?: boolean;
  hasDots?: boolean;
  dotClass?: string;
  navClass?: string;
  margin?: number;
  responsive?: breakpoint;
  itemShow?: number;
  fluid?: boolean;
}

type RenderType<ItemT> = (arg: ItemT) => ReactNode;

export interface CarouselProps<ItemT> extends CarouselOptions, Omit<ImageProps, 'imgSrc'> {
  renderItem?: RenderType<ItemT>;
  sliderImgs: (ItemT & { imgSrc?: string })[];
  isBuilder?: boolean;
  onEditable?: () => void;
}

const Carousel = <ItemT extends any>({ isBuilder, onEditable, sliderImgs, renderItem, hasNav, hasDots, dotClass, navClass, margin = 30, responsive, itemShow, fluid }: CarouselProps<ItemT>) => {

  const { items, nowPosition, startPosition, currentSlide, animated, nextSlide, prevSlide, pickSlide, dragStart, dragging, dragEnd } = useSlide(sliderImgs.length, responsive, itemShow);

  const _renderNavSlide = () => {
    return (
      <div className={`${styles.navCarousel} ${navClass}`}>
        <button className={`${styles.slideBtn} ${styles.prev} `} onClick={prevSlide}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className={`${styles.slideBtn} ${styles.next} `} onClick={nextSlide}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    );
  };

  const _renderDot = (order: number) => {
    const actived = order === currentSlide ? styles.active : '';
    return <div key={uuidv4()} className={`${styles.dot} ${actived} ${dotClass}`} onClick={() => pickSlide(order)}></div>;
  };

  const _renderDots = () => {
    return <div className={styles.dots}>{createArrayEnum(sliderImgs.length - items + 1).map((_item, index) => _renderDot(index))}</div>;
  };

  const _renderDefault = (imgSrc: string) => {
    return <Image imgSrc={imgSrc} />;
  };

  const _renderSlide = () => {
    return sliderImgs.map(item => {
      return (
        <div key={uuidv4()} className={styles.slideItem} style={{ width: `${100 / items}%`, padding: `0px ${margin}px` }}>
          {renderItem ? renderItem(item) : _renderDefault(item.imgSrc)}
        </div>
      );
    });
  };

  const position: CSSProperties = {
    transform: `translate3d(calc(${-currentSlide * (100 / items)}% - ${margin - nowPosition + startPosition}px), 0, 0)`,
  };
  if (isBuilder) {
    return (
      <PopOverText onEdit={onEditable} component={
        <div className={`${styles.carousel} ${isBuilder ? styles.isBuilder : null}`} onClick={onEditable}>
          <div className={`${styles.slideShow} ${fluid ? styles.fluid : ''}`}>
            <div className={`${styles.slides} ${animated ? styles.animated : ''}`} style={position} >
              {_renderSlide()}
            </div>
          </div>
          {hasNav && _renderNavSlide()}
          {hasDots && _renderDots()}
        </div>
      } />
    )
  }
  return (
    <div className={`${styles.carousel} `}>
      <div className={`${styles.slideShow} ${fluid ? styles.fluid : ''}`} onMouseDown={dragStart} onMouseUp={dragEnd} onMouseMove={dragging}>
        <div className={`${styles.slides} ${animated ? styles.animated : ''}`} style={position} >
          {_renderSlide()}
        </div>
      </div>
      {hasNav && _renderNavSlide()}
      {hasDots && _renderDots()}
    </div>
  );
};

export default Carousel;
