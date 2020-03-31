import React, { memo } from 'react';
import Form from 'components/Form/Form';
import FormChangeCard from '../FormChangeCard/FormChangeCard';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';



export type FormSection1Field<T> = T & {
  fieldType: 'input' | 'radio' | 'file';
  fieldName: string;
}

export interface FormSection1Props {
  nowIndexSection: number;
}

export const FormSection2 = ({ nowIndexSection }: FormSection1Props) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { mainTitle } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  // Handle


  const handleChangeForm = (fieldType: string, fieldName: string) => {
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
    <div style={{ padding: 30, background: 'white' }}>
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
            fieldId: 4,
            name: "Color Title",
          }
        ]}
        onChange={handleChangeForm}
      />
      <FormChangeCard nowIndexSection={nowIndexSection} />
    </div>
  )

};

export default memo(FormSection2);
