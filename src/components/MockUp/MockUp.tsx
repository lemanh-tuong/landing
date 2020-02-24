import Carousel, { CarouselProps } from 'components/Carousel/Carousel';
import Icon from 'components/Icon/Icon';
import ImageVideo from 'components/ImageVideo/ImageVideo';
import PopUp from 'components/PopUp/PopUp';
import React, { CSSProperties, FC, Fragment } from 'react';
import imgMac from '../../assets/img/macbook.png';
import imgIphone from '../../assets/img/phones/0.png';
import styles from './MockUp.module.scss';

export interface MockUpOption {
  typeMockUp?: 'Mac' | 'Iphone';
  hasVideo?: boolean;
  classMockUp?: string;
  styleMockUp?: CSSProperties;
  slider?: boolean;
}

export interface MockUpProps extends Omit<CarouselProps, 'data'>, MockUpOption {
  imgMockUpContent: string | string[];
}

const MockUp: FC<MockUpProps> = ({ typeMockUp = 'Mac', imgMockUpContent = '', hasVideo = false, classMockUp, styleMockUp, slider, hasDots, hasNav, dotClass, navClass, items, margin, children }) => {

  const _renderPlayBtn = (srcImg: string) => {
    return (
      <div className={styles.playBtn}>
        <div className="pos-a-center">
          <Icon bgColorIcon='gradient-pink-orange' animationIcon='scale' onClick={PopUp.show}>
            <i className="fas fa-play" style={{ color: 'white' }}></i>
          </Icon>
          <PopUp>
            <ImageVideo href="#" srcImg={srcImg} />
          </PopUp>
        </div>
      </div>
    );
  };

  const _renderMockUpContent = () => {
    if (imgMockUpContent instanceof Array) {
      return <Carousel items={1} margin={0} hasDots={false} hasNav={false} data={imgMockUpContent} />;
    }
    return (
      <Fragment>
        <div className={styles.video} style={{ backgroundImage: `url(${imgMockUpContent})` }}>
          {children}
        </div>
        {hasVideo && _renderPlayBtn(imgMockUpContent)}
      </Fragment>
    );
  };

  const device = typeMockUp === 'Mac' ? imgMac : imgIphone;
  const classMockup = !!classMockUp ? classMockUp : '';
  const style = !!styleMockUp ? styleMockUp : {};

  return (
    <div className={`${styles.mockUp} ${classMockup}`} style={style}>
      <img src={device} alt="" />
      <div className={`${styles.mockUpContent} ${styles[typeMockUp]}`}>
        {_renderMockUpContent()}
      </div>
    </div >
  );
};

export default MockUp;
