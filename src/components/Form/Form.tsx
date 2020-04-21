import RollSelect, { RollSelectProps } from 'components/Form/RollSelect/RollSelect';
import FormBase from 'components/FormBase/FormBase';
import React, { FC, memo, ReactNode } from 'react';
import CheckBox, { CheckBoxProps } from './CheckBox/CheckBox';
import ColorPicker, { ColorPickerProps } from './ColorPicker/ColorPicker';
import styles from './Form.module.scss';
import Input, { InputProps } from './Input/Input';
import Radio, { RadioProps } from './Radio/Radio';
import Select, { SelectProps } from './SelectColor/Select';

export type RenderItem<T> = (arg: T) => ReactNode;

export type FieldType = Partial<InputProps> & Partial<RadioProps> & Partial<CheckBoxProps> & Partial<RollSelectProps> & Partial<ColorPickerProps> & Partial<SelectProps> & {
  hidden?: boolean;
  fieldType: 'input' | 'radio' | 'checkbox' | 'file' | 'color-picker' | 'password' | 'select';
  fieldName: string;
  fieldId: string | number;
}

export type OnChangeFuncArg = {
  fieldName: string;
  fieldType?: FieldType['fieldType']
}

export interface FormProps {
  fields: FieldType[];
  onChange: ({ fieldName, fieldType }: OnChangeFuncArg) => (result: any) => void;
  onAnotherEvent?: (fieldName: string) => (result: any) => void;
  children?: ReactNode;
}

const renderField1 = (arg: FieldType, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => {
  if (!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
    case 'password':
      return <Input
        type={arg.fieldType}
        name={arg.fieldName}
        defaultValue={arg.defaultValue}
        onChange={onChange}
        placeholder={arg.placeholder}
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
    case 'select':
      return arg.optionsGroup ? <Select defaultSelect={arg.defaultSelect} fieldName={arg.fieldName} optionsGroup={arg.optionsGroup} onChange={onChange} /> : null
    default:
      return null;
  }
}

const Form: FC<FormProps> = ({ fields, onChange, onAnotherEvent, children }) => {

  const handleChange = (fieldType: FieldType['fieldType'], fieldName: string) => {
    return (result: any) => {
      onChange({ fieldName: fieldName, fieldType: fieldType })(result);
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
