import RollSelect, { RollSelectProps } from 'components/Form/RollSelect/RollSelect';
import FormBase from 'components/FormBase/FormBase';
import React, { FC, memo, ReactNode } from 'react';
import CheckBox, { CheckBoxProps } from './CheckBox/CheckBox';
import ColorPicker, { ColorPickerProps } from './ColorPicker/ColorPicker';
import ColorPickerGradient, { ColorPickerGradientProps } from './ColorPickerGradient/ColorPickerGradient';
import styles from './Form.module.scss';
import Input, { InputProps } from './Input/Input';
import InputNumber, { InputNumberProps } from './InputNumber/InputNumber';
import InputText2, { InputText2Props } from './InputText2/InputText2';
import Radio, { RadioProps } from './Radio/Radio';
import Select, { SelectProps } from './Select/Select';

export type RenderItem<T> = (arg: T) => ReactNode;

export type FieldType = Partial<InputProps>
  & Partial<RadioProps>
  & Partial<CheckBoxProps>
  & Partial<RollSelectProps>
  & Partial<ColorPickerProps>
  & Partial<SelectProps>
  & Partial<ColorPickerGradientProps>
  & Partial<InputNumberProps>
  & Partial<InputText2Props>
  & {
    hidden?: boolean;
    fieldType: 'input' | 'number' | 'radio' | 'checkbox' | 'file' | 'color-picker' | 'color-picker-gradient' | 'password' | 'select' | 'input-text-2';
    fieldName: string;
    fieldId: string | number;
  };

export interface OnChangeFuncArg {
  fieldName: string;
  fieldType?: FieldType['fieldType'];
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
        style={{ width: '100%', margin: '5px 0' }}
      />;
    case 'input-text-2':
      return <InputText2 disabled={arg.disabled} addonAfter={arg.addonAfter} addonBefore={arg.addonBefore} defaultValue={arg.defaultValue} placeholder={arg.placeholder} onChange={onChange} />;
    case 'number':
      return <InputNumber key={arg.fieldId} fieldName={arg.fieldName} min={arg.min} max={arg.max} onChange={onChange} defaultNumber={arg.defaultNumber} />;
    case 'radio':
      return <Radio fieldName={arg.fieldName} data={arg.data ?? []} onClick={onChange} key={arg.fieldId} defaultCheckedValue={arg.defaultCheckedValue ?? ''} />;
    case 'checkbox':
      return <CheckBox name={arg.fieldName} defaultChecked={arg.defaultChecked} onChange={onChange} key={arg.fieldId} />;
    case 'file':
      return <RollSelect defaultSelected={arg.defaultSelected} fieldName={arg.fieldName} onChoose={onAnotherEvent} multiple={arg.multiple} width={arg.width} height={arg.height} listImg={arg.listImg ?? []} onUploadFile={onChange} key={arg.fieldId} />;
    case 'color-picker':
      return <ColorPicker fieldName={arg.fieldName} defaultColor={arg.defaultColor} onChange={onChange} key={arg.fieldId} />;
    case 'select':
      return arg.optionsGroup ? <Select key={arg.fieldId} defaultSelect={arg.defaultSelect} fieldName={arg.fieldName} optionsGroup={arg.optionsGroup} onChange={onChange} /> : null;
    case 'color-picker-gradient':
      return <ColorPickerGradient key={arg.fieldId} fieldName={arg.fieldName} onChange={onChange} />;
    default:
      return null;
  }
};

const Form: FC<FormProps> = ({ fields, onChange, onAnotherEvent, children }) => {

  const handleChange = (fieldType: FieldType['fieldType'], fieldName: string) => {
    return (result: any) => {
      onChange({ fieldName: fieldName, fieldType: fieldType })(result);
    };
  };

  const handleAnotherEvent = (fieldName: string) => {
    return (result: any) => {
      onAnotherEvent?.(fieldName)(result);
    };
  };

  return (
    <div className={styles.form}>
      <FormBase
        fields={fields}
        renderField={(arg) => renderField1(arg as any, handleChange(arg.fieldType, arg.fieldName), handleAnotherEvent(arg.fieldName))}
      >
        {children}
      </FormBase>
    </div>
  );
};

export default memo(Form);
