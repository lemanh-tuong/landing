import imgIcon from 'assets/img/web_icons/envato.svg';
import Icon from 'components/Icon/Icon';
import React, { FC } from 'react';
import styles from './Rate.module.scss';

interface RateProps extends PropsComponent {
  authorAvatar: string;
  stars: number;
  purpose: string;
  rateContent: string;
  authorName: string;
}

const defaultProps: RateProps = {
  authorAvatar: imgIcon,
  authorName: 'Kalitegroup',
  rateContent: `Hello there I've used 4-5 directory listing scripts until now. Wilcity gives the impression that they will be the most beautiful in them. I bought a second license for support. I hope they continue without losing their excitement.`,
  purpose: 'Feature availability',
  stars: 5,
};

const Rate: FC<RateProps> = ({ authorName, authorAvatar, purpose, rateContent, stars, className, style } = { ...defaultProps }) => {
  return (
    <div className={`${styles.rate} ${className}`} style={style}>
      <Icon bgColorIcon='gradient-pink-orange' sizeIcon="xs" iconImg={{ imgSrc: authorAvatar }} classNameIcon={styles.rateIcon} />
      <div className={styles.rateContent}>
        <div className={styles.contentHeader}>
          <div className={styles.stars} data-src={stars}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className={styles.contentTitle}>
            for&nbsp;
            <span>
              {purpose}
            </span>
          </div>
        </div>
        <div className={styles.contentBody}>
          <div className={styles.paragraph}>
            {rateContent}
          </div>
          <div className={styles.author}>
            by&nbsp;
            <span>
              {authorName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
