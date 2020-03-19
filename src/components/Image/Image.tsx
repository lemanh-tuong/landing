import React, { CSSProperties, FC, Fragment, memo } from 'react';
import styles from './Image.module.scss';

export interface ImageProps {
  imgSrc: string;
  type?: 'background' | 'tagImg';
  zoom?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: 'aspectRatio-11' | 'aspectRatio-169' | 'aspectRatio-43' | 'aspectRatio-32' | 'aspectRatio-85';
  parallax?: boolean;
}

const defaultProps: ImageProps = {
  imgSrc: '',
  type: 'tagImg',
  aspectRatio: 'aspectRatio-11',
  zoom: false,
  parallax: false,
  className: '',
  style: {},
};

const Image: FC<ImageProps> = ({ imgSrc, type, aspectRatio, zoom, parallax, className, style, children } = { ...defaultProps }) => {
  const aspectRatioStyle = !!aspectRatio ? styles[aspectRatio] : '';

  const _renderBackground = () => {
    return (
      <div className={`${styles.imageWrap} ${aspectRatioStyle}`}>
        <div className={`${styles.image}`} style={{ backgroundImage: `url(${imgSrc})`, backgroundAttachment: `${parallax ? 'fixed' : ''}` }}>{children}</div>
      </div>
    );
  };

  const _renderImgTag = () => {
    return (
      <Fragment>
        <div className={`${styles.image} ${className}`}>
          <img src={imgSrc} alt="" onDragStart={(e) => e.preventDefault()} />
          {children}
        </div>
      </Fragment>
    );
  };

  if (type === 'tagImg') return _renderImgTag();
  return _renderBackground();

};

export default memo(Image);
