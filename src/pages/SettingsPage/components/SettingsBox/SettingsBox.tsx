import Form, { FieldCheckbox, FieldInput, FieldsSelect, FieldsRadio, FormProps } from 'components/Form/Form';
import React, { FC } from 'react';
import styles from './SettingsBox.module.scss';


export interface SettingsBoxProps extends FormProps<FieldInput, FieldCheckbox, FieldsRadio, FieldsSelect> {
  // mainTitle?: string;
  // text?: string;
  // onSubmit: ((arg: object) => () => void);
}

const SettingsBox: FC<SettingsBoxProps> = ({ fieldsInput, renderItemInput, fieldsCheckBox, renderItemCheckBox, fieldsRadio, renderItemRadio, fieldsSelect, renderSelect, onSubmit }) => {

  return (
    <div className={styles.settingsBox}>
      <Form
        fieldsInput={fieldsInput}
        renderItemInput={renderItemInput}
        fieldsCheckBox={fieldsCheckBox}
        renderItemCheckBox={renderItemCheckBox}
        fieldsRadio={fieldsRadio}
        renderItemRadio={renderItemRadio}
        fieldsSelect={fieldsSelect}
        renderSelect={renderSelect}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SettingsBox;

