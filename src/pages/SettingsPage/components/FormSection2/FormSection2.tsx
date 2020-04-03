import React, { memo } from 'react';
import Form, { FieldType } from 'components/Form/Form';
import FormChangeCard from '../FormChangeCard/FormChangeCard';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';



export type FormSection2Field = FieldType;

export interface FormSection2Props {
  nowIndexSection: number;
}

const FormSection2 = ({ nowIndexSection }: FormSection2Props) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { mainTitle, alignMainTitle, colorTitleCard } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  // Handle
  const handleChangeForm = (fieldType: FormSection2Field['fieldType'], fieldName: string) => {
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
            fieldId: 'section-2-field-1',
            horizontal: true,
            defaultValue: mainTitle
          },
          {
            fieldType: 'radio',
            fieldName: 'alignMainTitle',
            fieldId: 'section-2-field-2',
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
            defaultCheckedValue: alignMainTitle
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorMainTitle',
            fieldId: 'section-2-field-3',
            defaultColor: colorTitleCard || '#000'

          }
        ]}
        onChange={handleChangeForm}
      />
      <FormChangeCard nowIndexSection={nowIndexSection} />
    </div>
  )

};

export default memo(FormSection2);
