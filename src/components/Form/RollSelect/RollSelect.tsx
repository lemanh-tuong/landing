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
function initArray(length: number) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  return arr;
}

type ImgType = {
  imgSrc: string;
  [key: string]: any;
}

export interface UploadProps {
  listImg: ImgType[];
  defaultSelected?: ImgType | ImgType[];
  fieldName: string;
  multiple?: boolean;
  onUploadFile?: (arg: File) => void;
  onChoose?: (result: any) => void;
  width?: number;
  height?: number;
  statusLazy?: 'loading' | 'success';
  statusUploadFile?: 'uploading' | 'uploaded' | 'uploadFailure';
  messageUpload?: string;
  ammountLazyLoading?: number;
}


const RollSelect: FC<UploadProps> = ({ onUploadFile, onChoose, listImg, defaultSelected, fieldName, multiple, width, height, statusLazy = 'success', ammountLazyLoading, statusUploadFile, messageUpload }) => {

  const _renderImg = (item: ImgType, orderSelected: number, onChange?: (result: any) => void) => {
    const { imgSrc } = item;
    const isSelected = orderSelected !== -1 ? true : false;

    return (
      <div onClick={onChange} className={`${styles.rollSelectItem} ${statusLazy === 'loading' ? styles.skeleton : ''}  ${isSelected ? styles.chose : ''}`} style={{ width: width, height: height }} key={uuidv4()}>
        {statusLazy === 'success' ? <div className={`${styles.image}`} style={{ backgroundImage: `url(${imgSrc})` }}></div> : null}
        {isSelected ? <div className={styles.number}>{multiple ? orderSelected : <i className="fas fa-check"></i>}</div> : null}
      </div>
    )
  };

  return (
    <div className={`${width ? styles.rollSelectOptimize : styles.rollSelect}`}>
      <div className={styles.galleryName}>{fieldName}</div>
      <div className={`${styles.rollSelectList} ${styles[fieldName]}`}>
        <RollSelectBase
          data={statusLazy === 'success' ? listImg : initArray(ammountLazyLoading || 0)}
          defaultSelected={defaultSelected}
          multiple={multiple}
          renderItem={(item, index, onChoose) => _renderImg(item, index, onChoose)}
          onResult={onChoose}
        />
      </div>
      <div className={styles.input}>
        <InputFile onChange={onUploadFile} statusUploadFile={statusUploadFile} messageUpload={messageUpload} />
      </div>
    </div>
  );
};

export default memo(RollSelect);
