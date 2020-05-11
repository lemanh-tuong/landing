import { Button } from 'antd';
import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeTypeMockup from 'pages/SettingsPage/thunks/thunksSlide&Mockup/thunkChangeTypeMockup/thunkChangeTypeMockup';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormSlides } from '../FormSlides/FormSlides';
import styles from './FormMockup.module.scss';

export type FormMockUpField = FieldType;

export interface FormMockUpProps {
  nowIndexSection: number;
}

export const FormMockUp: FC<FormMockUpProps> = ({ nowIndexSection }) => {

  // State;
  const [nowTab, setTab] = useState<'mockup' | 'slides'>('mockup');

  const _handleChangeTab = (tabName: 'mockup' | 'slides') => {
    return () => setTab(tabName);
  };

  //Dispatch
  const changeTypeMockup = thunkChangeTypeMockup();

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { typeMockUp } = element;

  const handleChangeFormGeneral = ({ fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'radio') {
        changeTypeMockup({ nowIndexSection: nowIndexSection, typeMockUp: result });
      }
    };
  };

  // Render
  const _renderGeneralSettings = () => {
    return (
      <Form
        fields={[
          {
            fieldId: 2,
            fieldName: 'typeMockUp',
            fieldType: 'radio',
            data: [
              {
                name: 'type mock up',
                value: 'Iphone'
              },
              {
                name: 'type mock up',
                value: 'Mac'
              },
            ],
            defaultCheckedValue: typeMockUp
          }
        ]}
        onChange={handleChangeFormGeneral}
      >
        <Button shape='round' size='large' danger>
          <Link to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&multiple=true`}>
            Change Image
        </Link>
        </Button>
      </Form>
    );
  };

  const _renderDetailSettings = () => {
    return (
      <FormSlides nowIndexSection={nowIndexSection} hasDotField={false} hasNavField={false} responsiveField={false} />
    );
  };

  return (
    <div className={styles.formMockup}>
      <div className={styles.formMockUpTop}>
        <div className={`${styles.tabList} ${nowTab === 'mockup' ? styles.tab1 : styles.tab2}`}>
          <div className={styles.tab} onClick={_handleChangeTab('mockup')}>
            Mock Up Setting
          </div>
          <div className={styles.tab} onClick={_handleChangeTab('slides')}>
            Slides Setting
          </div>
        </div>
      </div>
      <div className={styles.formMockUpContent}>
        {nowTab === 'mockup' ? _renderGeneralSettings() : _renderDetailSettings()}
      </div>
    </div>
  );
};

export default memo(FormMockUp);
