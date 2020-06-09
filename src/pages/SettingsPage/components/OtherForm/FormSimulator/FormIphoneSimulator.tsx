import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

export interface FormIphoneSimulatorProps {
  nowIndexSection: number;
}

const FormIphoneSimulator: FC<FormIphoneSimulatorProps> = ({ nowIndexSection }) => {

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  //Destructoring
  const { iphoneParams } = element;

  //Dispatch
  const changeInput = thunkChangeInput();

  // Handle
  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'input-text-2') {
        // Value of input
        changeInput({ fieldName: fieldName, value: result, nowIndexSection: nowIndexSection });
      }
    };
  };

  return (
    <div className={'Form Simulator'}>
      <Form
        fields={[
          {
            fieldId: 'input-ios-params',
            fieldName: 'iosParams',
            label: 'IOS Params',
            fieldType: 'input-text-2',
            addonBefore: 'exp://expo.io/',
            defaultValue: iphoneParams?.replace('exp://expo.io/', ''),
          }
        ]}
        onChange={handleChangeForm}
      />
    </div>
  );
};

export default FormIphoneSimulator;
