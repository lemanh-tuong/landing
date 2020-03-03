import Button from 'components/Button/Button';
import ColorPicker from 'pages/SettingsPage/components/ColorPicker/ColorPicker';
import Select from 'pages/SettingsPage/components/Select/Select';
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
  onClick: (result: any) => void;
  data: TypeRadio[];
}

export interface Color {
  name: string;
  color: string;
}

export interface FieldsColor {
  data: Color[];
  defaultValue: Color;
}

export interface FormProps<TItemInput, TItemCheckBox, TItemRadio, TItemColor> {
  fieldsInput: Item<TItemInput>[] | Item<TItemInput>;
  renderItemInput: RenderItem<TItemInput>;
  fieldsCheckBox: Item<TItemCheckBox>[] | Item<TItemCheckBox>;
  renderItemCheckBox: RenderItem<TItemCheckBox>;
  fieldsRadio: Item<TItemRadio>[] | Item<TItemRadio>;
  renderItemRadio: RenderItem<TItemRadio>;
  fieldsColor: Item<TItemColor>[] | Item<TItemColor>;
  renderItemColor: RenderItem<TItemColor>;
  onSubmit?: () => void;
}

const Form = <TItemInput extends FieldInput, TItemCheckBox extends FieldCheckbox, TItemRadio extends FieldsRadio, TItemColor extends FieldsColor>({ fieldsInput, renderItemInput, fieldsCheckBox, renderItemCheckBox, fieldsRadio, renderItemRadio, onSubmit, fieldsColor, renderItemColor }: FormProps<TItemInput, TItemCheckBox, TItemRadio, TItemColor>) => {

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

  const _renderSelect = () => {
    if (fieldsColor instanceof Array) {
      return fieldsColor.map(field => <Select renderItem={({ color, name }) => <ColorPicker onClick={() => console.log()} name={name} color={color} />} data={field.data} defaultValue={field.defaultValue} />);
    }
    return <Select data={fieldsColor.data} defaultValue={fieldsColor.defaultValue} renderItem={({ color, name }) => <ColorPicker color={color} name={name} />} />;
  };

  return (
    <div className={styles.form}>
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
