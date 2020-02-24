import PopUp from 'components/PopUp/PopUp';
import React, { CSSProperties, FC, Fragment } from 'react';
import styles from './Image.module.scss';
export interface ImageProps {
  srcImg: string;
  type?: 'background' | 'tagImg';
  zoom?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: 'aspectRatio-11' | 'aspectRatio-169' | 'aspectRatio-43' | 'aspectRatio-32' | 'aspectRatio-85';
  parallax?: boolean;
}

const defaultProps: ImageProps = {
  srcImg: '',
  type: 'tagImg',
  aspectRatio: 'aspectRatio-11',
  zoom: false,
  parallax: false,
  className: '',
  style: {},
};

const Image: FC<ImageProps> = ({ srcImg, type, aspectRatio, zoom, parallax, className, style, children } = { ...defaultProps }) => {
  const aspectRatioStyle = !!aspectRatio ? styles[aspectRatio] : '';

  const _renderBackground = () => {
    return (
      <div className={`${styles.imageWrap} ${aspectRatioStyle}`}>
        <div className={`${styles.image}`} style={{ backgroundImage: `url(${srcImg})`, backgroundAttachment: `${parallax ? 'fixed' : ''}` }}>{children}</div>
        <PopUp>
          <div className={`${styles.background} ${className}`}
            style={{ ...style, backgroundImage: `url(${srcImg})` }}
            onClick={zoom ? PopUp.hide : undefined}
          />
        </PopUp>
      </div>
    );
  };

  const _renderImgTag = () => {
    return (
      <Fragment>
        <div className={`${styles.image} ${className}`}>
          <img src={srcImg} alt="" />
          {children}
        </div>
      </Fragment>
    );
  };

  if (type === 'tagImg') return _renderImgTag();
  return _renderBackground();

};

export default Image;
