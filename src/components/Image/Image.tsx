import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import React, { CSSProperties, FC, memo } from 'react';
import styles from './Image.module.scss';

export interface ImageProps {
  imgSrc: string;
  type?: 'background' | 'tagImg';
  zoom?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: 'aspectRatio-11' | 'aspectRatio-169' | 'aspectRatio-43' | 'aspectRatio-32' | 'aspectRatio-85';
  parallax?: boolean;
  isBuilder?: boolean;
  onEditable?: () => void;
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

const Image: FC<ImageProps> = ({ isBuilder, onEditable, imgSrc, type, aspectRatio, parallax, className, style, children } = { ...defaultProps }) => {
  const aspectRatioStyle = !!aspectRatio ? styles[aspectRatio] : '';

  const _renderBackground = (className?: string) => {
    return (
      <div className={`${className} ${styles.imageWrap} ${aspectRatioStyle}`}>
        <div className={`${styles.image}`} style={{ ...style, backgroundImage: `url(${imgSrc})`, backgroundAttachment: `${parallax ? 'fixed' : ''}` }}>{children}</div>
      </div>
    );
  };

  const _renderImgTag = (className?: string) => {
    return (
      <div className={`${className} ${styles.image} ${className}`} style={{ ...style }}>
        <img src={imgSrc} alt="ALT" onDragStart={(e) => e.preventDefault()} />
        {children}
      </div>
    );
  };

  if (isBuilder) {
    if (type === 'tagImg') return (
      <div className={`${className} ${styles.image} ${className}`} onClick={onEditable} >
        <PopOverText component={<img src={imgSrc} alt="ALT" onDragStart={(e) => e.preventDefault()} />} onEdit={onEditable} />
      </div>
    );
    return <PopOverText component={_renderBackground(styles.isBuilder)} onEdit={onEditable} />;
  }

  if (type === 'tagImg') return _renderImgTag();
  return _renderBackground();

};

export default memo(Image);
