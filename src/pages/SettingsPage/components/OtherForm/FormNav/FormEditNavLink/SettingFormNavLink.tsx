import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { NavItemType } from 'components/Nav/Nav';
import { listPage } from 'pages/ListPage/selectors';
import { ActionChangeInputNavPayload } from 'pages/SettingsPage/actions/actionsNav/actionChangeInputNav/actionChangeInputNav';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

export interface SettingsFormProps extends NavItemType {
  nowIndex: number;
}

type TypeHref = 'external' | 'internal';

const SettingsForm: FC<SettingsFormProps> = ({ nowIndex, target, href, text }) => {
  const [typeHref, setTypeHref] = useState<TypeHref>('external');

  const listPageName = useSelector(listPage);

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
  };

  // Dispatch
  const changeInput = thunkChangeInputNav();

  //Handle
  const handleChangeTextButtonForm = (type: ActionChangeInputNavPayload['type']) => ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio') {
        handleTypeHref(result);
      }
      if (fieldType === 'input' || fieldType === 'select') {
        changeInput({ fieldName: fieldName, value: result, nowIndex: nowIndex, type: type });
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
              options: listPageName.map(page => ({ value: `/${page}`, label: `/${page}` }))
            },
            defaultSelect: '/',
            hidden: !(typeHref === 'internal')
          },
          {
            fieldId: 'nav-select-target',
            fieldName: 'target',
            fieldType: 'select',
            optionsGroup: {
              groupName: '',
              options: [{ value: 'blank', label: 'blank' }, { label: 'self', value: 'self' }]
            },
            defaultSelect: target,
          }
        ]}
        onChange={handleChangeTextButtonForm('navItems')}
      />
    </div>
  );
};

export default SettingsForm;
