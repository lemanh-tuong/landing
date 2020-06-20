import { Select as SelectAntd } from 'antd';
import Button, { ButtonProps } from 'components/Button/Button';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './SelectButtonType.module.scss';

const { Option } = SelectAntd;

export interface OptionSelect {
  value: ButtonProps['type'];
  label: ButtonProps['type'];
}

export interface SelectButtonTypeProps {
  label: string;
  options: OptionSelect[];
  defaultSelect?: string;
  onChange: (value: string) => void;
}

const SelectButtonType: FC<SelectButtonTypeProps> = ({ label, options, defaultSelect = '', onChange }) => {
  const _renderOption = ({ value, label }: OptionSelect) => {
    if (value) {
      return (
        <Option key={uuidv4()} value={value}>
          <div className={styles.option}>
            <div className={`${styles.label}`}>{label}</div>
            <Button text="Button" type={value} style={{ height: '100%', padding: 0 }} />
          </div>
        </Option>
      );
    }
  };

  return (
    <div className={styles.selectComponent}>
      <div className={styles.content}>
        <div className={styles.name}>{label}</div>
        <SelectAntd
          maxTagTextLength={520}
          size="large"
          className={styles.selectList}
          defaultValue={defaultSelect}
          onChange={onChange}
          showArrow={false}
        >
          {options.map(option => _renderOption(option))}
        </SelectAntd>
      </div>
    </div>
  );
};

export default SelectButtonType;
