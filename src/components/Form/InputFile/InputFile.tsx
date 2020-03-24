import React, { FC } from 'react';
import InputFileBase, { InputFileBaseProps } from 'components/FormBase/InputFileBase/InputFileBase';
import styles from './InputFile.module.scss';

export type InputFileProps = Pick<InputFileBaseProps, 'onChange'>

const InputFile: FC<InputFileProps> = ({ onChange }) => {
  const _render = (onChange: any, onDrop: any, ref: any) => {
    return (
      <div className={styles.uploadBtn}>
        <input type="file" className={styles.inputFile} ref={ref} onChange={onChange}
          onDrop={onDrop}
        />
        <div className={styles.inputUI}>
          <p>Add Image</p>
        </div>
      </div>
    )
  }

  return (
    <InputFileBase
      renderInput={(onChange, onDrop, ref) => _render(onChange, onDrop, ref)}
      type='file'
      onChange={onChange}
    />
  )
}

export default InputFile;
