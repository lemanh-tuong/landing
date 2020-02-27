import { ImageProps } from 'components/Image/Image';
import useSlide from 'hooks/useSlide';
import React, { CSSProperties, ReactNode } from 'react';
import styles from './Carousel.module.scss';

// const caculatedWidth = (ammountItems: number) => {
//   return 100 / ammountItems;
// };

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

type ItemType<DataType> = DataType;

type RenderType<DataType> = (arg: DataType) => ReactNode;

export interface CarouselProps<DataType> extends CarouselOptions, Omit<ImageProps, 'srcImg'> {
  renderItem?: RenderType<DataType>;
  data: ItemType<DataType>[];
}

const Carousel = <DataType extends any>({
  data, renderItem, hasNav, hasDots, dotClass, navClass, margin = 30, responsive, itemShow, fluid,
}: CarouselProps<DataType>) => {

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
    return <div key={order} className={`${styles.dot} ${activeClass} ${dotClass}`} onClick={() => pickSlide(order)}></div>;
  };

  const _renderDots = () => {
    return <div className={styles.dots}>{createArrayEnum(data.length - items + 1).map((_item, index) => _renderDot(index))}</div>;
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
