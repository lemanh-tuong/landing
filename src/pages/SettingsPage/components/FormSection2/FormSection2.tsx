import React, { memo } from 'react';
import Form from 'components/Form/Form';
import { CardProps } from 'components/Card/Card';
import FormChangeCard from '../FormChangeCard/FormChangeCard';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { useSelector } from 'react-redux';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddCard from 'pages/SettingsPage/thunks/thunkAddCard/thunkAddCard';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunkChangeInput/thunkChangeInput';
import thunkChangeRadio from 'pages/SettingsPage/thunks/thunkChangeRadio/thunkChangeRadio';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunkChangeColor/thunkChangeColor';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

const cardDefault: CardProps = {
  titleCard: 'Paid listings',
  textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.',
  iconImg: icon1,
  hasIcon: true, bgColorIcon: 'gradient-pink-orange'
}

export type FormSection1Field<T> = T & {
  fieldType: 'input' | 'radio' | 'checkbox' | 'file';
  fieldName: string;
}

export interface FormSection1Props {
  nowIndexSection: number;
}

export const FormSection2 = ({ nowIndexSection }: FormSection1Props) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Dispatch
  const addCard = thunkAddCard();
  const changeInput = thunkChangeInput();
  const changeRadio = thunkChangeRadio();
  const changeColor = thunkChangeColor();

  // Handle
  const handleAdd = () => {
    addCard(cardDefault, nowIndexSection)
  }
  const handleChangeForm = (fieldName: string) => {
    return (result: any) => {
      if (fieldName === 'title' || fieldName === 'text' || fieldName === 'testInput') {
        changeInput(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'alignMainTitle' || fieldName === 'alignText') {
        changeRadio(fieldName, result, nowIndexSection);
      }
      if (fieldName === 'colorMainTitle' || fieldName === 'colorText' || fieldName === 'divider color') {
        changeColor(fieldName, result, nowIndexSection);
      }
    }
  }

  // Destructoring
  const { slider } = element;

  return (
    <div style={{ padding: 30, background: 'white' }}>
      <Form
        fields={[
          {
            fieldType: 'input',
            fieldName: 'title',
            fieldId: 1,
            horizontal: true,
            defaultValue: 'Title'
          },
          {
            fieldType: 'radio',
            fieldName: 'alignMainTitle',
            fieldId: 2,
            data: [
              {
                value: 'center',
                name: 'align title'
              },
              {
                value: 'left',
                name: 'align title'
              },
              {
                value: 'right',
                name: 'align title'
              },
            ],
          },
          {
            fieldType: 'checkbox',
            fieldName: 'slider',
            fieldId: 3,
            name: "Slider",
            checked: slider
          },
          {
            fieldType: 'color-picker',
            fieldName: 'colorMainTitle',
            fieldId: 4,
            name: "Color Title",
          }
        ]}
        onChange={handleChangeForm}
      />
      <FormChangeCard nowIndexSection={nowIndexSection} />
      <Button initial onClick={handleAdd}>
        <Icon fontAwesomeClass="fas fa-plus" />
      </Button>
    </div>
  )

};

export default memo(FormSection2);
