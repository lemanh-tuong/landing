import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInputButton2 from 'pages/SettingsPage/thunks/thunksButton2/thunkChangeInputButton2/thunkChangeInputButton2';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
            fieldName: 'href',
            label: 'href',
            defaultValue: nowButton?.href,
            fieldId: 2
          },
        ]}
        onChange={handleChangeForm}
      >
        <Link to={`/admin/gallery?type=imageButton&nowIndexSection=${nowIndexSection}&nowIndexButton=${nowIndexButton}&multiple=false`}>
          <img src={nowButton?.imgSrc || ''} alt='button' />
        </Link>
      </Form>
    </div>
  );
};

export default memo(FormButton2);
