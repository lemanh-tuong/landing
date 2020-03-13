import React, { ReactNode, useState } from 'react';
import styles from './Form.module.scss';
import FormBase, { FormBaseProps } from 'components/FormBase/FormBase';
import Radio from './Radio/Radio';
import CheckBox from './CheckBox/CheckBox';
import Upload from 'components/Upload/Upload';
import Input from './Input/Input';

export type RenderItem<T> = (arg: T) => ReactNode;

const renderField1 = <T extends any>({fieldType, fieldName, props, onChange}: Field<T> & {onChange: any}) => {
  switch (fieldType) {
    case 'input':
      return <Input  
      name={fieldName} 
      horizontal={props.horizontal} 
      defaultValue={props.defaultValue}
      onChange={onChange(fieldName)} placeholder={props.placeholder}
       />
    case 'radio':
      return <Radio name={fieldName} data={props.data} onClick={onChange(fieldName)} />
    case 'checkbox':
      return <CheckBox name={fieldName} checked={props.checked} onClick={onChange(fieldName)} />;
    case 'upload':
      return <Upload listImg={props.listImg} onEvent={onChange(fieldName)} />
    default: 
      return null;;
  }
}
 

export type Field<T> = {
  fieldType: 'input' | 'checkbox' | 'radio' | 'upload',
  fieldName: string;
  props: T
}

export interface FormProps<T> {
  fields: Field<T>[];
  onChange: (fieldName: string) => (result: any) => void;
}

const Form = <T extends any>({fields, onChange}: FormProps<T>) => {
  return (
    <FormBase 
      fields={fields}
      renderField={({fieldType, fieldName, props}, onChange) => renderField1({fieldType, fieldName, props, onChange})}
      onChange={onChange}
    />
  )
}

export default Form;
