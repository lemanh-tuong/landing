import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import FormChangeCard from '../FormChangeCard/FormChangeCard';



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
