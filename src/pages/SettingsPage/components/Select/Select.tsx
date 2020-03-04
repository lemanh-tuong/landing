import { RenderItem } from 'components/Form/Form';
import React, { useState, ReactNode } from 'react';
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
  renderInput?: RenderItem<T>;
  onChange: (arg: T) => void;
}

const Select = <T extends any>({ defaultValue, data, renderItem, renderInput, onChange }: SelectProps<T>) => {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (selectValue: T) => {
    return () => {
      onChange?.(selectValue);
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
        {renderItem(value)}
      </div>
      <div className={`${styles.selectList} ${open ? styles.open : ''}`}>
        {data.map(item => _renderSelect(item))}
      </div>
    </div>
  );
};

export default Select;
