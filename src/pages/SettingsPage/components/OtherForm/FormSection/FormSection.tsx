import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeColor from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeColor/thunkChangeColor';
import thunkChangeSelect from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeSelect/thunkChangeSelect';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './FormSection.module.scss';

export interface FormSectionProps {
  nowIndexSection: number;
  canReverseCol?: boolean;
  canHasDivider?: boolean;
}

const FormSection: FC<FormSectionProps> = ({ nowIndexSection, canReverseCol = false, canHasDivider = false }) => {
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
        changeColor({ fieldName: fieldName, color: result.rgba, nowIndexSection: nowIndexSection })
      }
      if (fieldType === 'color-picker-gradient') {
        // string
        changeColor({ fieldName: fieldName, color: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'checkbox') {
        setIsGradient(result);
      }
    }
  }

  const handleChangeAnimationForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        changeCheckBox({ checked: result, fieldName: fieldName, nowIndexSection: nowIndexSection })
      }
      if (fieldType === 'select') {
        // Result = 'left' | 'right'
        changeSelect({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection })
      }
    }
  }

  const handleChangeReverse = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        changeCheckBox({ checked: result, fieldName: fieldName, nowIndexSection: nowIndexSection })
      }
    }
  }

  useEffect(() => {

  }, [isGradient])

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
              }
            ]}
            onChange={handleChangeAnimationForm}
          />
          {canReverseCol ?
            <Form
              fields={[
                {
                  fieldId: 'canReverse-section',
                  fieldName: 'reverse',
                  fieldType: 'checkbox',
                  defaultChecked: reverse
                },
              ]}
              onChange={handleChangeReverse}
            /> : null}
        </div>
      </div>
    </div>
  )
}


// {
//   fieldId: 1,
//   fieldName: 'backgroundColor',
//   fieldType: 'select',
//   defaultSelect: backgroundColor,
//   optionsGroup: [
//     {
//       groupName: 'gradient',
//       options: [
//         {
//           label: 'gradient-pink-orange',
//           value: 'linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)',
//         },
//         {
//           label: 'gradient-orange-pink',
//           value: 'linear-gradient(90deg, rgb(249, 120, 95) 0%,rgb(240, 98, 146)  100%)'
//         },

//         {
//           label: 'gradient-purple-blue',
//           value: 'linear-gradient(90deg, rgb(116, 45, 228) 0%, rgb(89, 192, 255) 100%)'
//         }
//       ]
//     }, {
//       groupName: 'color',
//       options: [
//         {
//           label: 'white-1',
//           value: 'rgba(255, 255, 255, 0.7)',
//         },
//         {
//           label: 'white-2',
//           value: 'rgba(255, 255, 255, 0.8)',
//         },
//         {
//           label: 'white-3',
//           value: 'rgba(255, 255, 255, 0.85)',
//         },
//         {
//           label: 'primary',
//           value: '#3ece7e',
//         },
//         {
//           label: 'secondary',
//           value: 'rgb(240, 98, 146)',
//         },
//       ]
//     }
//   ]
// }
export default FormSection;
