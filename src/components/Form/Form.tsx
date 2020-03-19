import React, { ReactNode } from 'react';
import FormBase from 'components/FormBase/FormBase';
import Radio from './Radio/Radio';
import CheckBox from './CheckBox/CheckBox';
import RollSelect from 'components/RollSelect/RollSelect';
import Input from './Input/Input';
import ColorPicker from './ColorPicker/ColorPicker';
import { v4 as uuidv4 } from 'uuid';
export type RenderItem<T> = (arg: T) => ReactNode;

const renderField1 = <T extends any>(arg: T, onChange: any, onAnotherEvent?: any) => {
  if (!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
      return <Input
        name={arg.fieldName}
        horizontal={arg.horizontal}
        defaultValue={arg.defaultValue}
        onChange={onChange(arg.fieldName)} placeholder={arg.placeholder}
        key={uuidv4()}
      />
    case 'radio':
      return <Radio name={arg.fieldName} data={arg.data} onClick={onChange(arg.fieldName)} key={uuidv4()} />
    case 'checkbox':
      return <CheckBox name={arg.fieldName} checked={arg.checked} onClick={onChange(arg.fieldName)} key={uuidv4()} />
    case 'file':
      return <RollSelect onChoose={onAnotherEvent} width={arg.width} height={arg.height} listImg={arg.listImg} onEvent={onChange(arg.fieldName)} key={uuidv4()} />
    case 'color-picker':
      return <ColorPicker fieldName={arg.fieldName} defaultColor={arg.defaultValue} onChange={onChange(arg.fieldName)} key={uuidv4()} />
    default:
      return null;
  }
}

export type Field<T> = T & {
  fieldType: string,
  fieldName: string;
}

export interface FormProps<T> {
  fields: Field<T>[];
  onChange: (fieldName: string) => (result: any) => void;
  onAnotherEvent?: (result: any) => void;
}

const Form = <T extends any>({ fields, onChange, onAnotherEvent }: FormProps<T>) => {

  return (
    <div style={{ padding: 30, background: 'white' }}>
      <FormBase
        fields={fields}
        renderField={(arg, onChange) => renderField1(arg, onChange, onAnotherEvent)}
        onChange={onChange}
        onAnotherEvent={onAnotherEvent}
      />
    </div>
  )
}

export default Form;
