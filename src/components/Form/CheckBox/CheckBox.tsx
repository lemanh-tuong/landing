import React, { Fragment, memo } from 'react';
import styles from './CheckBox.module.scss';
import { RenderItem } from '../Form';
import CheckBoxBase from 'components/FormBase/CheckBoxBase/CheckBoxBase';

export interface CheckBoxOption {
  defaultChecked?: boolean;
  name: string;
  reverse?: boolean;
  horizontal?: boolean;
  onClick?: (result: any) => void;
}

export interface CheckBoxProps extends CheckBoxOption {
  renderItem?: RenderItem<CheckBoxOption>;
}

const CheckBox = ({ defaultChecked, name, horizontal = false, renderItem, reverse = false, onClick }: CheckBoxProps) => {

  const _renderDefault = (checked: boolean, onChecked: () => void) => (
    <div className={`${styles.checkBox} ${reverse ? styles.reverse : null} ${horizontal ? styles.horizontal : null}`}>
      <label className={styles.checkBoxName}>
        {name}
      </label>
      <button className={styles.box} onClick={onChecked}>
        {checked ? <i className="fas fa-check"></i> : <i style={{ color: 'white' }} className="far fa-square"></i>}
      </button>
    </div>
  );

  return (
    <Fragment>
      <CheckBoxBase
        renderItem={_renderDefault}
        onChange={onClick}
        defaultChecked={defaultChecked}
      />
    </Fragment>
  );
};

export default memo(CheckBox);
