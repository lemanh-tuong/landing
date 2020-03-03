import Form, { FieldCheckbox, FieldInput, FieldsColor, FieldsRadio, FormProps } from 'components/Form/Form';
import React, { FC } from 'react';
import styles from './SettingsBox.module.scss';


export interface SettingsBoxProps extends FormProps<FieldInput, FieldCheckbox, FieldsRadio, FieldsColor> {
  // mainTitle?: string;
  // text?: string;
  // onSubmit: ((arg: object) => () => void);
}

const SettingsBox: FC<SettingsBoxProps> = ({ fieldsInput, renderItemInput, fieldsCheckBox, renderItemCheckBox, fieldsRadio, renderItemRadio, fieldsColor, renderItemColor, onSubmit }) => {

  return (
    <div className={styles.settingsBox}>
      <Form
        fieldsInput={fieldsInput}
        renderItemInput={renderItemInput}
        fieldsCheckBox={fieldsCheckBox}
        renderItemCheckBox={renderItemCheckBox}
        fieldsRadio={fieldsRadio}
        renderItemRadio={renderItemRadio}
        fieldsColor={fieldsColor}
        renderItemColor={renderItemColor}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SettingsBox;

