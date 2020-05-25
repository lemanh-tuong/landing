import React, { Fragment, memo, FC } from 'react';
import styles from './CheckBox.module.scss';
import CheckBoxBase from 'components/FormBase/CheckBoxBase/CheckBoxBase';

export interface CheckBoxOption {
  defaultChecked?: boolean;
  name: string;
  reverse?: boolean;
  horizontal?: boolean;
  onChange?: (result: any) => void;
}

export interface CheckBoxProps extends CheckBoxOption {

}

const CheckBox: FC<CheckBoxProps> = ({ defaultChecked, name, horizontal = false, reverse = false, onChange }) => {

  const _renderDefault = (checked: boolean, onChange: () => void) => (
    <div className={`${styles.checkBox} ${reverse ? styles.reverse : null} ${horizontal ? styles.horizontal : null}`}>
      <label className={styles.checkBoxName}>
        {name}
      </label>
      <button className={styles.box} onClick={onChange}>
        {checked ? <i className="fas fa-check"></i> : <i style={{ color: 'white' }} className="far fa-square"></i>}
      </button>
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
