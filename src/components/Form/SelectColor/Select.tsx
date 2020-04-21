import { Select as SelectAntd } from 'antd';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Select.module.scss';

const { Option, OptGroup } = SelectAntd;

type OptionSelect = {
  value: 'gradient-pink-orange' | 'gradient-orange-pink' | 'gradient-purple-blue' | 'white-1' | 'white-2' | 'white-3' | 'primary' | 'secondary';
  label: 'gradient-pink-orange' | 'gradient-orange-pink' | 'gradient-purple-blue' | 'white-1' | 'white-2' | 'white-3' | 'primary' | 'secondary';
}

type OptionGroupSelect = {
  groupName: string;
  options: OptionSelect[];
}

export interface SelectProps {
  fieldName: string;
  optionsGroup: OptionGroupSelect[];
  defaultSelect?: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ fieldName, optionsGroup, defaultSelect = '', onChange }) => {
  return (
    <div className={styles.selectComponent}>
      <div className={styles.content}>
        <div className={styles.name}>{fieldName}</div>
        <SelectAntd className={styles.selectList} defaultValue={defaultSelect} onChange={onChange} showArrow={false}>
          {optionsGroup.map(group => (
            <OptGroup label={group.groupName}>
              {group.options.map(option => <Option className={styles.option} key={uuidv4()} value={option.value}>
                <div className={`${styles.colorName} ${styles[option.value]}`}>{option.label}</div>
              </Option>)}
            </OptGroup>
          ))}

        </SelectAntd>
      </div>
    </div>
  )
}

export default Select;
