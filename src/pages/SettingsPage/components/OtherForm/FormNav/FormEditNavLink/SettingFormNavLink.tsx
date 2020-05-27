import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { ActionChangeInputNavPayload } from 'pages/SettingsPage/actions/actionsNav/actionChangeInputNav/actionChangeInputNav';
import { listPage, navItems } from 'pages/SettingsPage/selectors';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

export interface SettingsFormProps {
  nowIndex: number;
}

type TypeHref = 'external' | 'internal';

const SettingsForm: FC<SettingsFormProps> = ({ nowIndex }) => {
  // const [typeHref, setTypeHref] = useState<TypeHref>('external');

  const listPageName = useSelector(listPage);
  const listNav = useSelector(navItems);

  const { href, text, target } = listNav[nowIndex];

  // const handleTypeHref = (result: TypeHref) => {
  //   setTypeHref(result);
  // };

  // Dispatch
  const changeInput = thunkChangeInputNav();

  //Handle
  const handleChangeTextButtonForm = (type: ActionChangeInputNavPayload['type']) => ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      // if (fieldType === 'radio') {
      //   handleTypeHref(result);
      // }
      if (fieldType === 'input' || fieldType === 'select') {
        changeInput({ fieldName: fieldName, value: result, nowIndex: nowIndex, type: type });
      }
    };
  };

  return (
    <div className="formButton">
      <Form
        style={{ border: '1px solid', borderRadius: 5 }}
        fields={[
          {
            fieldType: 'input',
            fieldName: 'text',
            defaultValue: text,
            fieldId: 'nav-link-1'
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
          },
          {
            fieldType: 'input',
            fieldName: 'href',
            defaultValue: href,
            fieldId: 'nav-link-2',
          },
          {
            fieldType: 'select',
            fieldName: 'href',
            defaultValue: href,
            fieldId: 'nav-link-3',
            optionsGroup: {
              groupName: 'Link',
              options: listPageName.map(page => ({ value: `${page.pathName}`, label: `${page.pageName}` }))
            },
            defaultSelect: '/',
          },
          {
            fieldId: 'nav-select-target',
            fieldName: 'target',
            fieldType: 'select',
            optionsGroup: {
              groupName: '',
              options: [{ value: 'blank', label: 'blank' }, { value: 'default', label: 'default' }, { label: 'self', value: 'self' }]
            },
            defaultSelect: target,
          }
        ]}
        onChange={handleChangeTextButtonForm('navItems')}
      />
    </div>
  );
};

export default memo(SettingsForm);
