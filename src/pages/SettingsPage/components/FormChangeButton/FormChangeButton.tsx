import React, { memo, FC } from 'react';
import Form, { FieldType } from 'components/Form/Form';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';

export type FormChangeButtonField = FieldType

export interface FormChangeButtonProps {
  nowIndexSection: number;
}

const FormChangeButton: FC<FormChangeButtonProps> = ({ nowIndexSection }) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { textButton, hrefButton } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = (fieldType: FormChangeButtonField['fieldType'], fieldName: string) => {
    return (result: any) => {
      if (fieldType === 'input') {
        changeInput(fieldName, result, nowIndexSection);
      }
      if (fieldType === 'color-picker') {
        changeColor(fieldName, result, nowIndexSection);
      }
    }
  }
  return (
    <Form
      fields={[
        {
          fieldType: 'input',
          fieldName: 'textButton',
          defaultValue: textButton,
          fieldId: 1
        },
        {
          fieldType: 'input',
          fieldName: 'hrefButton',
          defaultValue: hrefButton,
          fieldId: 2
        },
        {
          fieldType: 'color-picker',
          fieldName: 'colorTextButton',
          fieldId: 3
        }
      ]}
      onChange={handleChangeForm}
    />
  );
};

export default memo(FormChangeButton);
