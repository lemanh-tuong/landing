import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeRadio/thunkChangeRadio';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export type FormTextField = FieldType;

export interface FormTextProps {
  nowIndexSection: number;
}

export const FormText: FC<FormTextProps> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { text, alignText, colorText, fontSizeText } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input' || fieldType === 'rich-text-editor') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'radio' || fieldType === 'radio3') {
        // Result = value of radio's checking
        changeRadio({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: string, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection });
      }
    };
  };

  return (
    <div>
      <Form
        fields={[
          {
            fieldType: 'rich-text-editor',
            fieldName: 'text',
            fieldId: 'section-1-field-4',
            horizontal: true,
            defaultValue: text
          },
          {
            fieldType: 'radio',
            fieldName: 'alignText',
            fieldId: 'section-1-field-5',
            defaultCheckedValue: alignText,
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
            fieldName: 'fontSizeText',
            fieldType: 'radio3',
            fieldId: 'font-size-text',
            defaultCheckedValue: fontSizeText
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorText',
            fieldId: 'section-1-field-6',
            defaultColor: colorText ?? '#000'
          }
        ]}
        onChange={handleChangeForm}
      />
    </div>
  );
};

export default FormText;
