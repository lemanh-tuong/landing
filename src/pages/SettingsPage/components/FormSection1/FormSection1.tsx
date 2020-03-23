import React, { FC } from 'react';
import Form from 'components/Form/Form';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import { useSelector } from 'react-redux';
import { sections, sliderImgsGallery } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';
import { useMount } from 'hooks/useMount';
import thunkGetImageGallery from 'pages/SettingsPage/thunks/thunkGetImageGallery/thunkGetImageGallery';

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
  const sliderImgs = useSelector(sliderImgsGallery);
  //Destructoring
  const { slider } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeCheckBox = thunkChangeCheckBox();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();
  const uploadImageSection = thunkUploadFile();
  const getImageGallery = thunkGetImageGallery();

  //Handle
  const handleChangeForm = (fieldName: string) => {
    return (result: any) => {
      if (fieldName === 'mainTitle' || fieldName === 'text') {
        changeInput(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'alignMainTitle' || fieldName === 'alignText') {
        changeRadio(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'colorMainTitle' || fieldName === 'colorText' || fieldName === 'divider color') {
        changeColor(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'slider') {
        changeCheckBox(fieldName, result, nowIndexSection)
      }
      if (fieldName === 'sliderImgs') {
        uploadImageSection(fieldName, fieldName, result, nowIndexSection);
      }
    }
  }

  useMount(() => {
    getImageGallery('sliderImgs')
  })

  return (
    <div style={{ padding: 30, background: 'white' }}>
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'mainTitle',
            fieldId: 1,
            horizontal: true,
            defaultValue: 'Title'
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
          },
          {
            fieldType: 'input',
            fieldName: 'text',
            fieldId: 4,
            horizontal: true,
            defaultValue: 'Text'
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
          },
          {
            fieldType: 'checkbox',
            fieldName: 'slider',
            fieldId: 7,
            name: "Slider",
            checked: slider
          },
          {
            fieldType: 'file',
            fieldName: 'sliderImgs',
            fieldId: 8,
            hidden: !slider,
            listImg: sliderImgs || [],
          }
        ]}
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default FormSection1;
