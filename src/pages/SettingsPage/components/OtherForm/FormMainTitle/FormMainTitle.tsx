import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export type FormMainTitleField = FieldType

export interface FormMainTitleProps {
  nowIndexSection: number;
}

export const FormMainTitle: FC<FormMainTitleProps> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];
  console.log(element);

  //Destructoring
  const { mainTitle, alignMainTitle, colorMainTitle } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'radio') {
        changeRadio({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'color-picker') {
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection });
      }
    }
  }

  return (
    <div>
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'mainTitle',
            fieldId: 'section-1-field-1',
            horizontal: true,
            defaultValue: mainTitle
          },
          {
            fieldType: 'radio',
            fieldName: 'alignMainTitle',
            defaultCheckedValue: alignMainTitle,
            fieldId: 'section-1-field-2',
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
            fieldName: 'colorMainTitle',
            fieldId: 'section-1-field-3',
            defaultColor: colorMainTitle || '#000',
          },
        ]}
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default FormMainTitle;