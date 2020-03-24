import React, { useRef, ReactNode, MutableRefObject } from 'react';

export type OnChangeFileFunc = (file: File, urlLocal?: string) => void

export interface InputFileBaseProps {
  type: 'file' | 'input';
  onChange?: OnChangeFileFunc;
  renderInput: (onChangeFunc: OnChangeFileFunc, onDropFunc: OnChangeFileFunc, ref: MutableRefObject<HTMLInputElement | null>) => ReactNode;
}

const InputFileBase = ({ type, onChange, renderInput }: InputFileBaseProps) => {
  const inputUpload = useRef<HTMLInputElement | null>(null);


  const _handleUpload = () => {
    const files = Array.prototype.slice.call(inputUpload.current?.files);
    if (files) {
      files.forEach(file => onChange?.(file, URL.createObjectURL(file)));
    }
  };

  const _handleDropImage = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = Array.prototype.slice.call(dt.files);
    if (files) {
      files.forEach(file => onChange?.(file, URL.createObjectURL(file)));
    }
  };

  return <>{renderInput(_handleUpload, _handleDropImage, inputUpload)}</>;

}

export default InputFileBase
