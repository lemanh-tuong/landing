import { Select as SelectAntd } from 'antd';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Select.module.scss';

const { Option, OptGroup } = SelectAntd;

export interface OptionSelect {
  value: string;
  label: string;
}

export interface OptionGroupSelect {
  groupName: string;
  options: OptionSelect[];
}

export interface SelectProps {
  label: string;
  optionsGroup: OptionGroupSelect[] | OptionGroupSelect;
  defaultSelect?: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ label, optionsGroup, defaultSelect = '', onChange }) => {
  const _renderOption = ({ value, label }: OptionSelect) => {
    return (
      <Option className={styles.option} key={uuidv4()} value={value}>
        <div className={`${styles.label}`}>{label}</div>
      </Option>
    );
  };

  if (Array.isArray(optionsGroup)) {
    return (
      <div className={styles.selectComponent}>
        <div className={styles.content}>
          <div className={styles.name}>{label}</div>
          <SelectAntd className={styles.selectList} defaultValue={defaultSelect} onChange={onChange} showArrow={false}>
            {optionsGroup.map(group => (
              <OptGroup label={group.groupName}>{group.options.map(option => _renderOption({ ...option }))}</OptGroup>
            ))}
          </SelectAntd>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.selectComponent}>
      <div className={styles.content}>
        <div className={styles.name}>{label}</div>
        <SelectAntd className={styles.selectList} defaultValue={defaultSelect} onChange={onChange} showArrow={false}>
          <OptGroup label={optionsGroup.groupName}>
            {optionsGroup.options.map(option => (
              <Option className={styles.option} key={uuidv4()} value={option.value}>
                <div className={`${styles.label}`}>{option.label}</div>
              </Option>
            ))}
          </OptGroup>
        </SelectAntd>
      </div>
    </div>
  );
};

export default Select;
