import { Button } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { Option } from 'pages/SettingsPage/SettingsPage';
import thunkAddSection from 'pages/SettingsPage/thunks/thunkAddSection/thunkAddSection';
import thunkDeleteSection from 'pages/SettingsPage/thunks/thunkDeleteSection/thunkDeleteSection';
import thunkMoveDownSection from 'pages/SettingsPage/thunks/thunkMoveDownSection/thunkMoveDownSection';
import thunkMoveUpSection from 'pages/SettingsPage/thunks/thunkMoveUpSection/thunkMoveUpSection';
import React, { FC, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ButtonFunc.module.scss';

export interface ButtonFuncProps {
  nowIndexSection: number;
  elementProperty: Option;
}

const defaultSection: Option = {
  sectionId: '',
  sectionName: '',
}

const ButtonFunc: FC<ButtonFuncProps> = ({ elementProperty, nowIndexSection }) => {
  let prepairAddProperty = useRef<Option>({ ...defaultSection });
  //Dispatch
  const addSection = thunkAddSection();
  const deleteSection = thunkDeleteSection();
  const moveUpSection = thunkMoveUpSection();
  const moveDownSection = thunkMoveDownSection();

  // Handle
  const handlePrepairAdd = (option: Omit<Option, 'sectionId'>) => {
    return () => {
      prepairAddProperty.current = {
        ...option,
        sectionName: option.sectionName,
        sectionId: uuidv4()
      };
    };
  };

  const handleAdd = (indexSection?: number) => {
    return () => {
      if (!!prepairAddProperty.current.sectionId) {
        addSection({ arg: { ...prepairAddProperty.current }, index: indexSection });
        prepairAddProperty.current = Object.assign({}, defaultSection);
      }
    }
  }

  const handleDelete = (arg: Option, indexSection: number) => {
    return () => {
      deleteSection({ arg: arg })
    }
  }

  const handleMoveUpSection = (nowIndexSection: number) => {
    return () => {
      moveUpSection(nowIndexSection);
    }
  }

  const handleMoveDownSection = (nowIndexSection: number) => {
    return () => {
      moveDownSection(nowIndexSection);
    }
  }

  const handleDuplicate = (element: Option, nowIndexSection: number) => {
    return () => {
      handlePrepairAdd(element)();
      handleAdd(nowIndexSection)();
    }
  }

  return (
    <ButtonGroup style={{ display: 'flex' }} align='right'>
      <Button className={styles.buttonFunc} onClick={handleMoveUpSection(nowIndexSection)} shape='circle' size='large' >
        <i className="fas fa-angle-up" />
      </Button>
      <Button className={styles.buttonFunc} onClick={handleMoveDownSection(nowIndexSection)} shape='circle' size='large' >
        <i className="fas fa-angle-down" />
      </Button>
      <Button className={styles.buttonFunc} onClick={handleDuplicate(elementProperty, nowIndexSection)} shape='circle' size='large' >
        <i className="fas fa-copy" />
      </Button>
      <Button className={styles.buttonFunc} onClick={handleDelete({ ...elementProperty }, nowIndexSection)} shape='circle' size='large' >
        <i className="fas fa-times" />
      </Button>
    </ButtonGroup>
  )
}

export default ButtonFunc;
