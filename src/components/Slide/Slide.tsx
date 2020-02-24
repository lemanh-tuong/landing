import React, { FC } from 'react';
import styles from './Slide.module.scss';
interface SlideProps extends PropsComponent {
  srcImg: string;
}
const Slide: FC<SlideProps> = ({ srcImg, children, className, style }) => {
  return (
    <div className={`${styles.slide} ${className}`} style={style}>
      {children ?? <img src={srcImg} alt="#" draggable="false" />}
    </div>
  );
};

export default Slide;
