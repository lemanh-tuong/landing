import MainTitle from 'components/MainTitle/MainTitle';
import Text from 'components/Text/Text';
import React, { FC, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RadioProps } from '../Radio/Radio';
import styles from './Radio3.module.scss';

export interface Radio3Button {
  value: 'xs' | 'sm' | 'md' | 'lg';
  name: string;
}

interface RenderRadioItemParam {
  name: Radio3Button['name'];
  value: Radio3Button['value'];
  index: number;
  defaultChecked?: boolean;
}

const radioButtons: Radio3Button[] = [
  {
    value: 'xs',
    name: 'fontSize',
  },
  {
    value: 'sm',
    name: 'fontSize',
  },
  {
    value: 'md',
    name: 'fontSize',
  },
  {
    value: 'lg',
    name: 'fontSize',
  },
];

type RenderRadioItem = (param: RenderRadioItemParam) => JSX.Element;

const Radio3: FC<Omit<RadioProps, 'data'>> = ({ label, onClick, defaultCheckedValue }) => {
  const handleClick = (value: string) => {
    return () => {
      onClick?.(value);
    };
  };

  const _renderSwitch = (fieldName: string, value: Radio3Button['value']) => {
    switch (fieldName) {
      case 'Size Text':
        return <Text text="Text" fontSizeText={value} styleText={{ margin: 0 }} />;
      case 'Size Main Title':
        return <MainTitle mainTitle="Title" fontSizeMainTitle={value} styleMainTitle={{ margin: 0 }} />;
      default:
        return null;
    }
  };

  const _renderRadioItem: RenderRadioItem = ({ index, name, value, defaultChecked }) => {
    return (
      <label htmlFor={`${value} ${name}`} className={styles.radioBtn} key={uuidv4()} onClick={handleClick(value)}>
        <input type="radio" className={styles.btn} id={`${value} ${name}`} name={name} tabIndex={index} defaultChecked={defaultChecked} />
        {_renderSwitch(label, value)}
      </label>
    );
  };

  const _renderRadioList = () => {
    return radioButtons?.map((item, index) => _renderRadioItem({ ...item, index: index, defaultChecked: item.value === defaultCheckedValue }));
  };

  const _renderDefault = () => (
    <div className={styles.radioForm}>
      <div className={styles.radioName}>{label}</div>
      <div className={styles.radioGroup}>{_renderRadioList()}</div>
    </div>
  );

  return _renderDefault();
};

export default memo(Radio3);
