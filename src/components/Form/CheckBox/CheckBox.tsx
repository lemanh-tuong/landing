import CheckBoxBase from 'components/FormBase/CheckBoxBase/CheckBoxBase';
import React, { FC, Fragment, memo } from 'react';
import styles from './CheckBox.module.scss';

export interface CheckBoxOption {
  defaultChecked?: boolean;
  label: string;
  reverse?: boolean;
  horizontal?: boolean;
  onChange?: (result: any) => void;
}

export interface CheckBoxProps extends CheckBoxOption {

}

const CheckBox: FC<CheckBoxProps> = ({ defaultChecked, label, horizontal = false, reverse = false, onChange }) => {

  const _renderDefault = (checked: boolean, onChange: () => void) => (
    <div className={`${styles.checkBox} ${reverse ? styles.reverse : null} ${horizontal ? styles.horizontal : null}`} onClick={onChange}>
      <button className={styles.box} >
        {checked ? <i className="fas fa-check"></i> : <i style={{ color: 'white' }} className="far fa-square"></i>}
      </button>
      <label className={styles.checkBoxName} >
        {label}
      </label>
    </div>
  );

  return (
    <Fragment>
      <CheckBoxBase
        renderItem={(checked, onChange) => _renderDefault(checked, onChange)}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
    </Fragment>
  );
};

export default memo(CheckBox);
