import React, { Component } from 'react';
import Form from 'components/Form/Form';
import { Option } from 'pages/SettingsPage/SettingsPage';

export type FormSection4Field<T> = T & {
    fieldType: 'input' | 'radio' | 'checkbox' | 'file';
    fieldName: string;
}

export interface FormSection4Props<T> {
  option: Option;
  onChange: (fieldName: string) => (result: any) => void;
}

export const FormSection4 = <T extends any>({option, onChange}: FormSection4Props<T>) => {
  const { hasDivider, dividerColor, data } = option;

  return (
    <div style={{padding: 30, background: 'white'}}>
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'title',
            horizontal: true,
            defaultValue: 'Title'
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
            fieldType: 'color-picker',
            fieldName: 'title color',
            defaultValue: '#000'
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
            fieldType: 'color-picker',
            fieldName: 'text color',
            defaultValue: '#000'
          },
          {
            fieldType: 'file',
            fieldName: 'upload img section',
            listImg: data || []
          }
        ]}
        onChange={onChange}
      />
    </div>
  )
};

export default FormSection4;
