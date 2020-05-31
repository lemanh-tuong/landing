import { Button } from 'antd';
import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { SlideType } from 'components/MockUp/MockUp';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkResponsiveSlides from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkResponsiveSlides/thunkResponsiveSlides';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormSlide from '../FormSlide/FormSlide';
import styles from './FormSlides.module.scss';

export type FormSlides = FieldType;

export interface FormSlidesProps {
  nowIndexSection: number;
  hasNavField: boolean;
  hasDotField: boolean;
  responsiveField: boolean;
  draggableField: boolean;
}

export const FormSlides: FC<FormSlidesProps> = ({ nowIndexSection, hasNavField, hasDotField, responsiveField, draggableField }) => {

  // State;
  const [nowTab, setTab] = useState<'general' | 'detail'>('general');
  const [canResponsive, setCanResponsive] = useState(false);

  const _handleChangeCanResponsive = (result: boolean) => {
    setCanResponsive(result);
  };

  const _handleChangeTab = (tabName: 'general' | 'detail') => {
    return () => setTab(tabName);
  };

  // Selector
  const element = useSelector(sections)[nowIndexSection];
  // Dispatch
  const changeInput = thunkChangeInput();
  const changeCheckBox = thunkChangeCheckBox();
  const responsiveSlides = thunkResponsiveSlides();
  //Destructoring
  const { sliderImgs, responsive, hasNav, navClass, hasDots, dotClass, fluid, itemShow, margin, draggable } = element;

  const handleChangeFormGeneral = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input-text-2' || 'number') {
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'checkbox' && fieldName === 'canResponsive') {
        _handleChangeCanResponsive(result);
      }
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection });
      }
    };
  };
  const handleResponsiveSlides = ({ fieldName }: OnChangeFuncArg) => {
    return (result: any) => {
      responsiveSlides({ value: result, nowIndexSection: nowIndexSection, minWidth: fieldName });
    };
  };

  // Render
  const _renderGeneralSettings = () => {
    return (
      <Form
        fields={[
          {
            fieldId: 1,
            fieldName: 'hasNav',
            label: 'Has Nav',
            fieldType: 'checkbox',
            defaultChecked: hasNav,
            hidden: !hasNavField
          },
          {
            fieldId: 2,
            fieldName: 'navClass',
            label: 'Nav Class',
            fieldType: 'input-text-2',
            defaultValue: navClass,
            hidden: !hasNav
          },
          {
            fieldId: 3,
            fieldName: 'hasDots',
            label: 'Has Dots',
            fieldType: 'checkbox',
            defaultChecked: hasDots,
            hidden: !hasDotField
          },
          {
            fieldId: 4,
            fieldName: 'dotClass',
            label: 'Dot Class',
            fieldType: 'input-text-2',
            defaultValue: dotClass,
            hidden: !hasDots
          },
          {
            fieldId: 5,
            fieldType: 'checkbox',
            label: 'Fluid',
            fieldName: 'fluid',
            defaultChecked: fluid,
          },
          {
            fieldId: 'draggable-slides',
            fieldType: 'checkbox',
            fieldName: 'draggable',
            label: 'Draggable',
            defaultChecked: !!draggable,
            hidden: !draggableField,
          },
          {
            fieldId: 6,
            fieldType: 'number',
            defaultNumber: itemShow,
            label: 'Ammount Item Show',
            fieldName: 'itemShow',
            min: 1,
            max: 4,
          },
          {
            fieldId: 7,
            fieldType: 'number',
            fieldName: 'margin',
            label: 'Margin',
            defaultNumber: margin,
            min: 10,
            max: 50
          },
          {
            fieldId: 8,
            fieldName: 'timeSlider',
            label: 'Time Delay',
            fieldType: 'input',
            defaultValue: '1000',
          },
          {
            fieldId: 9,
            fieldName: 'canResponsive',
            label: 'Can Responsive',
            fieldType: 'checkbox',
            defaultChecked: canResponsive,
            hidden: !responsiveField
          },
        ]}
        onChange={handleChangeFormGeneral}
      >
        {canResponsive ?
          <>
            <h1>Responsive</h1>
            <Form
              style={{ padding: 0 }}
              fields={[
                {
                  fieldId: '576px',
                  fieldName: '576px',
                  label: '576px',
                  fieldType: 'number',
                  defaultNumber: responsive?.['576px'] ?? 0
                },
                {
                  fieldId: '768px',
                  fieldName: '768px',
                  label: '768px',
                  fieldType: 'number',
                  defaultNumber: responsive?.['768px'] ?? 0
                },
                {
                  fieldId: '992px',
                  fieldName: '992px',
                  label: '992px',
                  fieldType: 'number',
                  defaultNumber: responsive?.['992px'] ?? 0
                },
                {
                  fieldId: '1200px',
                  fieldName: '1200px',
                  label: '1200px',
                  fieldType: 'number',
                  defaultNumber: responsive?.['1200px'] ?? 0
                },
              ]}
              onChange={handleResponsiveSlides}
            >
              <Button shape='round' size='large' danger>
                <Link to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&multiple=true`}>
                  Change Image
                </Link>
              </Button>
            </Form>
          </> : null
        }
      </Form>
    );
  };

  const _renderDetailSettings = () => {
    return (
      <>
        {sliderImgs?.map((slideProperty: SlideType, index: number) => <FormSlide slideProperty={slideProperty} key={`slide-${index}`} nowIndexSection={nowIndexSection} nowIndexSlide={index} />)}
      </>
    );
  };
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
        {nowTab === 'general' ? _renderGeneralSettings() : _renderDetailSettings()}
      </div>
    </div>
  );
};

export default memo(FormSlides);
