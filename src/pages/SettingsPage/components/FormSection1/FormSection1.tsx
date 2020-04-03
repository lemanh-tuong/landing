import React, { FC } from 'react';
import Form, { FieldType } from 'components/Form/Form';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';
import { Button } from 'antd';
import 'antd/es/style/css';
import { Link } from 'react-router-dom';
import FormChangeButton from '../FormChangeButton/FormChangeButton';

export type FormSection1Field = FieldType

export interface FormSection1Props {
  nowIndexSection: number;
}

export const FormSection1: FC<FormSection1Props> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { mainTitle, text, alignMainTitle, alignText, colorMainTitle, colorText } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = (fieldType: FormSection1Field['fieldType'], fieldName: string) => {
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
          {
            fieldType: 'input',
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
            fieldType: 'color-picker',
            fieldName: 'colorText',
            fieldId: 'section-1-field-6',
            defaultColor: colorText || '#000'
          }
        ]}
        onChange={handleChangeForm}
      />
      <FormChangeButton nowIndexSection={nowIndexSection} />
      <Button shape='round' size='large' danger>
        <Link to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&multiple=true`}>
          Change Image
        </Link>
      </Button>
    </div>
  )
};

export default FormSection1;
