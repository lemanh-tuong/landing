import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import PopUp from 'components/PopUp/PopUp';
import { listPage, sections } from 'pages/SettingsPage/selectors';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeRadio/thunkChangeRadio';
import thunkChangeSelect from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeSelect/thunkChangeSelect';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

export type FormButtonField = FieldType;

export type TypeHref = 'external' | 'internal';

export interface FormButtonProps {
  nowIndex: number;
}

const FormButton: FC<FormButtonProps> = ({ nowIndex }) => {
  const [isGradient, setIsGradient] = useState(false);
  const [typeHref, setTypeHref] = useState<TypeHref>('external');

  const handleGradient = (result: boolean) => {
    setIsGradient(result);
  };

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
  };

  // Selector
  const element = useSelector(sections)[nowIndex];
  const listPageName = useSelector(listPage);
  // Destructoring
  const { sectionId, textButton, hrefButton, backgroundButton, typeButton, sizeButton } = element;

  // Dispatch
  const changeInput = thunkChangeInput();
  const changeColor = thunkChangeColor();
  const changeSelect = thunkChangeSelect();
  const changeRadio = thunkChangeRadio();

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
      if (fieldType === 'select-button') {
        changeSelect({ fieldName: fieldName, value: result, nowIndexSection: nowIndex });
      }
    };
  };

  const handleChangeOptionButton = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        handleGradient(result);
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: stirng, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndex });
      }
      if (fieldType === 'color-picker-gradient') {
        //string
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndex });
      }
      if (fieldType === 'radio2') {
        changeRadio({ fieldName: fieldName, value: result, nowIndexSection: nowIndex });
      }
    };
  };

  const _renderForm = () => {
    return (
      <div className="formButton">
        <Form
          fields={[
            {
              fieldType: 'input',
              fieldName: 'textButton',
              label: 'Text Button',
              defaultValue: textButton,
              fieldId: 1
            },
            {
              fieldId: `type-href-${nowIndex}`,
              fieldType: 'radio',
              fieldName: 'Type Href',
              label: 'Type Href',
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
              label: 'Href Button',
              defaultValue: hrefButton,
              fieldId: 2,
              hidden: !(typeHref === 'external')
            },
            {
              fieldType: 'select',
              fieldName: 'hrefButton',
              label: 'Href Button',
              defaultValue: hrefButton,
              fieldId: 3,
              optionsGroup: {
                groupName: 'Link',
                options: listPageName.map(page => ({ value: `${page.pathName}`, label: `${page.pageName}` }))
              },
              defaultSelect: '/',
              hidden: !(typeHref === 'internal')
            },
            {
              fieldType: 'color-picker',
              fieldName: 'colorTextButton',
              label: 'Color Text Button',
              fieldId: 4
            },
            {
              fieldId: 5,
              fieldName: 'typeButton',
              label: 'Type Button',
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
              defaultSelect: typeButton,
            }
          ]}
          onChange={handleChangeTextButtonForm}
        />
        <Form
          fields={[
            {
              fieldId: 'size-button',
              fieldName: 'sizeButton',
              label: 'Size Button',
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
              defaultCheckedValue: sizeButton
            },
            {
              fieldId: 'isGradient',
              fieldName: 'Gradient',
              label: 'Gradient',
              fieldType: 'checkbox',
              defaultChecked: isGradient,
            },
            {
              fieldId: 'background-button',
              fieldName: 'backgroundButton',
              label: 'Background Button',
              fieldType: 'color-picker',
              hidden: isGradient,
              defaultColor: backgroundButton,
            },
            {
              fieldId: 'background-button',
              fieldName: 'backgroundButton',
              label: 'Background Button',
              fieldType: 'color-picker-gradient',
              hidden: !isGradient,
              defaultColor: backgroundButton,
            }
          ]}
          onChange={handleChangeOptionButton}
        />
      </div>
    );
  }
  return (
    <PopUp id={`button-${sectionId}`} title={<h3>Form Button</h3>} type='antd'>
      {_renderForm()}
    </PopUp>
  )
};

export default memo(FormButton);
