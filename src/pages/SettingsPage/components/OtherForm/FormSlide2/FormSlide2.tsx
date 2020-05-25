import { Button } from 'antd';
import img1 from 'assets/img/settings/advanced-rating-and-reviews.png';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { Section3Props } from 'components/Section3/Section3';
import thunkAddSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkAddSlide2/thunkAddSlide2';
import thunkChangeCheckBoxSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeCheckBoxSlide2/thunkChangeCheckBoxSlide2';
import thunkChangeColorSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeColorSlide2/thunkChangeColorSlide2';
import thunkChangeInputSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeInputSlide2/thunkChangeInputSlide2';
import thunkChangeRadioSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeRadioSlide2/thunkChangeRadioSlide2';
import thunkDeleteSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkDeleteSlide2/thunkDeleteSlide2';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './FormSlide2.module.scss';

export interface FormSlide2Props {
  nowIndexSection: number;
  nowIndexSlide: number;
  sectionProperty: Section3Props;
}

const slidePropertyDefault: Omit<Section3Props, 'sectionid'> = {
  imageSectionCol: { imgSrc: img1 },
  sectionId: '1',
  mainTitle: 'App Term Boxes Settings',
  alignMainTitle: 'left',
  hasDivider: true,
  dividerColor: '#000',
  reverse: true,
  text: 'Insert Listing Locations and Listing Categories block to your app by using App Term Boxes shortcode.',
};

const FormSlide2: FC<FormSlide2Props> = ({ sectionProperty, nowIndexSection, nowIndexSlide }) => {
  const { reverse, mainTitle, alignMainTitle, colorMainTitle, text, alignText, colorText, hasDivider, dividerColor, imageSectionCol } = sectionProperty;
  //Dispatch
  const changeInput = thunkChangeInputSlide2();
  const changeCheckBox = thunkChangeCheckBoxSlide2();
  const changeColor = thunkChangeColorSlide2();
  const changeRadio = thunkChangeRadioSlide2();
  const addSlide = thunkAddSlide2();
  const deleteSlide = thunkDeleteSlide2();
  // Handle

  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input') {
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
      if (fieldType === 'radio') {
        changeRadio({ value: result, fieldName: fieldName, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
      if (fieldType === 'color-picker') {
        // Result = {hex: string, rgba: string}
        changeColor({ color: result.rgba, fieldName: fieldName, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
      }
    };
  };

  const handleAddSlide = () => {
    addSlide({ slideProperty: slidePropertyDefault, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  const handleDelete = () => {
    deleteSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  return (
    <div style={{ position: 'relative' }} className="FormSlide2">
      <h1>{mainTitle}</h1>
      <Form
        onChange={handleChangeForm}
        fields={[
          {
            fieldId: 'checkbox-reverse-section-slide-2',
            fieldName: 'reverse',
            fieldType: 'checkbox',
            defaultChecked: !!reverse,
          },
          {
            fieldId: 'input-title-slide-2',
            fieldName: 'mainTitle',
            fieldType: 'input',
            defaultValue: mainTitle,
          },
          {
            fieldId: 'radio-align-title-slide-2',
            fieldName: 'alignMainTitle',
            fieldType: 'radio',
            data: [
              {
                name: 'align title slide 2',
                value: 'left',
              },
              {
                name: 'align title slide 2',
                value: 'center',
              },
              {
                name: 'align title slide 2',
                value: 'right',
              },
            ],
            defaultCheckedValue: alignMainTitle,
          },
          {
            fieldId: 'color-title-slide-2',
            fieldName: 'colorMainTitle',
            fieldType: 'color-picker',
            defaultColor: colorMainTitle,
          },
          {
            fieldId: 'input-text-slide-2',
            fieldName: 'text',
            fieldType: 'input',
            defaultValue: text,
          },
          {
            fieldId: 'radio-text-slide-2',
            fieldName: 'alignText',
            fieldType: 'radio',
            defaultCheckedValue: alignText,
            data: [
              {
                name: 'align-text-slide-2',
                value: 'left'
              },
              {
                name: 'align-text-slide-2',
                value: 'center'
              },
              {
                name: 'align-text-slide-2',
                value: 'right'
              },
            ]
          },
          {
            fieldId: 'color-text-slide-2',
            fieldName: 'colorText',
            fieldType: 'color-picker',
            defaultColor: colorText,
          },
          {
            fieldId: 'checkbox-divider-slide-2',
            fieldName: 'hasDivider',
            fieldType: 'checkbox',
            defaultChecked: hasDivider,
          },
          {
            fieldId: 'color-divider-slide-2',
            fieldName: 'dividerColor',
            fieldType: 'color-picker',
            defaultColor: dividerColor,
            hidden: !hasDivider
          },
        ]}
      >
        <Button className={styles.deleteBtn} icon={<i className="fas fa-trash"></i>} shape='circle-outline' size='large' onClick={handleDelete} />
        <Link className={styles.btn} to={`/gallery?type=sliderSectionImg&nowIndexSection=${nowIndexSection}&nowIndexSlide=${nowIndexSlide}&multiple=false`}>
          <img className={styles.img} src={imageSectionCol.imgSrc} alt='Slide' style={{ width: 200, height: 200 }} />
          <i className={`far fa-image ${styles.icon}`}></i>
        </Link>
      </Form>
      <Button shape='round' size='large' type='dashed' style={{ margin: '5px 0' }} onClick={handleAddSlide}>
        Add Slide
      </Button>
    </div>
  );
};

export default FormSlide2;
