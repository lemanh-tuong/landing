import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import PopUp from 'components/PopUp/PopUp';
import { sections } from 'pages/SettingsPage/selectors';
import { Option } from 'pages/SettingsPage/SettingsPage';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeRadio/thunkChangeRadio';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export type FormMainTitleField = FieldType;

export interface FormMainTitleProps {
  nowIndexSection: number;
  sectionId: Option['sectionId'];
}

export const FormMainTitle: FC<FormMainTitleProps> = ({ nowIndexSection, sectionId }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'radio' || fieldType === 'radio3') {
        // Result = value of radio's checking
        changeRadio({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: string, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection });
      }
    };
  };

  return (
    <PopUp id={`mainTitle-${sectionId}`} type='antd' title={<h3>Form Main Title</h3>}>
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
                  value: 'left',
                  name: 'align title'
                },
                {
                  value: 'center',
                  name: 'align title'
                },
                {
                  value: 'right',
                  name: 'align title'
                },
              ],
            },
            {
              fieldId: 'fontSizeMainTitle',
              fieldType: 'radio3',
              fieldName: 'fontSizeMainTitle',
              defaultCheckedValue: fontSizeMainTitle,
            },
            {
              fieldType: 'color-picker',
              fieldName: 'colorMainTitle',
              fieldId: 'section-1-field-3',
              defaultColor: colorMainTitle ?? '#000',
            },
          ]}
          onChange={handleChangeForm}
        />
      </div>
    </PopUp>
  );
};

export default FormMainTitle;
