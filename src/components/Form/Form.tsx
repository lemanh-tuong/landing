import RollSelect, { RollSelectProps } from 'components/Form/RollSelect/RollSelect';
import FormBase from 'components/FormBase/FormBase';
import React, { CSSProperties, FC, memo, ReactNode } from 'react';
import CheckBox, { CheckBoxProps } from './CheckBox/CheckBox';
import ColorPicker, { ColorPickerProps } from './ColorPicker/ColorPicker';
import ColorPickerGradient, { ColorPickerGradientProps } from './ColorPickerGradient/ColorPickerGradient';
import styles from './Form.module.scss';
import Input, { InputProps } from './Input/Input';
import InputNumber, { InputNumberProps } from './InputNumber/InputNumber';
import InputText2, { InputText2Props } from './InputText2/InputText2';
import Radio, { RadioProps } from './Radio/Radio';
import Radio2 from './Radio2/Radio2';
import Radio3 from './Radio3/Radio3';
import RichTextEditor from './RichTextEditor/RichTextEditor';
import Select, { SelectProps } from './Select/Select';
import SelectButtonType, { SelectButtonTypeProps } from './SelectButtonType/SelectButtonType';
import SelectIcon, { SelectIconProps } from './SelectIcon/SelectIcon';

export type RenderItem<T> = (arg: T) => ReactNode;

export type InputFieldType =
  | 'input'
  | 'radio2'
  | 'radio3'
  | 'number'
  | 'radio'
  | 'checkbox'
  | 'file'
  | 'color-picker'
  | 'color-picker-gradient'
  | 'password'
  | 'select'
  | 'select-button'
  | 'select-icon'
  | 'input-text-2'
  | 'rich-text-editor';

export type FieldType = Partial<InputProps> &
  Partial<RadioProps> &
  Partial<CheckBoxProps> &
  Partial<RollSelectProps> &
  Partial<ColorPickerProps> &
  Partial<SelectProps> &
  Partial<ColorPickerGradientProps> &
  Partial<InputNumberProps> &
  Partial<InputText2Props> &
  Partial<SelectButtonTypeProps> &
  Partial<SelectIconProps> & {
    hidden?: boolean;
    fieldType: InputFieldType;
    fieldName: string;
    fieldId: string | number;
    label: string;
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
  style?: CSSProperties;
  className?: string;
}

const renderField1 = (arg: FieldType, onChange: (result: any) => void, onAnotherEvent?: (result: any) => void) => {
  if (!!arg.hidden) {
    return null;
  }
  switch (arg.fieldType) {
    case 'input':
    case 'password':
      return (
        <Input
          type={arg.fieldType}
          required={arg.required}
          regex={arg.regex}
          minLength={arg.minLength}
          maxLength={arg.maxLength}
          label={arg.label}
          defaultValue={arg.defaultValue}
          onChange={onChange}
          placeholder={arg.placeholder}
          key={arg.fieldId}
          autoSize={{ maxRows: 10, minRows: 3 }}
          style={{ width: '100%', margin: '5px 0' }}
        />
      );
    case 'input-text-2':
      return (
        <InputText2
          required={arg.required}
          regex={arg.regex}
          minLength={arg.minLength}
          maxLength={arg.maxLength}
          label={arg.label}
          disabled={arg.disabled}
          addonAfter={arg.addonAfter}
          addonBefore={arg.addonBefore}
          defaultValue={arg.defaultValue}
          placeholder={arg.placeholder}
          key={arg.fieldId}
          onChange={onChange}
        />
      );
    case 'number':
      return (
        <InputNumber
          step={arg.step}
          key={arg.fieldId}
          label={arg.label}
          min={arg.min}
          max={arg.max}
          onChange={onChange}
          defaultNumber={arg.defaultNumber}
        />
      );
    case 'radio':
      return (
        <Radio label={arg.label} data={arg.data ?? []} onClick={onChange} key={arg.fieldId} defaultCheckedValue={arg.defaultCheckedValue ?? ''} />
      );
    case 'radio2':
      return (
        <Radio2 label={arg.label} data={arg.data ?? []} onClick={onChange} key={arg.fieldId} defaultCheckedValue={arg.defaultCheckedValue ?? ''} />
      );
    case 'radio3':
      return <Radio3 label={arg.label} key={arg.fieldId} onClick={onChange} defaultCheckedValue={arg.defaultCheckedValue} />;
    case 'checkbox':
      return <CheckBox label={arg.label} defaultChecked={arg.defaultChecked} onChange={onChange} key={arg.fieldId} />;
    case 'file':
      return (
        <RollSelect
          defaultSelected={arg.defaultSelected}
          fieldName={arg.fieldName}
          onChoose={onAnotherEvent}
          multiple={arg.multiple}
          width={arg.width}
          height={arg.height}
          listImg={arg.listImg ?? []}
          onUploadFile={onChange}
          key={arg.fieldId}
        />
      );
    case 'color-picker':
      return <ColorPicker label={arg.label} defaultColor={arg.defaultColor} onChange={onChange} key={arg.fieldId} />;
    case 'select':
      return arg.optionsGroup ? (
        <Select key={arg.fieldId} defaultSelect={arg.defaultSelect} label={arg.label} optionsGroup={arg.optionsGroup} onChange={onChange} />
      ) : null;
    case 'select-button':
      return arg.options ? (
        <SelectButtonType key={arg.fieldId} label={arg.label} options={arg.options} onChange={onChange} defaultSelect={arg.defaultSelect} />
      ) : null;
    case 'select-icon':
      return arg.listIcon ? (
        <SelectIcon
          label={arg.label}
          key={arg.fieldId}
          onChoose={onChange}
          defaultClassIconSelected={arg.defaultClassIconSelected}
          listIcon={arg.listIcon}
        />
      ) : null;
    case 'color-picker-gradient':
      return (
        <ColorPickerGradient
          defaultColorLeft={arg.defaultColorLeft}
          defaultColorRight={arg.defaultColorRight}
          key={arg.fieldId}
          label={arg.label}
          onChange={onChange}
        />
      );
    case 'rich-text-editor':
      return (
        <RichTextEditor
          label={arg.label}
          onChange={onChange}
          placeholder={arg.placeholder}
          defaultValue={arg.defaultValue}
          className={arg.className}
          style={arg.style}
          key={arg.fieldId}
        />
      );
    default:
      return null;
  }
};

const Form: FC<FormProps> = ({ fields, onChange, onAnotherEvent, children, className, style }) => {
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
    <div className={`${styles.form} ${className}`} style={style}>
      <FormBase
        fields={fields}
        renderField={arg => renderField1(arg as any, handleChange(arg.fieldType, arg.fieldName), handleAnotherEvent(arg.fieldName))}
      >
        {children}
      </FormBase>
    </div>
  );
};

export default memo(Form);
