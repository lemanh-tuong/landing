import Image from 'components/Image/Image';
import useSlide from 'hooks/useSlide';
import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './Carousel.module.scss';

// const caculatedWidth = (ammountItems: number) => {
//   return 100 / ammountItems;
// };


export interface CarouselOptions {
  hasNav?: boolean;
  hasDots?: boolean;
  dotClass?: string;
  navClass?: string;
  items?: number;
  margin?: number;
}

export interface CarouselProps extends CarouselOptions {
  renderItem?: <ItemT>(arg: ItemT) => ReactNode;
  data: any[];
}

const Carousel: FC<CarouselProps> = ({ data, renderItem, hasNav, hasDots, dotClass, navClass, items = 3, margin = 30 }) => {
  const { currentSlide, nextSlide, prevSlide, pickSlide } = useSlide(data.length, items);

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
    return <div className={styles.dots}>{data.map((index) => _renderDot(index))}</div>;
  };

  const _renderSlide = () => {
    return data.map(item => {
      return (
        <div className={styles.slideItem} style={{ width: `${(100 / items)}%`, padding: `0px ${margin}px` }}>
          {renderItem ? renderItem(item) : <Image srcImg={item} />}
        </div>
      );
    });
  };

  const position: CSSProperties = {
    transform: `translate3d(calc(${-currentSlide * (100 / items)}% - ${margin}px), 0, 0)`,
  };


  return (
    <div className={`${styles.carousel} `}>
      <div className={`${styles.slideShow}`}>
        <div className={`${styles.slides} `} style={position} >
          {_renderSlide()}
        </div>
      </div>
      {hasNav && _renderNavSlide()}
      {hasDots && _renderDots()}
    </div>
  );
};
export default Carousel;
