import React, { FC, useState } from 'react';
import styles from './SelectIcon.module.scss';

export interface SelectItemType {
  nameIcon: string;
  classIcon: string;
}

export interface SelectIconProps {
  listIcon: SelectItemType[];
  onChoose?: (result: SelectItemType) => void;
  defaultClassIconSelected?: string;
  label: string;
}

const SelectIcon: FC<SelectIconProps> = ({ listIcon, defaultClassIconSelected, label, onChoose }) => {
  const [selected, setSelected] = useState<string>(defaultClassIconSelected || '');
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleChoose = (iconProperty: SelectItemType) => {
    return () => {
      onChoose?.(iconProperty);
      setSelected(iconProperty.classIcon);
    };
  };

  const _renderItem = ({ classIcon, nameIcon }: SelectItemType) => {
    const isSelected = selected === classIcon;
    return (
      <div className={`${styles.selectItem} ${isSelected ? styles.selected : ''}`} onClick={handleChoose({ classIcon, nameIcon })}>
        <div className={styles.icon}>
          <i className={classIcon}></i>
        </div>
        <div className={styles.nameIcon}>
          <p>{nameIcon}</p>
        </div>
      </div>
    );
  };

  const _renderListSelects = () => {
    return listIcon.map(({ nameIcon, classIcon }) => _renderItem({ classIcon, nameIcon }));
  };

  const _renderLabel = () => {
    return (
      <div className={styles.label} onClick={handleShow}>
        <span>{label}</span>
        <i className={selected} />
        {show && <div className={styles.selectList}>{_renderListSelects()}</div>}
      </div>
    );
  };

  return <div className={styles.selectIcon}>{_renderLabel()}</div>;
};

export default SelectIcon;
