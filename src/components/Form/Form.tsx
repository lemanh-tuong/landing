import Button from 'components/Button/Button';
import React, { ChangeEvent, ReactNode } from 'react';
import styles from './Form.module.scss';

export type Item<ItemT> = ItemT;

export type RenderItem<ItemT> = (arg: Item<ItemT>, key?: any) => ReactNode;

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
  onClick: (result: any) => void;
  data: TypeRadio[];
}

export interface FormProps<TItemInput, TItemCheckBox, TItemRadio> {
  fieldsInput: Item<TItemInput>[] | Item<TItemInput>;
  renderItemInput: RenderItem<TItemInput>;
  fieldsCheckBox: Item<TItemCheckBox>[] | Item<TItemCheckBox>;
  renderItemCheckBox: RenderItem<TItemCheckBox>;
  fieldsRadio: Item<TItemRadio>[] | Item<TItemRadio>;
  renderItemRadio: RenderItem<TItemRadio>;
  onSubmit?: () => void;
}

const Form = <TItemInput extends FieldInput, TItemCheckBox extends FieldCheckbox, TItemRadio extends FieldsRadio>({ fieldsInput, renderItemInput, fieldsCheckBox, renderItemCheckBox, fieldsRadio, renderItemRadio, onSubmit }: FormProps<TItemInput, TItemCheckBox, TItemRadio>) => {

  const _renderInput = () => {
    if (fieldsInput instanceof Array) {
      return fieldsInput.map((field, key) => renderItemInput(field, key));
    }
    return renderItemInput(fieldsInput);
  };

  const _renderCheckBox = () => {
    if (fieldsCheckBox instanceof Array) {
      return fieldsCheckBox.map((field, key) => renderItemCheckBox(field, key));
    }
    return renderItemCheckBox(fieldsCheckBox);
  };

  const _renderRadio = () => {
    if (fieldsRadio instanceof Array) {
      return fieldsRadio.map((field, key) => renderItemRadio(field, key));
    } else renderItemRadio(fieldsRadio);
  };

  return (
    <div className={styles.form}>
      {_renderInput()}
      {_renderCheckBox()}
      {_renderRadio()}
      <Button color='border' onClick={onSubmit}>
        Done!
      </Button>
    </div>
  );
};

export default Form;
