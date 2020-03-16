import React, { FC, memo } from 'react';
import styles from './Video.module.scss';

export interface VideoProps {
  videoUrl: string;
}

const Video: FC<VideoProps> = ({ videoUrl }) => {
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

export default memo(Video);
