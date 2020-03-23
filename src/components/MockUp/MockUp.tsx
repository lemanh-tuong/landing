import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Icon from 'components/Icon/Icon';
import Video from 'components/Video/Video';
import PopUp from 'components/PopUp/PopUp';
import React, { CSSProperties, Fragment } from 'react';
import imgMac from '../../assets/img/macbook.png';
import imgIphone from '../../assets/img/phones/0.png';
import styles from './MockUp.module.scss';

export interface MockUpOption {
  typeMockUp?: 'Mac' | 'Iphone';
  classMockUp?: string;
  styleMockUp?: CSSProperties;
  slider?: boolean;
}

export interface ItemT {
  imgUrl: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

export interface MockUpProps<ItemT> extends MockUpOption, Omit<CarouselProps<ItemT>, 'responsive, itemShow'> {
}

const MockUp = <ItemT extends any>({
  sliderImgs, typeMockUp = 'Mac', classMockUp, styleMockUp,
  dotClass, navClass, hasDots, hasNav, margin, fluid }: MockUpProps<ItemT>
) => {

  const _renderPlayBtn = (videoUrl: string) => {
    return (
      <div className={styles.playBtn}>
        <div className="pos-a-center">
          <Icon bgColorIcon='gradient-pink-orange' animationIcon='scale' onClick={PopUp.show(videoUrl)} styleIcon={{ zIndex: 1000 }}>
            <i className="fas fa-play" style={{ color: 'white' }}></i>
          </Icon>
          <PopUp id={videoUrl}>
            <Video videoUrl={videoUrl} />
          </PopUp>
        </div>
      </div>
    );
  };

  const _renderMockUpContent = () => {
    if (sliderImgs instanceof Array) {
      return <Carousel
        margin={margin}
        dotClass={dotClass}
        navClass={navClass}
        hasDots={hasDots}
        hasNav={hasNav}
        sliderImgs={sliderImgs}
        itemShow={1}
        fluid={fluid}
        renderItem={({ imgSrc, videoUrl, hasVideo }) => {
          return (
            <Fragment>
              <div className={styles.video} style={{ backgroundImage: `url(${imgSrc})` }}>
              </div>
              {hasVideo && _renderPlayBtn(videoUrl ? videoUrl : '')}
            </Fragment>
          );
        }}
      />;
    }

    return (
      <Fragment>
        <div className={styles.video} style={{ backgroundImage: `url(${sliderImgs})` }}>
        </div>
        {_renderPlayBtn(sliderImgs ? sliderImgs : '')}
      </Fragment>
    );
  };

  const device = typeMockUp === 'Mac' ? imgMac : imgIphone;
  const classMockup = !!classMockUp ? classMockUp : '';
  const style = !!styleMockUp ? styleMockUp : {};

  return (
    <div className={`${styles.mockUp} ${classMockup}`} style={style}>
      <img src={device} alt="" draggable='false' onDrag={(e) => e.preventDefault()} />
      <div className={`${styles.mockUpContent} ${fluid ? styles.fluid : ''} ${styles[typeMockUp]}`}>
        {_renderMockUpContent()}
      </div>
    </div >
  );
};

export default MockUp;
