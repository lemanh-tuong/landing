import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { SelectItemType } from 'components/Form/SelectIcon/SelectIcon';
import { listPage, navItems } from 'pages/SettingsPage/selectors';
import thunkChangeInputNav from 'pages/SettingsPage/thunks/thunksNav/thunkChangeInputNav/thunkChangeInputNav';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

const data: SelectItemType[] = [
  {
    classIcon: 'fas fa-shopping-cart',
    nameIcon: 'cart',
  },
  {
    classIcon: 'fas fa-search',
    nameIcon: 'search',
  },
  {
    classIcon: 'fas fa-edit',
    nameIcon: 'save',
  },
  {
    classIcon: 'fas fa-angle-double-left',
    nameIcon: 'angle-double-left',
  },
  {
    classIcon: 'fas fa-angle-double-right',
    nameIcon: 'angle-double-right',
  },
  {
    classIcon: 'fas fa-angle-left',
    nameIcon: 'angle-left',
  },
  {
    classIcon: 'fas fa-angle-right',
    nameIcon: 'angle-right',
  },
];

export interface SettingsFormProps {
  nowIndex: number;
}

type TypeHref = 'external' | 'internal';
type TypeVariance = 'nav' | 'button';

const SettingsForm: FC<SettingsFormProps> = ({ nowIndex }) => {
  const [typeHref, setTypeHref] = useState<TypeHref>('internal');

  const listPageName = useSelector(listPage);
  const listNav = useSelector(navItems);

  const { href, text, target, variance, iconClass, size, type } = listNav[nowIndex];

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
  };

  // Dispatch
  const changeInput = thunkChangeInputNav();

  //Handle
  const handleChangeTextButtonForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio' && fieldName === 'Type Href') {
        handleTypeHref(result);
      }
      if (
        fieldType === 'input' ||
        fieldType === 'select' ||
        fieldType === 'radio' ||
        fieldType === 'radio2' ||
        fieldType === 'select-button'
      ) {
        changeInput({ fieldName: fieldName, value: result, nowIndex: nowIndex });
      }
      if (fieldType === 'select-icon') {
        // {classIcon: string, nameIcon: string}
        changeInput({ fieldName: fieldName, value: result.classIcon, nowIndex: nowIndex });
      }
    };
  };

  return (
    <div className="formButton">
      <Form
        style={{ border: '1px solid', borderRadius: 5, padding: 20 }}
        fields={[
          {
            fieldId: `variance-type`,
            fieldType: 'radio',
            fieldName: 'variance',
            label: 'Type Nav Item',
            defaultCheckedValue: variance || 'nav',
            data: [
              {
                name: 'type nav item',
                value: 'nav',
              },
              {
                name: 'type nav item',
                value: 'button',
              },
            ],
          },
          {
            fieldType: 'input',
            fieldName: 'text',
            label: 'Text',
            defaultValue: text,
            fieldId: 'nav-link-1',
          },
          {
            fieldName: 'iconClass',
            fieldId: 'icon-button-nav',
            fieldType: 'select-icon',
            listIcon: data,
            defaultClassIconSelected: iconClass || '',
            label: 'Icon class',
          },
          {
            fieldId: `type-href-${nowIndex}`,
            fieldType: 'radio',
            fieldName: 'Type Href',
            label: 'Type Href',
            defaultCheckedValue: typeHref,
            data: [
              {
                name: 'type href',
                value: 'internal',
              },
              {
                name: 'type href',
                value: 'external',
              },
            ],
          },
          {
            fieldType: 'input',
            fieldName: 'href',
            label: 'External Href',
            fieldId: 'nav-link-2',
            hidden: typeHref === 'internal',
          },
          {
            fieldType: 'select',
            fieldName: 'href',
            label: 'Internal Href',
            defaultValue: href || '/',
            fieldId: 'nav-link-3',
            optionsGroup: {
              groupName: 'Link',
              options: listPageName.map(page => {
                if (page.isHome) return { value: '/', label: `${page.pageName}` };
                return { value: `${page.pathName}`, label: `${page.pageName}` };
              }),
            },
            hidden: !(typeHref === 'internal'),
          },
          {
            fieldId: 'nav-select-target',
            fieldName: 'target',
            label: 'Target',
            fieldType: 'select',
            optionsGroup: {
              groupName: '',
              options: [
                { value: 'blank', label: 'blank' },
                { label: 'self', value: 'self' },
              ],
            },
            defaultSelect: target || 'self',
          },
          {
            fieldId: 'type-button-nav',
            fieldName: 'type',
            label: 'Type',
            fieldType: 'select-button',
            defaultSelect: type || 'primary',
            hidden: variance !== 'button',
            options: [
              {
                label: 'border',
                value: 'border',
              },
              {
                label: 'gradient',
                value: 'gradient',
              },
              {
                label: 'primary',
                value: 'primary',
              },
              {
                label: 'white',
                value: 'white',
              },
              {
                label: 'transparent',
                value: 'transparent',
              },
            ],
          },
          {
            fieldId: 'size-button-nav',
            fieldName: 'size',
            label: 'Size Button',
            fieldType: 'radio2',
            hidden: variance !== 'button',
            data: [
              {
                name: 'size button',
                value: 'default',
              },
              {
                name: 'size button',
                value: 'small',
              },
              {
                name: 'size button',
                value: 'middle',
              },
              {
                name: 'size button',
                value: 'large',
              },
            ],
            defaultCheckedValue: size || 'default',
          },
        ]}
        onChange={handleChangeTextButtonForm}
      />
    </div>
  );
};

export default memo(SettingsForm);
