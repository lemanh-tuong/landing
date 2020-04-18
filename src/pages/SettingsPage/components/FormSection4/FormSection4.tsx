import { Button } from 'antd';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export type FormSection4Field = FieldType;

export interface FormSection4Props {
  nowIndexSection: number
}

const FormSection4: FC<FormSection4Props> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { mainTitle, text, alignText, alignMainTitle, colorText, colorMainTitle } = element


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
            fieldId: 'section-4-field-1',
            horizontal: true,
            defaultValue: mainTitle
          },
          {
            fieldType: 'radio',
            fieldName: 'alignMainTitle',
            defaultCheckedValue: alignMainTitle,
            fieldId: 'section-4-field-2',
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
            fieldId: 'section-4-field-3',
            defaultValue: colorMainTitle || '#000'
          },
          {
            fieldType: 'input',
            fieldName: 'text',
            fieldId: 'section-4-field-4',
            horizontal: true,
            defaultValue: text
          },
          {
            fieldType: 'radio',
            fieldName: 'alignText',
            defaultCheckedValue: alignText,
            fieldId: 'section-4-field-5',
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
            fieldName: 'colorText',
            fieldId: 'section-4-field-6',
            defaultValue: colorText || '#000'
          },
        ]}
        onChange={handleChangeForm}
      />
      <Button size='large' shape='round'>
        <Link to={`/gallery?type=imageSectionCol&nowIndexSection=${nowIndexSection}&multiple=false`}>
          Change Image
        </Link>
      </Button>
    </div>
  )
};

export default memo(FormSection4);
