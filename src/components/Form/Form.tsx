import React, { ReactNode, useState, Fragment } from 'react';
import styles from './Form.module.scss';
import FormBase, { FormBaseProps } from 'components/FormBase/FormBase';
import Radio from './Radio/Radio';
import CheckBox from './CheckBox/CheckBox';
import Upload from 'components/Upload/Upload';
import Input from './Input/Input';

export type RenderItem<T> = (arg: T) => ReactNode;

const renderField1 = <T extends any>(arg: T, onChange: any) => {
  if(!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
      return <Input  
      name={arg.fieldName} 
      horizontal={arg.horizontal} 
      defaultValue={arg.defaultValue}
      onChange={onChange(arg.fieldName)} placeholder={arg.placeholder}
       />
    case 'radio':
      return <Radio name={arg.fieldName} data={arg.data} onClick={onChange(arg.fieldName)} />
    case 'checkbox':
      return  <CheckBox name={arg.fieldName} checked={arg.checked} onClick={onChange(arg.fieldName)} />
    case 'file':
      return <Upload listImg={arg.listImg} onEvent={onChange(arg.fieldName)} />
    default: 
      return null;
  }
}
 
// 'input' | 'checkbox' | 'radio' | 'upload'
export type Field<T> = T & {
  fieldType: string,
  fieldName: string;
}

export interface FormProps<T> {
  fields: Field<T>[];
  onChange: (fieldName: string) => (result: any) => void;
}

const Form = <T extends any>({fields, onChange}: FormProps<T>) => {
  const [state, setState] = useState({});

  return (
    <FormBase 
      fields={fields}
      renderField={(arg, onChange) => renderField1(arg, onChange)}
      onChange={onChange}
    />
  )
}

export default Form;
