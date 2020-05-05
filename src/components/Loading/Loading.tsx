import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingComponent}>
      <div className={styles.container}>
        <div className={styles.gooey}>
          <span className={styles.dot}></span>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
