import React, { Fragment, MutableRefObject, ReactNode, useRef, useState } from 'react';
import { createUrl } from 'utils/functions/createUrl';
import { v4 as uuidv4 } from 'uuid';

export type OnChangeFileFunc = (files: File[]) => void;
export type OnDropFileFunc = (e: CustomEvent & { dataTransfer: DataTransfer }) => void;
export interface InputFileBaseProps {
  type: 'file' | 'input';
  statusUploadFile?: 'uploading' | 'uploaded' | 'uploadFailure';
  onChange?: OnChangeFileFunc;
  renderInput: (onChangeFunc: OnChangeFileFunc, onDropFunc: OnDropFileFunc, ref: MutableRefObject<HTMLInputElement | null>) => ReactNode;
  renderProcessUpload?: (
    statusUploadFile: InputFileBaseProps['statusUploadFile'],
    fileName: string,
    onClose: () => void,
    fileUrlLocal?: string,
  ) => ReactNode;
}

export interface FileState extends File {
  urlLocal: string;
}

const InputFileBase = ({ statusUploadFile, onChange, renderInput, renderProcessUpload }: InputFileBaseProps) => {
  const [filesUpload, setFilesUpload] = useState<FileState[]>([]);
  const inputUpload = useRef<HTMLInputElement | null>(null);

  const _handleCloseNotifycation = (fileNameClose: string) => {
    return () => {
      const newList = filesUpload.filter(file => file.name !== fileNameClose);
      setFilesUpload([...newList]);
    };
  };

  const _handleUpload = () => {
    const files = Array.prototype.slice.call(inputUpload.current?.files) as File[];
    const stateFiles: FileState[] = files.map((file: File) => {
      return {
        ...file,
        name: file.name,
        lastModified: file.lastModified,
        size: file.size,
        type: file.type,
        urlLocal: createUrl(file),
      };
    });
    setFilesUpload(filesUpload.concat(stateFiles));
    onChange?.(files);
  };

  const _handleDropImage: OnDropFileFunc = e => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = Array.prototype.slice.call(dt.files);
    const stateFiles: FileState[] = files.map((file: File) => {
      return {
        ...file,
        name: file.name,
        lastModified: file.lastModified,
        size: file.size,
        type: file.type,
        urlLocal: createUrl(file),
      };
    });
    setFilesUpload(filesUpload.concat(stateFiles));
    onChange?.(files);
  };

  const _renderListFileUpload = () => {
    return filesUpload.map(file => (
      <Fragment key={uuidv4()}>{renderProcessUpload?.(statusUploadFile, file.name, _handleCloseNotifycation(file.name), file?.urlLocal)}</Fragment>
    ));
  };

  return (
    <>
      {renderInput(_handleUpload, _handleDropImage, inputUpload)}
      {_renderListFileUpload()}
    </>
  );
};

export default InputFileBase;
