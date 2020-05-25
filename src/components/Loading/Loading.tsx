import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingComponent}>
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
