import React, { Component } from 'react';
import Form from 'components/Form/Form';
import { Option } from 'pages/SettingsPage/SettingsPage';

export type FormSection1Field<T> = T & {
    fieldType: 'input' | 'radio' | 'checkbox' | 'file';
    fieldName: string;

}

export interface FormSection1Props<T> {
  option: Option;
  onChange: (fieldName: string) => (result: any) => void; 
}

export const FormSection1 = <T extends any>({option, onChange}: FormSection1Props<T>) => {
  const { slider, data } = option;
  return <Form 
    fields={[
      {
        fieldType: 'input',
        fieldName: 'title',
        horizontal: true,
        defaultValue: 'Title'
      },
      {
        fieldType: 'input',
        fieldName: 'text',
        horizontal: true,
        defaultValue: 'Text'
      },
      {
        fieldType: 'radio',
        fieldName: 'align text',
        data: [
          {
            value: 'center',
            name: 'align text'
          },
          {
            value: 'left',
            name: 'align text'
          },
          {
            value: 'right',
            name: 'align text'
          },
        ],
      },
      {
        fieldType: 'radio',
        fieldName: 'align title',
        data: [
          {
            value: 'center',
            name: 'align title'
          },
          {
            value: 'left',
            name: 'align title'
          },
          {
            value: 'right',
            name: 'align title'
          },
        ],
      },
      {
        fieldType: 'checkbox',
        fieldName: 'slider',
        name: "Slider",
        checked: slider
      },
      {
        fieldType: 'file',
        fieldName: 'upload',
        hidden: !slider,
        listImg: data || [],
      }
    ]}
    onChange={onChange}
  />
};

export default FormSection1;