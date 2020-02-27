import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Icon from 'components/Icon/Icon';
import ImageVideo from 'components/ImageVideo/ImageVideo';
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

export interface DataType {
  imgMockUpContent: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

export interface MockUpProps<DataType> extends MockUpOption, Omit<CarouselProps<DataType>, 'responsive, itemShow'> {
}

const MockUp = <DataType extends any>({
  data, typeMockUp = 'Mac', classMockUp, styleMockUp,
  dotClass, navClass, hasDots, hasNav, margin, fluid }: MockUpProps<DataType>
) => {

  const _renderPlayBtn = (videoUrl: string) => {
    return (
      <div className={styles.playBtn}>
        <div className="pos-a-center">
          <Icon bgColorIcon='gradient-pink-orange' animationIcon='scale' onClick={PopUp.show} styleIcon={{ zIndex: 1000 }}>
            <i className="fas fa-play" style={{ color: 'white' }}></i>
          </Icon>
          <PopUp>
            <ImageVideo videoUrl={videoUrl} />
          </PopUp>
        </div>
      </div>
    );
  };

  const _renderMockUpContent = () => {
    if (data instanceof Array) {
      return <Carousel
        margin={margin}
        dotClass={dotClass}
        navClass={navClass}
        hasDots={hasDots}
        hasNav={hasNav}
        data={data}
        itemShow={1}
        fluid={fluid}
        renderItem={({ imgMockUpContent, videoUrl, hasVideo }) => {
          return (
            <Fragment>
              <div className={styles.video} style={{ backgroundImage: `url(${imgMockUpContent})` }}>
              </div>
              {hasVideo && _renderPlayBtn(videoUrl ? videoUrl : '')}
            </Fragment>
          );
        }}
      />;

    }
    return (
      <Fragment>
        <div className={styles.video} style={{ backgroundImage: `url(${data})` }}>
        </div>
        {_renderPlayBtn(data ? data : '')}
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
