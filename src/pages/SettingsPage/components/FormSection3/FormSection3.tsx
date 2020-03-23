import React, { FC } from 'react';
import Form from 'components/Form/Form';
import { useSelector } from 'react-redux';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import { sections, imgSrcGallery, backgroundImageGallery } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkUploadFile from 'pages/SettingsPage/thunks/thunkUploadFile/thunkUploadFile';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkGetImageGallery from 'pages/SettingsPage/thunks/thunkGetImageGallery/thunkGetImageGallery';
import { useMount } from 'hooks/useMount';

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
  const imgSrcs = useSelector(imgSrcGallery);
  const backgroundImages = useSelector(backgroundImageGallery);

  //Destructoring
  const { hasDivider, dividerColor } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeCheckBox = thunkChangeCheckBox();
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
      if (fieldName === 'colorMainTitle' || fieldName === 'colorText' || fieldName === 'dividerColor') {
        changeColor(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'backgroundImage' || fieldName === 'imgSrc') {
        uploadImageSection(fieldName, fieldName, result, nowIndexSection);
      }
      if (fieldName === 'hasDivider') {
        changeCheckBox(fieldName, result, nowIndexSection);
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
          {
            fieldType: 'file',
            fieldName: 'imgSrc',
            fieldId: 9,
            listImg: imgSrcs || []
          },
          {
            fieldType: 'file',
            fieldName: "backgroundImage",
            fieldId: 10,
            listImg: backgroundImages || []
          },
        ]}
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default FormSection3;
