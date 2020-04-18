import 'antd/es/style/css';
import { FieldType } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import FormSlide from './FormSlide';

export type FormMockUpField = FieldType;

export interface FormMockUpProps {
  nowIndexSection: number
}

export const FormMockUp: FC<FormMockUpProps> = ({ nowIndexSection }) => {
  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { sliderImgs } = element;

  return (
    <div>
      {sliderImgs?.map((slide, indexSlide) => (
        <FormSlide
          nowIndexSection={nowIndexSection}
          nowIndexSlide={indexSlide}
          slideProperty={slide}
        />
      ))}
    </div>
  )
};

export default memo(FormMockUp);
