import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { ButtonNav } from 'components/Nav/Nav';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC, useState } from 'react';
import { TypeHref } from '../../FormButton/FormButton';

export interface SettingFormButtonProps extends ButtonNav {
  nowIndex: number;
}

const SettingFormButton: FC<SettingFormButtonProps> = ({ nowIndex, iconClass, href, text, type, backgroundColor }) => {
  const [isGradient, setIsGradient] = useState(false);
  const [typeHref, setTypeHref] = useState<TypeHref>('external');

  const changeInput = thunkChangeInputNav();

  const handleGradient = (result: boolean) => {
    setIsGradient(result);
  };

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
  };

  const handleChangeForm = (type: 'buttons' | 'navItems') => ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio' && fieldName === 'Type Href') {
        handleTypeHref(result);
      }
      if (fieldType === 'radio' && fieldName === 'isGradient') {
        handleGradient(result);
      }
      if (fieldType === 'input' || fieldType === 'select') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndex: nowIndex, type: type });
      }
    };
  };

  return (
    <div className="SettingFormButton">
      <Form
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
            fieldId: `type-href-button-nnav`,
            fieldType: 'radio',
            fieldName: 'Type Href',
            data: [
              {
                name: 'type href',
                value: 'external',
              },
              {
                name: 'type href',
                value: 'internal',
              },
            ],
            defaultCheckedValue: typeHref,
          },
          {
            fieldType: 'input',
            fieldName: 'href',
            defaultValue: href,
            fieldId: 'href-button-nav',
            hidden: !(typeHref === 'external')
          },
          {
            fieldType: 'select',
            fieldName: 'href',
            defaultValue: href,
            fieldId: 3,
            optionsGroup: {
              groupName: 'Link',
              options: [{ label: '/about', value: '/about' }, { value: '/', label: '/' }]
            },
            defaultSelect: '/',
            hidden: !(typeHref === 'internal')
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
            fieldId: 'is-backgorund-button-nav',
            fieldType: 'checkbox',
            fieldName: 'isGradient',
            defaultChecked: isGradient
          },
          {
            fieldId: 'background-button-nav',
            fieldName: 'backgroundColor',
            fieldType: 'color-picker',
            defaultColor: backgroundColor,
            hidden: isGradient
          },
          {
            fieldId: 'background-gradient-button-nav',
            fieldName: 'backgroundColor',
            fieldType: 'color-picker-gradient',
            defaultColor: backgroundColor,
            hidden: !isGradient
          }
        ]}
        onChange={handleChangeForm('buttons')}
      />
    </div>
  );
};

export default SettingFormButton;
