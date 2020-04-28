import { Button } from 'antd';
import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { SlideType } from 'components/MockUp/MockUp';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormSlide from '../FormSlide/FormSlide';
import styles from './FormSlides.module.scss';

export type FormSlides = FieldType;

export interface FormSlidesProps {
  nowIndexSection: number
}

export const FormSlides: FC<FormSlidesProps> = ({ nowIndexSection }) => {

  // State;
  const [nowTab, setTab] = useState<'general' | 'detail'>('general');

  const _handleChangeTab = (tabName: 'general' | 'detail') => {
    return () => setTab(tabName);
  }

  // Selector
  const element = useSelector(sections)[nowIndexSection];
  // Dispatch
  const changeInput = thunkChangeInput();
  const changeCheckBox = thunkChangeCheckBox();
  //Destructoring
  const { sliderImgs, hasNav, navClass, hasDots, dotClass, fluid, itemShow, margin } = element;

  const handleChangeFormGeneral = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input' || 'number') {
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection })
      }
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection })
      }
    }
  }

  // Render
  const _renderGeneralSettings = () => {
    return (
      <Form
        fields={[
          {
            fieldId: 1,
            fieldName: 'hasNav',
            fieldType: 'checkbox',
            defaultChecked: hasNav,
          },
          {
            fieldId: 2,
            fieldName: 'navClass',
            fieldType: 'input',
            defaultValue: navClass,
            hidden: !hasNav
          },
          {
            fieldId: 3,
            fieldName: 'hasDots',
            fieldType: 'checkbox',
            defaultChecked: hasDots,
          },
          {
            fieldId: 4,
            fieldName: 'dotClass',
            fieldType: 'input',
            defaultValue: dotClass,
            hidden: !hasDots
          },
          {
            fieldId: 5,
            fieldType: 'checkbox',
            fieldName: 'fluid',
            defaultChecked: fluid,
          },
          {
            fieldId: 6,
            fieldType: 'number',
            fieldName: 'itemShow',
            defaultNumber: itemShow,
            min: 1,
            max: 5,
          },
          {
            fieldId: 7,
            fieldType: 'number',
            fieldName: 'margin',
            defaultNumber: margin,
            min: 10,
            max: 50
          },
          {
            fieldId: 8,
            fieldName: 'timeSlider',
            fieldType: 'input',
            defaultValue: '1000',
          },
        ]}
        onChange={handleChangeFormGeneral}
      >
        <Button shape='round' size='large' danger>
          <Link to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&multiple=true`}>
            Change Image
          </Link>
        </Button>
      </Form>
    )
  }

  const _renderDetailSettings = () => {
    return (
      <>
        {sliderImgs?.map((slideProperty: SlideType, index: number) => <FormSlide slideProperty={slideProperty} key={`slide-${index}`} nowIndexSection={nowIndexSection} nowIndexSlide={index} />)}
      </>
    )
  }
  return (
    <div className={styles.formSlides}>
      <div className={styles.formSlidesTop}>
        <div className={`${styles.tabList} ${nowTab === 'general' ? styles.tab1 : styles.tab2}`}>
          <div className={styles.tab} onClick={_handleChangeTab('general')}>
            General Settings
          </div>
          <div className={styles.tab} onClick={_handleChangeTab('detail')}>
            Detail Settings
          </div>
        </div>
      </div>
      <div className={styles.formSlidesContent}>
        {nowTab === "general" ? _renderGeneralSettings() : _renderDetailSettings()}
      </div>
    </div>
  )
};

export default memo(FormSlides);
