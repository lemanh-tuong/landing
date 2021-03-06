import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeSelect from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeSelect/thunkChangeSelect';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './FormSection.module.scss';

export interface FormSectionProps {
  nowIndexSection: number;
  canReverseCol?: boolean;
}

const FormSection: FC<FormSectionProps> = ({ nowIndexSection, canReverseCol = false }) => {
  const [isGradient, setIsGradient] = useState(false);
  //Selector
  const element = useSelector(sections)[nowIndexSection];
  // Destructoring
  const { backgroundColor, animation, positionAnimation, reverse } = element;

  //Dispatwch
  const changeColor = thunkChangeColor();
  const changeSelect = thunkChangeSelect();
  const changeCheckBox = thunkChangeCheckBox();
  // Handle
  const handleChangeBackgroundForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'color-picker') {
        // Result = {hex: stirng, rgba: string}
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'color-picker-gradient') {
        // string
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'checkbox') {
        setIsGradient(result);
      }
    };
  };

  const handleChangeOptionSection = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        changeCheckBox({ checked: result, fieldName: fieldName, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'select') {
        // Result = 'left' | 'right'
        changeSelect({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
    };
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.formContent}>
        <div className={styles.header}>
          <h2>Section Setting</h2>
        </div>
        <div className={styles.form}>

          <Form
            fields={[
              {
                fieldId: 'animation',
                fieldName: 'animation',
                fieldType: 'checkbox',
                defaultChecked: animation,
              },
              {
                fieldId: 'positionAnimation',
                fieldName: 'positionAnimation',
                fieldType: 'select',
                hidden: !animation,
                defaultSelect: positionAnimation,
                optionsGroup: {
                  groupName: 'position animation',
                  options: [
                    {
                      label: 'Left',
                      value: 'left'
                    },
                    {
                      label: 'right',
                      value: 'right',
                    }
                  ]
                }
              },
              {
                fieldId: 'reserve-section',
                fieldName: 'reverse',
                fieldType: 'checkbox',
                defaultChecked: reverse,
                hidden: !canReverseCol
              }
            ]}
            onChange={handleChangeOptionSection}
          />
          <Form
            fields={[
              {
                fieldId: 'checkbox-toggle-color',
                fieldName: 'isGradient',
                fieldType: 'checkbox',
                defaultChecked: isGradient,
              },
              {
                fieldId: 'color-1',
                fieldName: 'backgroundColor',
                fieldType: 'color-picker',
                defaultColor: backgroundColor,
                hidden: !!isGradient
              },
              {
                fieldId: 'gradient-1',
                fieldName: 'backgroundColor',
                fieldType: 'color-picker-gradient',
                hidden: !isGradient
              }
            ]}
            onChange={handleChangeBackgroundForm}
          />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
