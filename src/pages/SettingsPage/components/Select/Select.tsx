import { RenderItem } from 'components/Form/Form';
import React, { useState } from 'react';
import styles from './Select.module.scss';

// const data = [
//   {
//     name: 'red',
//     color: 'red'
//   },
//   {
//     name: 'blue',
//     color: 'blue'
//   },
// ];

export interface SelectProps<T> {
  data: T[];
  defaultValue: T;
  renderItem: RenderItem<T>;
}

const Select = <T extends any>({ defaultValue, data, renderItem }: SelectProps<T>) => {

  const [value, setValue] = useState<T>(defaultValue);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = <T extends any>(selectValue: T) => {
    return () => {
      setValue(selectValue);
      handleOpen();
    };
  };

  const _renderSelect = (props: T) => {
    return (
      <div className={styles.selectitem} onClick={handleChange(props)}>
        {renderItem(props)}
      </div>
    );
    // return <ColorPicker color={color} name={name} onClick={handleChange(color)} />;
  };

  return (
    <div className={styles.select}>
      <div className={styles.input} onClick={handleOpen}>
        {value}
      </div>
      <div className={`${styles.selectList} ${open ? styles.open : ''}`}>
        {data.map(item => _renderSelect(item))}
      </div>
    </div>
  );
};

export default Select;
