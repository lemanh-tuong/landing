import Form, { FieldCheckbox, FieldInput, FieldsRadio, FormProps } from 'components/Form/Form';
import React, { FC } from 'react';
import styles from './SettingsBox.module.scss';


export interface SettingsBoxProps extends FormProps<FieldInput, FieldCheckbox, FieldsRadio> {
  // mainTitle?: string;
  // text?: string;
  // onSubmit: ((arg: object) => () => void);
}

const SettingsBox: FC<SettingsBoxProps> = ({ fieldsInput, renderItemInput, fieldsCheckBox, renderItemCheckBox, fieldsRadio, renderItemRadio, onSubmit }) => {

  return (
    <div className={styles.settingsBox}>
      <Form
        fieldsInput={fieldsInput}
        renderItemInput={renderItemInput}
        fieldsCheckBox={fieldsCheckBox}
        renderItemCheckBox={renderItemCheckBox}
        fieldsRadio={fieldsRadio}
        renderItemRadio={renderItemRadio}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SettingsBox;
