import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { buttons } from 'pages/SettingsPage/selectors';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export interface SettingFormButtonProps {
  nowIndex: number;
}

const SettingFormButton: FC<SettingFormButtonProps> = ({ nowIndex }) => {

  const listButtons = useSelector(buttons);
  const { iconClass, href, text, size, type } = listButtons[nowIndex];

  const changeInput = thunkChangeInputNav();

  const handleChangeForm = (type: 'buttons' | 'navItems') => ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input' || fieldType === 'select-button' || fieldType === 'radio2') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndex: nowIndex, type: type });
      }
    };
  };

  return (
    <div className="SettingFormButton">
      <Form
        style={{ border: '1px solid', borderRadius: 5 }}
        fields={[
          {
            fieldType: 'input',
            fieldName: 'text',
            defaultValue: text,
            fieldId: 'input-button-text'
          },
          {
            fieldName: 'iconClass',
            fieldId: 'icon-button-nav',
            fieldType: 'input',
            defaultValue: iconClass
          },
          {
            fieldType: 'input',
            fieldName: 'href',
            defaultValue: href,
            fieldId: 'href-button-nav',
          },
          {
            fieldId: 'type-button-nav',
            fieldName: 'type',
            fieldType: 'select-button',
            options: [
              {
                label: 'border',
                value: 'border'
              },
              {
                label: 'gradient',
                value: 'gradient'
              },
              {
                label: 'primary',
                value: 'primary'
              },
              {
                label: 'white',
                value: 'white'
              },
              {
                label: 'transparent',
                value: 'transparent'
              },
            ],
            defaultSelect: type,
          },
          {
            fieldId: 'size-button-nav',
            fieldName: 'size',
            fieldType: 'radio2',
            data: [
              {
                name: 'size button',
                value: 'default'
              },
              {
                name: 'size button',
                value: 'small'
              },
              {
                name: 'size button',
                value: 'middle'
              },
              {
                name: 'size button',
                value: 'large'
              }
            ],
            defaultCheckedValue: size
          },
        ]}
        onChange={handleChangeForm('buttons')}
      />
    </div>
  );
};

export default SettingFormButton;
