import React, { Component, ReactNode, useState, Fragment } from 'react';

type TField<T> = T & {
  fieldType: string;
  fieldName: string
}

export type RenderField<T> = (arg: T, onChange: (result: any) => void) => ReactNode;
  
export interface FormBaseProps<T> {
  fields: TField<T>[];
  renderField: RenderField<T>;
  onChange: (result: any) => void;
}
  
const FormBase = <T extends any>({fields, renderField, onChange}: FormBaseProps<T>) => {
  const [result, setResult] = useState({});

  return (
    <Fragment>
      {fields.map(field => renderField({...field}, onChange))}
    </Fragment>
  )
}

export default FormBase;
