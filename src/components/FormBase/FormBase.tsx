import React, { ReactNode, useEffect, useState } from 'react';

type TField<T> = T;

interface FileRequire {
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
  children?: ReactNode;
}

const FormBase = <T extends FileRequire>({ fields, renderField, onChange, onAnotherEvent, children }: FormBaseProps<T>) => {
  const [result, setResult] = useState({});

  const handleChange = (fieldName: string) => {
    return (value: any) => {
      setResult({
        ...result,
        [fieldName]: value
      });
    };
  };

  useEffect(() => {
    onChange?.(result);
  }, [onChange, result]);

  return (
    <>
      {fields.map(field => renderField({ ...field }, handleChange(field.fieldName), onAnotherEvent))}
      {children}
    </>
  );
};

export default FormBase;
