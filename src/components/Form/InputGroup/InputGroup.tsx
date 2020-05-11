import { Input } from 'antd';
import React, { FC } from 'react';

export interface InputItem {
  addonBefore?: string;
  placeholder?: string;
  defaultValue?: string;
  horizontal?: boolean;
}

export interface InputGroupProps {
  fieldName: string;
  inputGroup: InputItem[];
}

const InputGroup: FC<InputGroupProps> = ({ inputGroup, fieldName }) => {
  const _renderItem = ({ addonBefore }: InputItem) => {
    return <Input addonBefore={addonBefore} onChange={console.log} />;
  };
  return _renderItem(inputGroup[0]);
};

export default InputGroup;
