import React, { ReactNode, Fragment, useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TField<T> = T;

type FileRequire = {
  fieldType: string;
  fieldName: string;
  [key: string]: any;
}

export type RenderField<T> = (arg: T, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => ReactNode;

export interface FormBaseProps<T> {
  fields: TField<T>[];
  renderField: RenderField<T>;
  onChange?: (result: any) => void;
  onAnotherEvent?: (result: any) => void;
}

const FormBase = <T extends FileRequire>({ fields, renderField, onChange, onAnotherEvent }: FormBaseProps<T>) => {
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

  const _renderFields = () => {
    return fields.map(field => <Fragment key={uuidv4()}>{renderField({ ...field }, handleChange(field.fieldName), onAnotherEvent)}</Fragment>)
  }

  return (
    <>
      {_renderFields()}
    </>
  )
}

export default FormBase;
