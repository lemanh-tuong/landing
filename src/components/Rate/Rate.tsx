import imgIcon from 'assets/img/web_icons/envato.svg';
import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import Icon from 'components/Icon/Icon';
import React, { CSSProperties, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Rate.module.scss';

const initArray = (length: number) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  return arr;
};

export interface RateAuthorAvatar {
  imgSrc: string;
  href: '##';
}

export interface RateProps {
  authorAvatar: RateAuthorAvatar;
  stars: number;
  purpose: string;
  rateContent: string;
  authorName: string;
  isBuilder?: boolean;
  onEditable?: () => void;
  className?: string;
  style?: CSSProperties;
}

const defaultProps: RateProps = {
  authorAvatar: {
    href: '##',
    imgSrc: imgIcon,
  },
  authorName: 'Kalitegroup',
  rateContent: `Hello there I've used 4-5 directory listing scripts until now. Wilcity gives the impression that they will be the most beautiful in them. I bought a second license for support. I hope they continue without losing their excitement.`,
  purpose: 'Feature availability',
  stars: 5,
};

const Rate: FC<RateProps> = (
  { authorName, authorAvatar, purpose, rateContent, stars, className, style, isBuilder, onEditable } = { ...defaultProps },
) => {
  const _renderStar = () => {
    const arrStar = initArray(stars);
    return (
      <div className={styles.stars} data-src={stars}>
        {arrStar.map(_star => (
          <i key={uuidv4()} className="fa fa-star"></i>
        ))}
      </div>
    );
  };

  const _renderRateTitle = () => {
    return (
      <div className={styles.contentTitle}>
        for&nbsp;
        <span>{purpose}</span>
      </div>
    );
  };

  const _renderRateContent = () => {
    return (
      <div className={styles.paragraph}>
        <p>{rateContent}</p>
      </div>
    );
  };

  const _renderAuthor = () => {
    return (
      <div className={styles.author}>
        by&nbsp;
        <span>{authorName}</span>
      </div>
    );
  };

  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div className={`${styles.rate} ${className} ${styles.isBuilder}`} style={style} onClick={onEditable}>
            <Icon bgColorIcon="gradient-pink-orange" sizeIcon="xs" iconImg={{ imgSrc: authorAvatar.imgSrc }} classNameIcon={styles.rateIcon} />
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                {_renderStar()}
                {_renderRateTitle()}
              </div>
              <div className={styles.contentBody}>
                {_renderRateContent()}
                {_renderAuthor()}
              </div>
            </div>
          </div>
        }
      />
    );
  }

  return (
    <div className={`${styles.rate} ${className}`} style={style}>
      <a href={authorAvatar.href}>
        <Icon bgColorIcon="gradient-pink-orange" sizeIcon="xs" iconImg={{ imgSrc: authorAvatar.imgSrc }} classNameIcon={styles.rateIcon} />
      </a>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          {_renderStar()}
          {_renderRateTitle()}
        </div>
        <div className={styles.contentBody}>
          {_renderRateContent()}
          {_renderAuthor()}
        </div>
      </div>
    </div>
  );
};

export default Rate;
