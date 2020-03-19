import React, { FC } from 'react';
import Form from 'components/Form/Form';
import { useSelector } from 'react-redux';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunkChangeCheckBox/thunkChangeCheckBox';

export type FormSection3Field = {
  fieldType: 'input' | 'radio' | 'checkbox' | 'file';
  fieldName: string;
  [key: string]: any
}

export interface FormSection3Props {
  nowIndexSection: number
}

export const FormSection3: FC<FormSection3Props> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { hasDivider, dividerColor, data, sectionId } = element;
  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeCheckBox = thunkChangeCheckBox();
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
      if (fieldName === 'upload image section') {
        uploadImageSection(sectionId, result, nowIndexSection);
      }
      if (fieldName === 'has divider') {
        changeCheckBox(fieldName, result, nowIndexSection);
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
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default FormSection3;
