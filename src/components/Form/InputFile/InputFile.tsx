import InputFileBase, { InputFileBaseProps } from 'components/FormBase/InputFileBase/InputFileBase';
import React, { FC, memo } from 'react';
import styles from './InputFile.module.scss';

export type InputFileProps = Pick<InputFileBaseProps, 'onChange' | 'statusUploadFile'> & {
  messageUpload?: string;
  hasProcessUpload?: boolean;
};

const InputFile: FC<InputFileProps> = ({ onChange, statusUploadFile, messageUpload, hasProcessUpload = true }) => {
  // console.log(messageUpload);
  const _render = (onChange: any, onDrop: any, ref: any) => {
    return (
      <div className={styles.uploadBtn}>
        <input type="file" className={styles.inputFile} ref={ref} onChange={onChange} onDrop={onDrop} multiple />
        <div className={styles.inputUI}>
          <i className={`fas fa-cloud-upload-alt ${styles.icon}`}></i>
          <div className={styles.text}>
            <h2>Drag and drop your files here</h2>
            <p>or click to browse your file</p>
          </div>
        </div>
      </div>
    );
  };

  const _renderUpload = (statusUpload: InputFileProps['statusUploadFile'], fileName: string, onClose: () => void) => {
    return (
      <div className={`${styles.upload}`}>
        <div className={styles.uploadContent}>
          <div
            className={`${styles.uploadIcon} ${
              statusUpload === 'uploadFailure' ? styles.uploadFailure : statusUpload === 'uploaded' ? styles.uploaded : styles.uploading
            }`}
          >
            {statusUpload === 'uploadFailure' ? (
              <i className="fas fa-times"></i>
            ) : statusUpload === 'uploaded' ? (
              <i className="fas fa-check"></i>
            ) : null}
          </div>
          <div className={styles.fileName}>
            {fileName}
            {messageUpload ? <p className={styles.errorMsg}>{messageUpload}</p> : null}
          </div>
        </div>
        <div className={styles.closeBtn} onClick={onClose}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  };

  return (
    <InputFileBase
      type="file"
      statusUploadFile={statusUploadFile}
      renderInput={(onChange, onDrop, ref) => _render(onChange, onDrop, ref)}
      renderProcessUpload={hasProcessUpload ? (statusUploadFile, fileName, onClose) => _renderUpload(statusUploadFile, fileName, onClose) : undefined}
      onChange={onChange}
    />
  );
};

export default memo(InputFile);
