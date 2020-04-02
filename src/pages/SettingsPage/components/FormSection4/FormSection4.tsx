import React, { memo, FC } from 'react';
import Form, { FieldType } from 'components/Form/Form';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import { Button } from 'antd';
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
  const handleChangeForm = (fieldType: FormSection4Field['fieldType'], fieldName: string) => {
    return (result: any) => {
      if (fieldType === 'input') {
        changeInput(fieldName, result, nowIndexSection);
      }
      if (fieldType === 'radio') {
        changeRadio(fieldName, result, nowIndexSection);
      }
      if (fieldType === 'color-picker') {
        changeColor(fieldName, result, nowIndexSection);
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
            fieldId: 1,
            horizontal: true,
            defaultValue: mainTitle
          },
          {
            fieldType: 'radio',
            fieldName: 'alignMainTitle',
            defaultCheckedValue: alignMainTitle,
            fieldId: 2,
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
            fieldId: 3,
            defaultValue: colorMainTitle || '#000'
          },
          {
            fieldType: 'input',
            fieldName: 'text',
            fieldId: 4,
            horizontal: true,
            defaultValue: text
          },
          {
            fieldType: 'radio',
            fieldName: 'alignText',
            defaultCheckedValue: alignText,
            fieldId: 5,
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
            fieldId: 6,
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
