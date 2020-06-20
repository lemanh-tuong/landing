import React, { CSSProperties, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';
import './ReactQuill.scss';
import styles from './RichTextEditor.module.scss';

export interface RichTextEditorProps {
  onChange?: (html: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  defaultValue?: string;
}

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
];

const RichTextEditor: FC<RichTextEditorProps> = ({ onChange, placeholder, label, style, className, defaultValue, children }) => {
  let timeOut: Timeout;

  const handleChange = (html: string) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      if (html.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
        onChange?.('');
      } else onChange?.(html);
    }, 100);
  };

  return (
    <div className={`${styles.richTextEditor} ${className}`} style={style}>
      <div className={styles.name}>{label}</div>
      <ReactQuill
        theme={'bubble'}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {children}
    </div>
  );
};

export default RichTextEditor;
