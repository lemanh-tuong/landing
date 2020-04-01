import React, { useRef, ReactNode, MutableRefObject, useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type OnChangeFileFunc = (file: File, urlLocal?: string) => void

export interface InputFileBaseProps {
  type: 'file' | 'input';
  statusUploadFile?: 'uploading' | 'uploaded' | 'uploadFailure';
  onChange?: OnChangeFileFunc;
  renderInput: (onChangeFunc: OnChangeFileFunc, onDropFunc: OnChangeFileFunc, ref: MutableRefObject<HTMLInputElement | null>) => ReactNode;
  renderProcessUpload?: (statusUploadFile: InputFileBaseProps['statusUploadFile'], fileName: string, onClose: () => void) => ReactNode;
}

const InputFileBase = ({ type, statusUploadFile, onChange, renderInput, renderProcessUpload }: InputFileBaseProps) => {

  const [filesUpload, setFilesUpload] = useState<File[]>([]);
  const inputUpload = useRef<HTMLInputElement | null>(null);
  const onChangeRef = useRef(onChange);

  const _handleCloseNotifycation = (fileNameClose: string) => {
    return () => {
      const newList = filesUpload.filter(file => file.name !== fileNameClose);
      setFilesUpload([...newList]);
    }
  }

  const _handleUpload = () => {
    const files = Array.prototype.slice.call(inputUpload.current?.files);
    setFilesUpload(filesUpload.concat(files));
  };

  const _handleDropImage = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = Array.prototype.slice.call(dt.files);
    setFilesUpload(filesUpload.concat(files));
  };

  const _renderListFileUpload = () => {
    return filesUpload.map(fileName => <Fragment key={uuidv4()}>{renderProcessUpload?.(statusUploadFile, fileName.name, _handleCloseNotifycation(fileName.name))}</Fragment>)
  }

  useEffect(() => {
    filesUpload.forEach((file: File) => {
      onChangeRef.current?.(file, URL.createObjectURL(file))
    });
  }, [onChangeRef, filesUpload])

  return <>
    {renderInput(_handleUpload, _handleDropImage, inputUpload)}
    {_renderListFileUpload()}
  </>;

}

export default InputFileBase
