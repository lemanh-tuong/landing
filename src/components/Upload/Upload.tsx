import React, { FC, useRef } from 'react';
import styles from './Upload.module.scss';

// const listImg = [
//   'https://images.pexels.com/photos/2508810/pexels-photo-2508810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   'https://images.pexels.com/users/avatars/210551/johannes-rapprich-129.jpeg?w=60&h=60&fit=crop&crop=faces&auto=compress',
//   'https://images.pexels.com/videos/3795655/pexels-photo-3795655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   'https://images.pexels.com/photos/3748035/pexels-photo-3748035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
// ];

export interface UploadProps {
  listImg: string[];
  onEvent?: (arg: File | null | undefined) => void;
}


const Upload: FC<UploadProps> = ({ onEvent, listImg }) => {

  const inputUpload = useRef<HTMLInputElement | null>(null);

  const _handleUpload = () => {
    const files = inputUpload?.current?.files;
    if (files) {
      onEvent?.(files[0]);
    }
  };

  const _handleDropImage = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    onEvent?.(files[0]);
  };

  const _renderImg = (url: string) => {
    return <div className={styles.img} style={{ backgroundImage: `url(${url})` }}></div>;
  };

  return (
    <div className={styles.gallery}>
      {listImg.map(url => _renderImg(url))}
      <div className={styles.uploadBtn}>
        <input type="file" className={styles.inputFile} ref={inputUpload} onChange={_handleUpload}
          onDrop={_handleDropImage}
        />
        <div className={styles.inputUI}>
          <p>Add Image</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
