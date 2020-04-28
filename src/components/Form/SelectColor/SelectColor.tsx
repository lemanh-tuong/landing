import { Select as SelectAntd } from 'antd';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './SelectColor.module.scss';

const { Option, OptGroup } = SelectAntd;

type OptionSelect = {
  value: string;
  label: string;
}

type OptionGroupSelect = {
  groupName: string;
  options: OptionSelect[];
}

export interface SelectColorProps {
  fieldName: string;
  optionsGroup: OptionGroupSelect[] | OptionGroupSelect;
  defaultSelect?: string;
  onChange: (value: string) => void;
}

const SelectColor: FC<SelectColorProps> = ({ fieldName, optionsGroup, defaultSelect = '', onChange }) => {
  if (Array.isArray(optionsGroup)) {
    return (
      <div className={styles.selectComponent}>
        <div className={styles.content}>
          <div className={styles.name}>{fieldName}</div>
          <SelectAntd className={styles.selectList} defaultValue={defaultSelect} onChange={onChange} showArrow={false}>
            {optionsGroup.map(group => (
              <OptGroup label={group.groupName}>
                {group.options.map(option => <Option className={styles.option} key={uuidv4()} value={option.value}>
                  <div className={`${styles.label}`}>{option.label}</div>
                </Option>)}
              </OptGroup>
            ))}

          </SelectAntd>
        </div>
      </div >
    )
  }
  return (
    <div className={styles.selectComponent}>
      <div className={styles.content}>
        <div className={styles.name}>{fieldName}</div>
        <SelectAntd className={styles.selectList} defaultValue={defaultSelect} onChange={onChange} showArrow={false}>
          <OptGroup label={optionsGroup.groupName}>
            {optionsGroup.options.map(option => <Option className={styles.option} key={uuidv4()} value={option.value}>
              <div className={`${styles.label}`}>{option.label}</div>
            </Option>)
            }
          </OptGroup>
        </SelectAntd>
      </div>
    </div >
  )
}

export default SelectColor;
