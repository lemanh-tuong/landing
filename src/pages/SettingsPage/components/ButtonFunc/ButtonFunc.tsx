import { Button } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import PopUp from 'components/PopUp/PopUp';
import { Option } from 'pages/SettingsPage/SettingsPage';
import thunkDeleteSection from 'pages/SettingsPage/thunks/thunkDeleteSection/thunkDeleteSection';
import thunkDuplicateSection from 'pages/SettingsPage/thunks/thunkDuplicateSection/thunkDuplicateSection';
import thunkMoveDownSection from 'pages/SettingsPage/thunks/thunkMoveDownSection/thunkMoveDownSection';
import thunkMoveUpSection from 'pages/SettingsPage/thunks/thunkMoveUpSection/thunkMoveUpSection';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ButtonFunc.module.scss';

export interface ButtonFuncProps {
  nowIndexSection: number;
  elementProperty: Option;
}

const ButtonFunc: FC<ButtonFuncProps> = ({ elementProperty, nowIndexSection }) => {
  //Dispatch
  const duplicateSection = thunkDuplicateSection();
  const deleteSection = thunkDeleteSection();
  const moveUpSection = thunkMoveUpSection();
  const moveDownSection = thunkMoveDownSection();

  // Handle
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
      duplicateSection({ data: { ...element, sectionId: uuidv4() }, nowIndexSection: nowIndexSection })
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
      <Button className={styles.buttonFunc} onClick={PopUp.show(`section-${elementProperty.sectionId}`)} shape='circle' size='large'>
        <i className="fas fa-cog" />
      </Button>
      <Button className={styles.buttonFunc} onClick={handleDelete({ ...elementProperty }, nowIndexSection)} shape='circle' size='large' >
        <i className="fas fa-times" />
      </Button>
    </ButtonGroup>
  )
}

export default ButtonFunc;
