import React, { FC } from 'react';
import styles from './Slide.module.scss';
interface SlideProps extends PropsComponent {
  imgSrc: string;
}

const Slide: FC<SlideProps> = ({ imgSrc, children, className, style }) => {
  return (
    <div className={`${styles.slide} ${className}`} style={style}>
      {children ?? <img src={imgSrc} alt="#" draggable="false" />}
    </div>
  );
};

export default Slide;
