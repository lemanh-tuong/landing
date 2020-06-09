import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export interface FormAndroidSimulatorProps {
  nowIndexSection: number;
}

const FormAndroidSimulator: FC<FormAndroidSimulatorProps> = ({ nowIndexSection }) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { androidParams } = element;

  //Dispatch
  const changeInput = thunkChangeInput();

  // Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input-text-2') {
        // Value of input
        changeInput({ fieldName, value: result, nowIndexSection: nowIndexSection });
      }
    };
  };

  return (
    <div className={'Form Simulator'}>
      <Form
        fields={[
          {
            fieldId: 'input-androidParams-params',
            fieldName: 'androidParams',
            label: 'Android Params',
            fieldType: 'input-text-2',
            addonBefore: 'exp://expo.io/',
            defaultValue: androidParams?.replace('exp://expo.io/', ''),
          }
        ]}
        onChange={handleChangeForm}
      />
    </div>
  );
};

export default FormAndroidSimulator;
