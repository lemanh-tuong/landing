import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

export type FormDividerField = FieldType;

export interface FormDividerProps {
  nowIndexSection: number
}

export const FormDivider: FC<FormDividerProps> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { hasDivider, dividerColor } = element;

  // Dispatch
  const changeCheckBox = thunkChangeCheckBox();
  const changeColor = thunkChangeColor();

  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'color-picker') {
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection });
      }
    }
  }

  return (
    <div>
      <Form
        fields={[
          {
            fieldType: 'checkbox',
            fieldName: 'hasDivider',
            fieldId: 'section-3-field-7',
            name: "Has Divider",
            defaultChecked: !!hasDivider
          },
          {
            fieldType: 'color-picker',
            fieldName: 'dividerColor',
            fieldId: 'section-3-field-8',
            defaultValue: dividerColor,
            hidden: !hasDivider,
          },
        ]}
        onChange={handleChangeForm}
      />
    </div>
  )
};

export default memo(FormDivider);
