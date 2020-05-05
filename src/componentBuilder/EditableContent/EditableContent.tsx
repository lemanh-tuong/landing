import React, { ChangeEvent, CSSProperties, FC, useEffect, useState } from 'react';
import styles from './EditableContent.module.scss';
import Textarea from './TextArea/Textarea';

export interface EditableContentProps {
  maxCount?: number;
  className?: string;
  style?: CSSProperties;
  warningClass?: string;
  tagHTML?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span';
  defaultText: string;
  onChange?: (text: string) => void;
  onFocusing?: (isFocusing?: boolean) => void;
  onWarning?: (isWarning?: boolean) => VoidFunction;
}

const EditableContent: FC<EditableContentProps> = ({ className, warningClass, defaultText, maxCount = 100, tagHTML = 'div', onChange, onFocusing, onWarning }) => {
  const [isFocusing, setIsFocusing] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [text, setText] = useState(defaultText || '');

  // Handle
  const handleEditing = () => {
    setIsFocusing(true);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (!isWarning && e.target.value.length > maxCount) {
      setIsWarning(true);
    }
    if (isWarning && e.target.value.length <= maxCount) {
      setIsWarning(false);
    }
  };

  // Render
  const _renderEditing = () => {
    return (
      <div className={styles.editingContent}>
        <div className={styles.textArea}>
          <Textarea
            block
            defaultValue={text}
            onChange={handleChange}
            autoFocus={true}
            className={`${isWarning ? warningClass ?? styles.warning : ''} ${className}`}
            maxLength={maxCount}
          />
        </div>
        <div className={styles.editingBottom}>
          <div className={styles.count}>
            {text.length} / {maxCount}
          </div>
          <div className={styles.blurBtn}>
            Done!
          </div>
        </div>
      </div>
    );
  };

  // Effect
  useEffect(() => {
    onChange?.(text);
  }, [text, onChange]);

  useEffect(() => {
    onFocusing?.(isFocusing);
  }, [onFocusing, isFocusing]);

  useEffect(() => {
    onWarning?.(isWarning);
  }, [onWarning, isWarning]);

  const _renderSwitch = () => {
    switch (tagHTML) {
      case 'div':
        return (
          <div className={`${className} ${styles.editableContent}`} onClick={handleEditing}>
            {text}
            {isFocusing ? _renderEditing() : null}
          </div>
        );
      case 'h1':
        return (
          <h1 className={`${className} ${styles.editableContent}`} onClick={handleEditing}>
            {text}
            {isFocusing ? _renderEditing() : null}
          </h1>
        );
      case 'h2':
        return (
          <h2 className={`${className} ${styles.editableContent}`} onClick={handleEditing}>
            {text}
            {isFocusing ? _renderEditing() : null}
          </h2>
        );
      case 'h3':
        return (
          <h3 className={`${className} ${styles.editableContent}`} onClick={handleEditing}>
            {text}
            {isFocusing ? _renderEditing() : null}
          </h3>
        );
      case 'p':
        return (
          <p className={`${className} ${styles.editableContent}`} onClick={handleEditing}>
            {text}
            {isFocusing ? _renderEditing() : null}
          </p>
        );
      case 'span':
        return (
          <span className={`${className} ${styles.editableContent}`} onClick={handleEditing}>
            {text}
            {isFocusing ? _renderEditing() : null}
          </span>
        );
    }
  };

  return _renderSwitch();

};

export default EditableContent;
