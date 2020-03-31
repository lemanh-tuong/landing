import React, { ReactNode, ChangeEvent } from 'react';
import FormBase from 'components/FormBase/FormBase';
import Radio from './Radio/Radio';
import CheckBox from './CheckBox/CheckBox';
import RollSelect from 'components/Form/RollSelect/RollSelect';
import { Input } from 'antd';
import 'antd/es/style/css';
import ColorPicker from './ColorPicker/ColorPicker';

export type RenderItem<T> = (arg: T) => ReactNode;

const renderField1 = <T extends any>(arg: T, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => {
  if (!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
      return <Input.TextArea
        name={arg.fieldName}
        defaultValue={arg.defaultValue}
        onChange={onChange} placeholder={arg.placeholder}
        key={arg.fieldId}
        autoSize={{ maxRows: 10, minRows: 3 }}
        style={{ width: '100%' }}
      />
    case 'radio':
      return <Radio name={arg.fieldName} data={arg.data} onClick={onChange} key={arg.fieldId} />
    case 'checkbox':
      return <CheckBox name={arg.fieldName} defaultChecked={arg.checked} onClick={onChange} key={arg.fieldId} />
    case 'file':
      return <RollSelect defaultSelected={arg.defaultSelected} fieldName={arg.fieldName} onChoose={onAnotherEvent} multiple={arg.multiple} width={arg.width} height={arg.height} listImg={arg.listImg} onUploadFile={onChange} key={arg.fieldId} />
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
  onChange: (fieldType: string, fieldName: string) => (result: any) => void;
  onAnotherEvent?: (fieldName: string) => (result: any) => void;
}

const Form = <T extends any>({ fields, onChange, onAnotherEvent }: FormProps<T>) => {

  const handleChange = (fieldType: string, fieldName: string) => {
    if (fieldType === 'input') {
      return (e: ChangeEvent<HTMLInputElement>) => {
        onChange(fieldType, fieldName)(e.target.value);
      }
    }
    return (result: any) => {
      onChange(fieldType, fieldName)(result);
    }
  }

  const handleAnotherEvent = (fieldName: string) => {
    return (result: any) => {
      onAnotherEvent?.(fieldName)(result);
    }
  }

  return (
    <div className="form" style={{ padding: 30 }}>
      <FormBase
        fields={fields}
        renderField={(arg, onChange) => renderField1(arg, handleChange(arg.fieldType, arg.fieldName), handleAnotherEvent(arg.fieldName))}
      />
    </div>
  )
}

export default Form;
