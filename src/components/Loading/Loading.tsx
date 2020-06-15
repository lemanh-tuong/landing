import React, { CSSProperties, FC } from 'react';
import styles from './Loading.module.scss';

export interface LoadingProps {
  className?: string;
  style?: CSSProperties;
}

const Loading: FC<LoadingProps> = ({ className, style }) => {
  return (
    <div className={`${styles.loadingComponent} ${className}`} style={style}>
      <div className={styles.container}>
        <div className={styles.gooey}>
          <span className={styles.dot}></span>
          <div className={styles.dots}>
            <span className={styles.dot2}></span>
            <span className={styles.dot2}></span>
            <span className={styles.dot2}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
