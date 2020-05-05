import { Button, Popover } from 'antd';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import PopUp from 'components/PopUp/PopUp';
import { sections } from 'pages/SettingsPage/selectors';
import { Option } from 'pages/SettingsPage/SettingsPage';
import thunkDeleteSection from 'pages/SettingsPage/thunks/thunksSection/thunkDeleteSection/thunkDeleteSection';
import thunkDuplicateSection from 'pages/SettingsPage/thunks/thunksSection/thunkDuplicateSection/thunkDuplicateSection';
import thunkMoveDownSection from 'pages/SettingsPage/thunks/thunksSection/thunkMoveDownSection/thunkMoveDownSection';
import thunkMoveUpSection from 'pages/SettingsPage/thunks/thunksSection/thunkMoveUpSection/thunkMoveUpSection';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './ButtonFunc.module.scss';

export interface ButtonFuncProps {
  nowIndexSection: number;
  elementProperty: Option;
}

const ButtonFunc: FC<ButtonFuncProps> = ({ elementProperty, nowIndexSection }) => {

  //Selectors
  const elements = useSelector(sections);

  //Dispatch
  const duplicateSection = thunkDuplicateSection();
  const deleteSection = thunkDeleteSection();
  const moveUpSection = thunkMoveUpSection();
  const moveDownSection = thunkMoveDownSection();

  // Handle
  const handleDelete = (arg: Option, indexSection: number) => {
    return () => {
      deleteSection({ arg: arg, elements: elements, nowIndexSection: indexSection });
    };
  };

  const handleMoveUpSection = (nowIndexSection: number) => {
    return () => {
      moveUpSection(nowIndexSection);
    };
  };

  const handleMoveDownSection = (nowIndexSection: number) => {
    return () => {
      moveDownSection(nowIndexSection);
    };
  };

  const handleDuplicate = (element: Option, nowIndexSection: number) => {
    return () => {
      duplicateSection({ data: { ...element, sectionId: uuidv4() }, nowIndexSection: nowIndexSection });
    };
  };

  return (
    <ButtonGroup style={{ display: 'flex' }} align='right'>
      <Popover placement='top' content="Move Up Section">
        <Button className={styles.buttonFunc} onClick={handleMoveUpSection(nowIndexSection)} shape='circle' size='large' >
          <i className="fas fa-angle-up" />
        </Button>
      </Popover>
      <Popover placement='top' content="Move Down Section">
        <Button className={styles.buttonFunc} onClick={handleMoveDownSection(nowIndexSection)} shape='circle' size='large' >
          <i className="fas fa-angle-down" />
        </Button>
      </Popover>
      <Popover placement='top' content="Duplicate Section">
        <Button className={styles.buttonFunc} onClick={handleDuplicate(elementProperty, nowIndexSection)} shape='circle' size='large' >
          <i className="fas fa-copy" />
        </Button>
      </Popover>
      <Popover placement='top' content="Settings Section">
        <Button className={styles.buttonFunc} onClick={PopUp.show(`section-${elementProperty.sectionId}`)} shape='circle' size='large'>
          <i className="fas fa-cog" />
        </Button>
      </Popover>
      <Popover placement='top' content="Delete Section">
        <Button className={styles.buttonFunc} onClick={handleDelete({ ...elementProperty }, nowIndexSection)} shape='circle' size='large' >
          <i className="fas fa-times" />
        </Button>
      </Popover>
      <Popover placement='top' content="Drag Section" >
        <div className={styles.dragBtn}>
          <i className="fas fa-arrows-alt"></i>
        </div>
      </Popover>
    </ButtonGroup>
  );
};

export default ButtonFunc;
