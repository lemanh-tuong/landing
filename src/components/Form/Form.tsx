import Button from 'components/Button/Button';
import { SelectProps } from 'pages/SettingsPage/components/Select/Select';
import React, { ChangeEvent, ReactNode } from 'react';
import styles from './Form.module.scss';

export type Item<ItemT> = ItemT;

export type RenderItem<ItemT> = (arg: Item<ItemT>, key?: any, onClick?: () => void) => ReactNode;

export interface FieldInput {
  name: string;
  type: 'text' | 'checkbox' | 'radio';
  required?: boolean;
  defaultValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  key?: any;
}

export interface FieldCheckbox {
  label: string;
  checked: boolean;
  onClick: () => void;
}

export interface TypeRadio {
  name: string;
  label: string;
  checked?: boolean;
  key?: any;
}

export interface FieldsRadio {
  label: string;
  data: TypeRadio[];
  onClick: (result: any) => void;
}

export interface Color {
  name: string;
  color: string;
}


export interface SelectItem {
  name: string;
  value: string;
  [key: string]: any;
}

export interface FieldsSelect extends SelectProps<SelectItem> {
  // data: Color[];
  // defaultValue: Color;
  // renderItem?: (arg: Color) => ReactNode;
  // renderInput?: (arg: Color) => ReactNode;
}


export interface FormProps<TItemInput, TItemCheckBox, TItemRadio, TItemSelect> {
  formName: string;


  fieldsInput?: Item<TItemInput>[] | Item<TItemInput>;
  renderItemInput?: RenderItem<TItemInput>;
  fieldsCheckBox?: Item<TItemCheckBox>[] | Item<TItemCheckBox>;
  renderItemCheckBox?: RenderItem<TItemCheckBox>;
  fieldsRadio?: Item<TItemRadio>[] | Item<TItemRadio>;
  renderItemRadio?: RenderItem<TItemRadio>;
  fieldsSelect?: Item<TItemSelect>[] | Item<TItemSelect>;
  renderSelect?: RenderItem<TItemSelect>;
  onSubmit?: () => void;
}

// const defaultProps: FormProps<FieldInput, FieldCheckbox, FieldsRadio, FieldsSelect> = {
//   fieldsInput: [],
//   renderItemInput: undefined,
//   fieldsCheckBox: [],
//   renderItemCheckBox: undefined,
//   fieldsRadio: [],
//   renderItemRadio: undefined,
//   fieldsSelect: [],
//   renderSelect: undefined
// };


const Form = <TItemInput extends FieldInput, TItemCheckBox extends FieldCheckbox, TItemRadio extends FieldsRadio, TItemSelect extends FieldsSelect>({ formName, fieldsInput, renderItemInput, fieldsCheckBox, renderItemCheckBox, fieldsRadio, renderItemRadio, onSubmit, fieldsSelect, renderSelect }: FormProps<TItemInput, TItemCheckBox, TItemRadio, TItemSelect>) => {

  const _renderInput = () => {
    if (fieldsInput instanceof Array) {
      return fieldsInput.map((field, key) => renderItemInput?.(field, key));
    }
    return fieldsInput ? renderItemInput?.(fieldsInput) : null;
  };

  const _renderCheckBox = () => {
    if (fieldsCheckBox instanceof Array) {
      return fieldsCheckBox.map((field, key) => renderItemCheckBox?.(field, key));
    }
    return fieldsCheckBox ? renderItemCheckBox?.(fieldsCheckBox) : null;
  };

  const _renderRadio = () => {
    if (fieldsRadio instanceof Array) {
      return fieldsRadio.map((field, key) => renderItemRadio?.(field, key));
    }
    return fieldsRadio ? renderItemRadio?.(fieldsRadio) : null;
  };

  const _renderSelect = () => {
    if (fieldsSelect instanceof Array) {
      return fieldsSelect.map(field => renderSelect?.(field));
    }
    return fieldsSelect ? renderSelect?.(fieldsSelect) : null;
  };

  const _renderSwitchButton = () => {

  };

  return (
    <div className={styles.form}>
      <div className={styles.formTop}>
        <div className={styles.formName}>
          {formName}
        </div>
      </div>
      {_renderInput()}
      {_renderCheckBox()}
      {_renderRadio()}
      {_renderSelect()}
      <Button color='border' onClick={onSubmit}>
        Done!
      </Button>
    </div>
  );
};

export default Form;
