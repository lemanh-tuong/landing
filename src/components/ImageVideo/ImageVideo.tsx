import React, { FC } from 'react';
import styles from './ImageVideo.module.scss';

export interface ImageVideoProps {
  videoUrl: string;
}

const ImageVideo: FC<ImageVideoProps> = ({ videoUrl }) => {
  return (
    <div className={`${styles.imageVideo}`}>
      <div className={styles.iframeVideo}>
        <iframe
          src={videoUrl}>
        </iframe>
      </div>
    </div>
  );
};

export default ImageVideo;
