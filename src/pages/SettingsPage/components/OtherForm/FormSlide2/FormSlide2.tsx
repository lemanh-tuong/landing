import { Button } from 'antd';
import img1 from 'assets/img/settings/advanced-rating-and-reviews.png';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { Section3Props } from 'components/Section3/Section3';
import { sections } from 'pages/SettingsPage/selectors';
import thunkAddSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkAddSlide2/thunkAddSlide2';
import thunkChangeCheckBoxSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeCheckBoxSlide2/thunkChangeCheckBoxSlide2';
import thunkChangeColorSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeColorSlide2/thunkChangeColorSlide2';
import thunkChangeInputSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeInputSlide2/thunkChangeInputSlide2';
import thunkChangeRadioSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkChangeRadioSlide2/thunkChangeRadioSlide2';
import thunkDeleteSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkDeleteSlide2/thunkDeleteSlide2';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './FormSlide2.module.scss';

export interface FormSlide2Props {
  nowIndexSection: number;
  nowIndexSlide: number;
}

const slidePropertyDefault = (sectionId: string) =>
  ({
    imageSectionCol: { imgSrc: img1 },
    sectionId: sectionId,
    mainTitle: 'App Term Boxes Settings',
    alignMainTitle: 'left',
    hasDivider: true,
    dividerColor: '#000',
    reverse: true,
    text: 'Insert Listing Locations and Listing Categories block to your app by using App Term Boxes shortcode.',
  } as Omit<Section3Props, 'sectionid'>);

const FormSlide2: FC<FormSlide2Props> = ({ nowIndexSection, nowIndexSlide }) => {
  const elements = useSelector(sections);
  const { sliderSection } = elements[nowIndexSection];

  const {
    reverse,
    mainTitle,
    alignMainTitle,
    colorMainTitle,
    text,
    alignText,
    colorText,
    hasDivider,
    dividerColor,
    alignDivider,
    imageSectionCol,
  } = sliderSection?.[nowIndexSlide] as Section3Props;
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
      if (fieldType === 'input' || fieldType === 'rich-text-editor') {
        // result: string
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
    const id = uuidv4();
    addSlide({ slideProperty: slidePropertyDefault(id), nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  const handleDelete = () => {
    deleteSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  return (
    <div style={{ position: 'relative', border: '1px solid', borderRadius: 5, padding: 20 }} className="FormSlide2">
      <Form
        onChange={handleChangeForm}
        fields={[
          {
            fieldId: 'checkbox-reverse-section-slide-2',
            fieldName: 'reverse',
            label: 'Reverse',
            fieldType: 'checkbox',
            defaultChecked: !!reverse,
          },
          {
            fieldId: 'input-title-slide-2',
            fieldName: 'mainTitle',
            label: 'Main Title',
            fieldType: 'input',
            defaultValue: mainTitle,
          },
          {
            fieldId: 'radio-align-title-slide-2',
            fieldName: 'alignMainTitle',
            label: 'Align Main Title',
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
            label: 'Color Main Title',
            fieldType: 'color-picker',
            defaultColor: colorMainTitle,
          },
          {
            fieldId: 'input-text-slide-2',
            fieldName: 'text',
            label: 'Text',
            fieldType: 'rich-text-editor',
            defaultValue: text,
          },
          {
            fieldId: 'radio-text-slide-2',
            fieldName: 'alignText',
            label: 'Align Text',
            fieldType: 'radio',
            defaultCheckedValue: alignText,
            data: [
              {
                name: 'align-text-slide-2',
                value: 'left',
              },
              {
                name: 'align-text-slide-2',
                value: 'center',
              },
              {
                name: 'align-text-slide-2',
                value: 'right',
              },
            ],
          },
          {
            fieldId: 'color-text-slide-2',
            fieldName: 'colorText',
            label: 'Color Text',
            fieldType: 'color-picker',
            defaultColor: colorText,
          },
          {
            fieldId: 'checkbox-divider-slide-2',
            fieldName: 'hasDivider',
            label: 'Has Divider',
            fieldType: 'checkbox',
            defaultChecked: hasDivider,
          },
          {
            fieldId: 'color-divider-slide-2',
            fieldName: 'dividerColor',
            label: 'Divider Color',
            fieldType: 'color-picker',
            defaultColor: dividerColor,
            hidden: !hasDivider,
          },
          {
            fieldId: 'align-divider-slide-2',
            fieldName: 'alignDivider',
            label: 'Align Divider',
            fieldType: 'radio',
            defaultCheckedValue: alignDivider ?? 'left',
            hidden: !hasDivider,
            data: [
              {
                name: 'alignDividerSlide2',
                value: 'left',
              },
              {
                name: 'alignDividerSlide2',
                value: 'center',
              },
              {
                name: 'alignDividerSlide2',
                value: 'right',
              },
            ],
          },
        ]}
      >
        <Button className={styles.deleteBtn} icon={<i className="fas fa-trash"></i>} shape="circle-outline" size="large" onClick={handleDelete} />
        <Link
          className={styles.btn}
          to={`/admin/gallery?type=sliderSectionImg&nowIndexSection=${nowIndexSection}&nowIndexSlide=${nowIndexSlide}&multiple=false`}
        >
          <div className={styles.image} style={{ backgroundImage: `url('${imageSectionCol.imgSrc}')` }}></div>
          <i className={`far fa-image ${styles.icon}`}></i>
        </Link>
        <Button shape="round" size="large" type="default" style={{ margin: '10px 0' }} onClick={handleAddSlide}>
          Add Slide
        </Button>
      </Form>
    </div>
  );
};

export default FormSlide2;
