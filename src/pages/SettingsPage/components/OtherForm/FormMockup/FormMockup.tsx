import { Button } from 'antd';
import 'antd/es/style/css';
import Form, { FieldType, OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormMockup.module.scss';
import FormSlide from './FormSlide';

export type FormMockUpField = FieldType;

export interface FormMockUpProps {
  nowIndexSection: number
}

export const FormMockUp: FC<FormMockUpProps> = ({ nowIndexSection }) => {

  // State;
  const [nowTab, setTab] = useState<'general' | 'detail'>('general');

  const _handleChangeTab = (tabName: 'general' | 'detail') => {
    return () => setTab(tabName);
  }

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { sliderImgs } = element;

  const handleChangeFormGeneral = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return () => {

    }
  }

  // Render
  const _renderGeneralSettings = () => {
    return (
      <Form
        fields={[
          {
            fieldId: 1,
            fieldName: 'timeSlider',
            fieldType: 'input',
            defaultValue: '1000',
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
    )
  }

  const _renderDetailSettings = () => {
    return (
      <>
        {sliderImgs?.map((slideProperty, index) => <FormSlide slideProperty={slideProperty} key={`slide-${index}`} nowIndexSection={nowIndexSection} nowIndexSlide={index} />)}
      </>
    )
  }
  return (
    <div className={styles.formMockup}>
      <div className={styles.formMockUpTop}>
        <div className={`${styles.tabList} ${nowTab === 'general' ? styles.tab1 : styles.tab2}`}>
          <div className={styles.tab} onClick={_handleChangeTab('general')}>
            General Settings
          </div>
          <div className={styles.tab} onClick={_handleChangeTab('detail')}>
            Detail Settings
          </div>
        </div>
      </div>
      <div className={styles.formMockUpContent}>
        {nowTab === "general" ? _renderGeneralSettings() : _renderDetailSettings()}
      </div>
    </div>
  )
};

export default memo(FormMockUp);
