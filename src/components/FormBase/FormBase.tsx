import React, { ReactNode, Fragment } from 'react';

type TField<T> = T & {
  fieldType: string;
  fieldName: string
}

export type RenderField<T> = (arg: T, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => ReactNode;

export interface FormBaseProps<T> {
  fields: TField<T>[];
  renderField: RenderField<T>;
  onChange: (result: any) => void;
  onAnotherEvent?: (result: any) => void;
}

const FormBase = <T extends any>({ fields, renderField, onChange, onAnotherEvent }: FormBaseProps<T>) => {

  return (
    <Fragment>
      {fields.map(field => renderField({ ...field }, onChange, onAnotherEvent))}
    </Fragment>
  )
}

export default FormBase;
