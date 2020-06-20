import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { listPage, sections } from 'pages/SettingsPage/selectors';
import thunkChangeInputButton2 from 'pages/SettingsPage/thunks/thunksButton2/thunkChangeInputButton2/thunkChangeInputButton2';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TypeHref } from '../FormButton/FormButton';

export type FormButton2Field = FieldType;

export interface FormButton2Props {
  nowIndexSection: number;
  nowIndexButton: number;
}

const FormButton2: FC<FormButton2Props> = ({ nowIndexSection, nowIndexButton }) => {
  //State
  const [typeHref, setTypeHref] = useState<TypeHref>('internal');

  const handleTypeHref = (result: TypeHref) => {
    setTypeHref(result);
  };

  // Selector
  const element = useSelector(sections)[nowIndexSection];
  const listPageName = useSelector(listPage);
  // Destructoring
  const nowButton = element.buttons?.[nowIndexButton];

  //Dispatch
  const changeInput = thunkChangeInputButton2();
  //Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio') {
        handleTypeHref(result);
      }
      if (fieldType === 'input' || fieldType === 'select') {
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
            fieldId: `type-href`,
            fieldType: 'radio',
            fieldName: 'Type Href',
            label: 'Type Href',
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
            defaultCheckedValue: typeHref,
          },
          {
            fieldType: 'input',
            fieldName: 'href',
            label: 'href',
            defaultValue: nowButton?.href,
            fieldId: 2,
            hidden: typeHref === 'internal',
          },
          {
            fieldType: 'select',
            fieldName: 'href',
            label: 'Href',
            defaultValue: nowButton?.href,
            fieldId: 3,
            optionsGroup: {
              groupName: 'Link',
              options: listPageName.map(page => {
                if (page.isHome) return { value: '/', label: `${page.pageName}` };
                return { value: `${page.pathName}`, label: `${page.pageName}` };
              }),
            },
            defaultSelect: '/',
            hidden: !(typeHref === 'internal'),
          },
          {
            fieldId: 'button-select-target',
            fieldName: 'target',
            label: 'Target',
            fieldType: 'select',
            optionsGroup: {
              groupName: '',
              options: [
                { value: 'blank', label: 'blank' },
                { value: 'default', label: 'default' },
                { label: 'self', value: 'self' },
              ],
            },
            defaultSelect: nowButton?.target || 'default',
          },
        ]}
        onChange={handleChangeForm}
      >
        <Link to={`/admin/gallery?type=imageButton&nowIndexSection=${nowIndexSection}&nowIndexButton=${nowIndexButton}&multiple=false`}>
          <img src={nowButton?.imgSrc || ''} alt="button" />
        </Link>
      </Form>
    </div>
  );
};

export default memo(FormButton2);
