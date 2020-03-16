import React, { Component } from 'react';
import Form from 'components/Form/Form';
import { Option } from 'pages/SettingsPage/SettingsPage';

export type FormSection3Field<T> = T & {
    fieldType: 'input' | 'radio' | 'checkbox' | 'file';
    fieldName: string;
}

export interface FormSection3Props<T> {
  option: Option;
  onChange: (fieldName: string) => (result: any) => void;
}

export const FormSection3 = <T extends any>({option, onChange}: FormSection3Props<T>) => {
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
            fieldType: 'checkbox',
            fieldName: 'has divider',
            name: "Has Divider",
            checked: !!hasDivider
          },
          {
            fieldType: 'color-picker',
            fieldName: 'divider color',
            defaultValue: dividerColor,
            hidden: !hasDivider,
          },
          {
            fieldType: 'file',
            fieldName: 'upload image section',
            listImg: data || []
          }
        ]}
        onChange={onChange}
      />
    </div>
  )
};

export default FormSection3;
