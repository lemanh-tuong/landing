import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

export type FormButtonField = FieldType

export interface FormButtonProps {
  nowIndexSection: number;
}

const FormButton: FC<FormButtonProps> = ({ nowIndexSection }) => {
  const [isGradient, setIsGradient] = useState(false);

  const handleGradient = () => {
    setIsGradient(!isGradient);
  }

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { textButton, hrefButton, backgroundButton } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeTextButtonForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: string, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection });
      }
    }
  }

  const handleChangeBackgroundButton = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        handleGradient();
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: stirng, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection })
      }
      if (fieldType === 'color-picker-gradient') {
        //string
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection });
      }
    }
  }

  return (
    <div className="formButton">
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
          },
        ]}
        onChange={handleChangeTextButtonForm}
      />
      <Form
        fields={[
          {
            fieldId: 'isGradient',
            fieldName: 'Gradient',
            fieldType: 'checkbox',
            defaultChecked: isGradient,
          },
          {
            fieldId: 'background-button',
            fieldName: 'backgroundButton',
            fieldType: 'color-picker',
            hidden: !!isGradient,
            defaultColor: backgroundButton,
          },
          {
            fieldId: 'background-button',
            fieldName: 'backgroundButton',
            fieldType: 'color-picker-gradient',
            hidden: !isGradient,
            defaultColor: backgroundButton,
          }
        ]}
        onChange={handleChangeBackgroundButton}
      />
    </div>
  );
};

export default memo(FormButton);
