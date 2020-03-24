import React, { FC, memo } from 'react';
import styles from './RollSelect.module.scss';
import { v4 as uuidv4 } from 'uuid';
import RollSelectBase from 'components/FormBase/RollSelectBase/RollSelectBase';
import InputFile from '../InputFile/InputFile';

// const listImg = [
//   'https://images.pexels.com/photos/2508810/pexels-photo-2508810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   'https://images.pexels.com/users/avatars/210551/johannes-rapprich-129.jpeg?w=60&h=60&fit=crop&crop=faces&auto=compress',
//   'https://images.pexels.com/videos/3795655/pexels-photo-3795655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   'https://images.pexels.com/photos/3748035/pexels-photo-3748035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
// ];

type ImgType = {
  imgSrc: string;
  [key: string]: any;
}

export interface UploadProps {
  listImg: ImgType[];
  defaultSelected?: ImgType[];
  fieldName: string;
  multiple?: boolean;
  onUploadFile?: (arg: File | undefined) => void;
  onChoose?: (result: any) => void;
  width?: number;
  height?: number;
}


const RollSelect: FC<UploadProps> = ({ onUploadFile, onChoose, listImg, defaultSelected, fieldName, multiple, width, height }) => {

  const _renderImg = (url: string, orderSelected: number, onChange?: (result: any) => void) => {
    if (orderSelected !== -1) {
      return (
        <div onClick={onChange} className={`${styles.img} ${styles.chose}`} style={{ backgroundImage: `url(${url})`, width: width, height: height }} key={uuidv4()}>
          <div className={styles.number}>{multiple ? orderSelected : <i className="fas fa-check"></i>}</div>
        </div>
      )
    }
    return <div onClick={onChange} className={`${styles.img}`} style={{ backgroundImage: `url(${url})`, width: width, height: height }} key={uuidv4()}></div>
  };

  return (
    <div className={width ? styles.rollSelectOptimize : styles.rollSelect}>
      <div className={styles.galleryName}>{fieldName}</div>
      <div className={styles.listImg}>
        <RollSelectBase
          data={listImg}
          defaultSelected={defaultSelected}
          multiple={multiple}
          renderItem={(item, index, onChoose) => _renderImg(item.imgSrc, index, onChoose)}
          onResult={onChoose}
        />
      </div>
      <div className={styles.input}>
        <InputFile onChange={onUploadFile} />
      </div>
    </div>
  );
};

export default memo(RollSelect);
