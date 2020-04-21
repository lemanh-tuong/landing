import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeSelect from 'pages/SettingsPage/thunks/thunkChangeSelect/thunkChangeSelect';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './FormSection.module.scss';

export interface FormSectionProps {
  nowIndexSection: number
}

const FormSection: FC<FormSectionProps> = ({ nowIndexSection }) => {

  //Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { backgroundColor } = element;

  //Dispatwch
  const changeSelect = thunkChangeSelect();

  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'select') {
        changeSelect({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection })
      }
    }
  }

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
                fieldId: 1,
                fieldName: 'backgroundColor',
                fieldType: 'select',
                defaultSelect: backgroundColor,
                optionsGroup: [
                  {
                    groupName: 'gradient',
                    options: [
                      {
                        label: 'gradient-pink-orange',
                        value: 'gradient-pink-orange',
                      },
                      {
                        label: 'gradient-orange-pink',
                        value: 'gradient-orange-pink'
                      },

                      {
                        label: 'gradient-purple-blue',
                        value: 'gradient-purple-blue'
                      }
                    ]
                  }, {
                    groupName: 'color',
                    options: [
                      {
                        label: 'white-1',
                        value: 'white-1',
                      },
                      {
                        label: 'white-2',
                        value: 'white-2',
                      },
                      {
                        label: 'white-3',
                        value: 'white-3',
                      },
                      {
                        label: 'primary',
                        value: 'primary',
                      },
                      {
                        label: 'secondary',
                        value: 'secondary',
                      },
                    ]
                  }
                ]
              }
            ]}
            onChange={handleChangeForm}
          />
        </div>
      </div>
    </div>
  )
}

export default FormSection;
