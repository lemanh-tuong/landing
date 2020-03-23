import React, { ReactNode } from 'react';
import FormBase from 'components/FormBase/FormBase';
import Radio from './Radio/Radio';
import CheckBox from './CheckBox/CheckBox';
import RollSelect from 'components/RollSelect/RollSelect';
import Input from './Input/Input';
import ColorPicker from './ColorPicker/ColorPicker';

export type RenderItem<T> = (arg: T) => ReactNode;

const renderField1 = <T extends any>(arg: T, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => {
  if (!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
      return <Input
        name={arg.fieldName}
        horizontal={arg.horizontal}
        defaultValue={arg.defaultValue}
        onChange={onChange} placeholder={arg.placeholder}
        key={arg.fieldId}
      />
    case 'radio':
      return <Radio name={arg.fieldName} data={arg.data} onClick={onChange} key={arg.fieldId} />
    case 'checkbox':
      return <CheckBox name={arg.fieldName} checked={arg.checked} onClick={onChange} key={arg.fieldId} />
    case 'file':
      return <RollSelect fieldName={arg.fieldName} onChoose={onAnotherEvent} width={arg.width} height={arg.height} listImg={arg.listImg} onEvent={onChange} key={arg.fieldId} />
    case 'color-picker':
      return <ColorPicker fieldName={arg.fieldName} defaultColor={arg.defaultValue} onChange={onChange} key={arg.fieldId} />
    default:
      return null;
  }
}

export type Field<T> = T & {
  fieldType: string,
  fieldName: string;
  fieldId: string | number;
}

export interface FormProps<T> {
  fields: Field<T>[];
  onChange: (fieldName: string) => (result: any) => void;
  onAnotherEvent?: (fieldName: string) => (result: any) => void;
}

const Form = <T extends any>({ fields, onChange, onAnotherEvent }: FormProps<T>) => {

  const handleChange = (fieldName: string) => {
    return (result: any) => {
      onChange(fieldName)(result);
    }
  }

  const handleAnotherEvent = (fieldName: string) => {
    return (result: any) => {
      onAnotherEvent?.(fieldName)(result);
    }
  }

  return (
    <div style={{ padding: 30, background: 'white' }}>
      <FormBase
        fields={fields}
        renderField={(arg, onChange) => renderField1(arg, handleChange(arg.fieldName), handleAnotherEvent(arg.fieldName))}
      />
    </div>
  )
}

export default Form;
