import React, { FC, useRef, useState } from 'react';
import styles from './RollSelect.module.scss';

// const listImg = [
//   'https://images.pexels.com/photos/2508810/pexels-photo-2508810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   'https://images.pexels.com/users/avatars/210551/johannes-rapprich-129.jpeg?w=60&h=60&fit=crop&crop=faces&auto=compress',
//   'https://images.pexels.com/videos/3795655/pexels-photo-3795655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   'https://images.pexels.com/photos/3748035/pexels-photo-3748035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
// ];

export interface UploadProps {
  listImg: {
    imgSrc: string;
    [key: string]: any;
  }[];
  onEvent?: (arg: File | undefined) => void;
  onChoose?: (imgSrc: string) => void;
  width?: number;
  height?: number;
}


const RollSelect: FC<UploadProps> = ({ onEvent, onChoose, listImg, width, height }) => {
  const [choosing, setChoosing] = useState('');
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

  const _handleChoose = (imgSrc: string) => {
    return () => {
      onChoose?.(imgSrc);
      setChoosing(imgSrc);
    }
  }

  const _renderImg = (url: string) => {
    const chose = choosing === url ? styles.chose : {};
    return <div onClick={_handleChoose(url)} className={`${styles.img} ${chose}`} style={{ backgroundImage: `url(${url})`, width: width, height: height }}></div>;
  };

  return (
    <div className={styles.gallery}>
      {listImg.map(img => _renderImg(img.imgSrc))}
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

export default RollSelect;
