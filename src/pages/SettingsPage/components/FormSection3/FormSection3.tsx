import React, { FC, memo } from 'react';
import Form from 'components/Form/Form';
import { useSelector } from 'react-redux';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunkChangeCheckBox/thunkChangeCheckBox';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/es/style/css';

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
  const { hasDivider, dividerColor, mainTitle, text } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeCheckBox = thunkChangeCheckBox();
  const changeColor = thunkChangeColor();

  //Handle
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
      if (fieldType === 'checkbox') {
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
            fieldId: 3,
            defaultValue: '#000'
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
            defaultValue: '#000'
          },
          {
            fieldType: 'checkbox',
            fieldName: 'hasDivider',
            fieldId: 7,
            name: "Has Divider",
            checked: !!hasDivider
          },
          {
            fieldType: 'color-picker',
            fieldName: 'dividerColor',
            fieldId: 8,
            defaultValue: dividerColor,
            hidden: !hasDivider,
          },
        ]}
        onChange={handleChangeForm}
      />
      <Button size='large' shape='round' >
        <Link to={`/gallery?type=imageSectionCol&nowIndexSection=${nowIndexSection}&multiple=false`}>
          Change Image
        </Link>
      </Button>
    </div>
  )
};

export default memo(FormSection3);
