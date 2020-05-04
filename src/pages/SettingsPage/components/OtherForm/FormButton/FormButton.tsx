import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

export type FormButtonField = FieldType

export type TypeHref = 'external' | 'internal';

export interface FormButtonProps {
  nowIndex: number;
  type: 'section' | 'nav';
}

const FormButton: FC<FormButtonProps> = ({ nowIndex, type }) => {
  const [isGradient, setIsGradient] = useState(false);
  const [typeHref, setTypeHref] = useState<TypeHref>('external');

  const handleGradient = (result: boolean) => {
    setIsGradient(result);
  }

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
    console.log(typeHref);
  }

  // Selector
  const element = useSelector(sections)[nowIndex];

  // Destructoring
  const { textButton, hrefButton, backgroundButton } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeColor = thunkChangeColor();
  const changeInputNav = thunkChangeInputNav();
  //Handle
  const handleChangeTextButtonForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio') {
        handleTypeHref(result);
      }
      if (fieldType === 'input' || fieldType === 'select') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndex });
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: string, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndex });
      }
    }
  }

  const handleChangeNav = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio') {
        handleTypeHref(result);
      }
      if (fieldType === 'input' || fieldType === 'select') {
        changeInputNav({ fieldName: fieldName, nowIndex: nowIndex, value: result })
      }
    }
  }

  const handleChangeBackgroundButton = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        handleGradient(result);
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: stirng, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndex })
      }
      if (fieldType === 'color-picker-gradient') {
        //string
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndex });
      }
    }
  }

  if (type === 'nav') {
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
            fieldId: `type-href-${nowIndex}`,
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
            fieldName: 'hrefButton',
            defaultValue: hrefButton,
            fieldId: 2,
            hidden: !(typeHref === 'external')
          },
          {
            fieldType: 'select',
            fieldName: 'hrefButton',
            defaultValue: hrefButton,
            fieldId: 3,
            optionsGroup: {
              groupName: 'Link',
              options: [{ label: '/about', value: '/about' }, { value: '/', label: '/' }]
            },
            defaultSelect: '/',
            hidden: !(typeHref === 'internal')
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorTextButton',
            fieldId: 4
          },
        ]}
        onChange={handleChangeNav}
      />
    )
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
            fieldId: `type-href-${nowIndex}`,
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
            fieldName: 'hrefButton',
            defaultValue: hrefButton,
            fieldId: 2,
            hidden: !(typeHref === 'external')
          },
          {
            fieldType: 'select',
            fieldName: 'hrefButton',
            defaultValue: hrefButton,
            fieldId: 3,
            optionsGroup: {
              groupName: 'Link',
              options: [{ label: '/about', value: '/about' }, { value: '/', label: '/' }]
            },
            defaultSelect: '/',
            hidden: !(typeHref === 'internal')
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorTextButton',
            fieldId: 4
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
            hidden: isGradient,
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
