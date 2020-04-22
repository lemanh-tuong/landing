import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingCompoent}>
      <div className={styles.content}>
        <h1 style={{ color: 'white' }}>Loading</h1>
      </div>
    </div>
  )
}

export default Loading;
