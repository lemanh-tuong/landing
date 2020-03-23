import React, { memo, FC } from 'react';
import Form from 'components/Form/Form';
import { useSelector } from 'react-redux';
import { imgSrcGallery, backgroundImageGallery } from 'pages/SettingsPage/selectors';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';
import { useMount } from 'hooks/useMount';
import thunkGetImageGallery from 'pages/SettingsPage/thunks/thunkGetImageGallery/thunkGetImageGallery';

export type FormSection4Field = {
  fieldType: 'input' | 'radio' | 'checkbox' | 'file';
  fieldName: string;
  [key: string]: any;
}

export interface FormSection4Props {
  nowIndexSection: number
}

export const FormSection4: FC<FormSection4Props> = ({ nowIndexSection }) => {
  // Selector
  const imgSrcs = useSelector(imgSrcGallery);
  const backgroundImages = useSelector(backgroundImageGallery);

  //Destructoring

  // Dispatch
  const changeInput = thunkChangeInput();
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
      if (fieldName.includes('align')) {
        changeRadio(fieldName, result, nowIndexSection);
      }
      if (fieldName.includes('color') || fieldName.includes('Color')) {
        changeColor(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'imgSrc') {
        uploadImageSection(fieldName, fieldName, result, nowIndexSection);
      }
    }
  }

  useMount(() => {
    getImageGallery('imgSrc');
    getImageGallery('backgroundImage');
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
            defaultValue: '#000'
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
            defaultValue: '#000'
          },
          {
            fieldType: 'file',
            fieldName: 'backgroundImage',
            fieldId: 7,
            listImg: backgroundImages || []
          },
          {
            fieldType: 'file',
            fieldName: 'imgSrc',
            fieldId: 8,
            listImg: imgSrcs || []
          }
        ]}
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default memo(FormSection4);
