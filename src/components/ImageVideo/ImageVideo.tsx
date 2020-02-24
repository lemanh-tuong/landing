import React, { FC } from 'react';
import styles from './ImageVideo.module.scss';

const ImageVideo: FC = () => {
  return (
    <div className={`${styles.imageVideo} ${className}`}>
      <div className={styles.iframeVideo}>
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
    </div>
  );
};

export default ImageVideo;
