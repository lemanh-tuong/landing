import React, { ReactNode, ChangeEvent, FC, memo } from 'react';
import FormBase from 'components/FormBase/FormBase';
import Radio, { RadioProps } from './Radio/Radio';
import CheckBox, { CheckBoxProps } from './CheckBox/CheckBox';
import RollSelect, { RollSelectProps } from 'components/Form/RollSelect/RollSelect';
import ColorPicker, { ColorPickerProps } from './ColorPicker/ColorPicker';
import Input, { InputProps } from './Input/Input';
import styles from './Form.module.scss';

export type RenderItem<T> = (arg: T) => ReactNode;

export type FieldType = Partial<InputProps> & Partial<RadioProps> & Partial<CheckBoxProps> & Partial<RollSelectProps> & Partial<ColorPickerProps> & {
  hidden?: boolean;
  fieldType: 'input' | 'radio' | 'checkbox' | 'file' | 'color-picker';
  fieldName: string;
  fieldId: string | number;
}

export interface FormProps {
  fields: FieldType[];
  onChange: (fieldType: FieldType['fieldType'], fieldName: string) => (result: any) => void;
  onAnotherEvent?: (fieldName: string) => (result: any) => void;
  children?: ReactNode;
}

const renderField1 = (arg: FieldType, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => {
  if (!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
      return <Input
        name={arg.fieldName}
        defaultValue={arg.defaultValue}
        onChange={onChange} placeholder={arg.placeholder}
        key={arg.fieldId}
        autoSize={{ maxRows: 10, minRows: 3 }}
        style={{ width: '100%', margin: "5px 0" }}
      />
    case 'radio':
      return <Radio fieldName={arg.fieldName} data={arg.data ?? []} onClick={onChange} key={arg.fieldId} defaultCheckedValue={arg.defaultCheckedValue || ''} />
    case 'checkbox':
      return <CheckBox name={arg.fieldName} defaultChecked={arg.defaultChecked} onChange={onChange} key={arg.fieldId} />
    case 'file':
      return <RollSelect defaultSelected={arg.defaultSelected} fieldName={arg.fieldName} onChoose={onAnotherEvent} multiple={arg.multiple} width={arg.width} height={arg.height} listImg={arg.listImg ?? []} onUploadFile={onChange} key={arg.fieldId} />
    case 'color-picker':
      return <ColorPicker fieldName={arg.fieldName} defaultColor={arg.defaultValue} onChange={onChange} key={arg.fieldId} />
    default:
      return null;
  }
}

const Form: FC<FormProps> = ({ fields, onChange, onAnotherEvent, children }) => {

  const handleChange = (fieldType: FieldType['fieldType'], fieldName: string) => {
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
    <div className={styles.form}>
      <FormBase
        fields={fields}
        renderField={(arg) => renderField1(arg as any, handleChange(arg.fieldType, arg.fieldName), handleAnotherEvent(arg.fieldName))}
      >
        {children}
      </FormBase>
    </div>
  )
}

export default memo(Form);
