import { RenderItem } from 'components/Form/Form';
import React, { useState } from 'react';
import * as uuid from 'uuid';
import styles from './Radio.module.scss';

export interface RadioButton {
  name: string;
  value: string;
  checked?: boolean;
  renderItem?: RenderItem<{ name: string; value: string; checked?: boolean }>;
}

export interface RadioOption {
  name: string;
  data: RadioButton[];
  onClick?: (value: string) => void;
}

export interface RadioProps extends RadioOption {
  renderItem?: RenderItem<RadioOption>;
}

const Radio = ({ name, data, onClick, renderItem }: RadioProps) => {
  const [nowCheck, setNowCheck] = useState(-1);

  const handleClick = (value: string, index: number) => {
    return () => {
      onClick?.(value);
      setNowCheck(index);
    };
  };

  const _renderRadioItem = ({ name, value, checked }: RadioButton, index: number) => {
    return (
      <div className={styles.radioItem} key={uuid.v4()}>
        <label htmlFor={name}>{value}</label>
        <input type="radio" name={name} value={value} id={name} checked={!!checked || index === nowCheck} onClick={handleClick(value, index)} />
      </div>
    );
  };

  const _renderRadioList = () => {
    return data.map((item, index) => {
      return item.renderItem ? item.renderItem({ name: item.name, value: item.value, checked: item.checked }) : _renderRadioItem(item, index);
    });
  };

  const _renderDefault = () => (
    <div className={styles.radioForm}>
      <div className={styles.radioName}>
        {name}
      </div>
      <div className={styles.radioGroup}>
        {_renderRadioList()}
      </div>
    </div>
  );

  return _renderDefault();
};

export default Radio;
