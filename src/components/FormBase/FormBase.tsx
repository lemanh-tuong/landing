import React, { ReactNode, Fragment, useState, useEffect, useRef } from 'react';

type TField<T> = T & {
  fieldType: string;
  fieldName: string
}

export type RenderField<T> = (arg: T, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => ReactNode;

export interface FormBaseProps<T> {
  fields: TField<T>[];
  renderField: RenderField<T>;
  onChange?: (result: any) => void;
  onAnotherEvent?: (result: any) => void;
}

const FormBase = <T extends any>({ fields, renderField, onChange, onAnotherEvent }: FormBaseProps<T>) => {
  const onChangeRef = useRef(onChange)
  const [result, setResult] = useState({});

  const handleChange = (fieldName: string) => {
    return (value: any) => {
      setResult({
        ...result,
        [fieldName]: value
      })
    }
  }

  useEffect(() => {
    onChangeRef.current?.(result);
  }, [onChangeRef, result])

  return (
    <Fragment>
      {fields.map(field => renderField({ ...field }, handleChange(field.fieldName), onAnotherEvent))}
    </Fragment>
  )
}

export default FormBase;
