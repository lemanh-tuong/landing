import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

export type FormButtonField = FieldType

export interface FormButtonProps {
  nowIndexSection: number;
}

const FormButton: FC<FormButtonProps> = ({ nowIndexSection }) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { textButton, hrefButton } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'color-picker') {
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection });
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

export default memo(FormButton);
