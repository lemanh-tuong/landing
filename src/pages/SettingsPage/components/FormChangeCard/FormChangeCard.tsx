import React, { memo } from 'react';
import Form from 'components/Form/Form';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { CardProps } from 'components/Card/Card';
import icon1 from '../../../../assets/img/web_icons/feature-icons/1-feature-icon.svg';
import icon2 from '../../../../assets/img/web_icons/feature-icons/2-feature-icon.svg';
import icon3 from '../../../../assets/img/web_icons/feature-icons/3-feature-icon.svg';
import icon4 from 'assets/img/web_icons/feature-icons/4-feature-icon.svg';
import { icon } from 'pages/SettingsPage/selectors';
import { useSelector } from 'react-redux';

export type FormSection1Field<T> = T & {
    fieldType: 'input' | 'radio' | 'checkbox' | 'file';
    fieldName: string;
}

export interface FormSection1Props {
  option: CardProps;
  onChange: (fieldName: string) => (result: any) => void;
  onAnotherEvent?: (result: any) => void;
}

export const FormChangeCard = ({option, onChange, onAnotherEvent}: FormSection1Props) => {

  const icons = useSelector(icon);

  return <Form
    fields={[
      {
        fieldType: 'input',
        fieldName: 'card title',
        horizontal: true,
        defaultValue: 'Card Text'
      },
      {
        fieldType: 'radio',
        fieldName: 'align card title',
        data: [
        {
          value: 'center',
          name: 'align card title'
        },
        {
          value: 'left',
          name: 'align card title'
        },
        {
          value: 'right',
          name: 'align card title'
        },
        ],
      },
      {
        fieldType: 'color-picker',
        fieldName: 'color card title',
        defaultValue: '#000'
      },
      {
        fieldType: 'input',
        fieldName: 'card text',
        defaultValue: 'Card Text'
      },
      {
        fieldType: 'radio',
        fieldName: 'align card text',
        data: [
          {
            value: 'center',
            name: 'align card text'
          },
          {
            value: 'left',
            name: 'align card text'
          },
          {
            value: 'right',
            name: 'align card text'
          },
        ],
      },
      {
        fieldType: 'color-picker',
        fieldName: 'color card text',
        defaultValue: '#000'
      },
      {
        fieldType: 'file',
        fieldName: 'card icon',
        listImg: icons ? [...icons] : [],
        width: 50,
        height: 50
      }
    ]}
    onChange={onChange}
    onAnotherEvent={onAnotherEvent}
  />
};

export default memo(FormChangeCard);
