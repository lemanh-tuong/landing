import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { navItems } from 'pages/SettingsPage/selectors';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

export interface FormNavProps {
  nowIndex: number;
}

type TypeHref = 'external' | 'internal';

const FormNav: FC<FormNavProps> = ({ nowIndex }) => {
  const [typeHref, setTypeHref] = useState<TypeHref>('external');

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
  };

  // Selector
  const nav = useSelector(navItems)[nowIndex];

  // Destructoring
  const { text, href } = nav;

  // Dispatch
  const changeInput = thunkChangeInputNav();

  //Handle
  const handleChangeTextButtonForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio') {
        handleTypeHref(result);
      }
      if (fieldType === 'input' || fieldType === 'select') {
        changeInput({ fieldName: fieldName, value: result, nowIndex: nowIndex });
      }
    };
  };

  return (
    <div className="formButton">
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'text',
            defaultValue: text,
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
            fieldName: 'href',
            defaultValue: href,
            fieldId: 2,
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
        ]}
        onChange={handleChangeTextButtonForm}
      />
    </div>
  );
};

export default FormNav;
