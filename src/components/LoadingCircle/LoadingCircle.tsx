import React from 'react';
import styles from './LoadingCircle.module.scss';

const LoadingCircle = () => {
  return (
    <div className={styles.loadingCircle}>
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default LoadingCircle;
