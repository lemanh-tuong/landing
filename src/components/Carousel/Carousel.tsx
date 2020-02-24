import { ImageProps } from 'components/Image/Image';
import useSlide from 'hooks/useSlide';
import React, { CSSProperties, ReactNode } from 'react';
import styles from './Carousel.module.scss';

// const caculatedWidth = (ammountItems: number) => {
//   return 100 / ammountItems;
// };

export interface breakpoint {
  '576px'?: number;
  '768px'?: number;
  '992px'?: number;
  '1200px'?: number;
}

type ItemType<T> = T;

type RenderType<T> = (arg: T) => ReactNode;


export interface CarouselOptions {
  hasNav?: boolean;
  hasDots?: boolean;
  dotClass?: string;
  navClass?: string;
  margin?: number;
  responsive?: breakpoint;
  itemShow?: number;
}

export interface CarouselProps<T> extends CarouselOptions, Omit<ImageProps, 'srcImg'> {
  renderItem?: RenderType<T>;
  data: ItemType<T>[];
}

const Carousel = <T extends any>({ data, renderItem, hasNav, hasDots, dotClass, navClass, margin = 30, responsive, itemShow }: CarouselProps<T>) => {
  const { items, nowPosition, startPosition, currentSlide, animated, nextSlide, prevSlide, pickSlide, dragStart, dragging, dragEnd } = useSlide(data.length, responsive && responsive, itemShow);

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
    const activeClass = order === currentSlide ? styles.active : '';
    return <div className={`${styles.dot} ${activeClass} ${dotClass}`} onClick={() => pickSlide(order)}></div>;
  };

  const _renderDots = () => {
    return <div className={styles.dots}>{data.map((_item, index) => _renderDot(index))}</div>;
  };

  const _renderSlide = () => {
    return data.map(item => {
      return (
        <div className={styles.slideItem} style={{ width: `${100 / items}%`, padding: `0px ${margin}px` }}>
          {renderItem?.(item)}
        </div>
      );
    });
  };
  const position: CSSProperties = {
    transform: `translate3d(calc(${-currentSlide * (100 / items)}% - ${margin - nowPosition + startPosition}px), 0, 0)`,
  };

  console.log(position);

  return (
    <div className={`${styles.carousel} `}>
      <div className={`${styles.slideShow} `} onMouseDown={dragStart} onMouseUp={dragEnd} onMouseMove={dragging}>
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
