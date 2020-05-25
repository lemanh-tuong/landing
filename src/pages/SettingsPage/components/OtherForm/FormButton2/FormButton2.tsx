import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInputButton2 from 'pages/SettingsPage/thunks/thunksButton2/thunkChangeInputButton2/thunkChangeInputButton2';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

export type FormButton2Field = FieldType;

export interface FormButton2Props {
  nowIndexSection: number;
  nowIndexButton: number;
}

const FormButton2: FC<FormButton2Props> = ({ nowIndexSection, nowIndexButton }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const nowButton = element.buttons?.[nowIndexButton];

  //Dispatch
  const changeInput = thunkChangeInputButton2();
  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexButton: nowIndexButton });
      }
    };
  };

  return (
    <div className="formButton2">
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'imgSrc',
            defaultValue: nowButton?.imgSrc,
            fieldId: 1
          },
          {
            fieldType: 'input',
            fieldName: 'href',
            defaultValue: nowButton?.href,
            fieldId: 2
          },
        ]}
        onChange={handleChangeForm}
      />
    </div>
  );
};

export default memo(FormButton2);
