import React, { FC } from 'react';
import Form from 'components/Form/Form';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';
import { v4 as uuidv4 } from 'uuid';
export type FormSection1Field = {
  fieldType: 'input' | 'radio' | 'checkbox' | 'file';
  fieldName: string;
  [key: string]: any
}

export interface FormSection1Props {
  nowIndexSection: number;
}

export const FormSection1: FC<FormSection1Props> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { slider, data, sectionId } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeCheckBox = thunkChangeCheckBox();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();
  const uploadImageSection = thunkUploadFile();

  //Handle
  const handleChangeForm = (fieldName: string) => {
    return (result: any) => {
      if (fieldName === 'title' || fieldName === 'text' || fieldName === 'testInput') {
        changeInput(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'align title' || fieldName === 'align text') {
        changeRadio(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'title color' || fieldName === 'text color' || fieldName === 'divider color') {
        changeColor(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'slider') {
        changeCheckBox(fieldName, result, nowIndexSection)
      }
      if (fieldName === 'upload image slider') {
        uploadImageSection(sectionId, result, nowIndexSection);
      }
    }
  }

  return (
    <div style={{ padding: 30, background: 'white' }}>
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'title',
            fieldId: uuidv4(),
            horizontal: true,
            defaultValue: 'Title'
          },
          {
            fieldType: 'radio',
            fieldName: 'align title',
            fieldId: uuidv4(),
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
            fieldId: uuidv4(),
          },
          {
            fieldType: 'input',
            fieldName: 'text',
            fieldId: uuidv4(),
            horizontal: true,
            defaultValue: 'Text'
          },
          {
            fieldType: 'radio',
            fieldName: 'align text',
            fieldId: uuidv4(),
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
            fieldId: uuidv4(),
          },
          {
            fieldType: 'checkbox',
            fieldName: 'slider',
            fieldId: uuidv4(),
            name: "Slider",
            checked: slider
          },
          {
            fieldType: 'file',
            fieldName: 'upload image slider',
            fieldId: uuidv4(),
            hidden: !slider,
            listImg: data || [],
          }
        ]}
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default FormSection1;
