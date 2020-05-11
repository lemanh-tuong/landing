import { Button } from 'antd';
import { ButtonNav } from 'components/Nav/Nav';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { buttons } from 'pages/SettingsPage/selectors';
import thunkAddNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkAddNavItem/thunkAddNavItem';
import thunkDeleteNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkDeleteNavItem/thunkDeleteNavItem';
import thunkMoveNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkMoveNavItem/thunkMoveNavItem';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './FormEditButtonNav.module.scss';
import SettingFormButton from './SettingFormButtonNav';

export const buttonDefault: ButtonNav = {
  text: 'Purchase Now',
  type: 'primary',
  iconClass: 'fas fa-shopping-cart'
};

const FormEditButtonNav = () => {
  const [formShown, setFormShown] = useState(-1);
  const handleFormShown = (indexForm: number) => {
    return () => {
      if (formShown !== indexForm) {
        setFormShown(indexForm);
      } else {
        setFormShown(-1);
      }
    };
  };
  const handleHideAll = () => {
    setFormShown(-1);
  };
  // Selector
  const buttonGroup = useSelector(buttons);

  // Dispatch
  const moveItem = thunkMoveNavItem();
  const addItem = thunkAddNavItem();
  const deleteItem = thunkDeleteNavItem();

  // Handle
  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newData = reorder(
      buttonGroup,
      result.source.index,
      result.destination.index
    );
    moveItem({ navData: newData, type: 'buttons' });
  };

  const handleAddItem = () => {
    addItem({ newItem: buttonDefault, indexInsert: buttonGroup.length, type: 'buttons' });
  };

  const handleDeleteNavItem = (index: number) => {
    return () => deleteItem({ indexDelete: index, type: 'buttons' });
  };

  // Render
  const _renderLabelLink = (navItemProperty: ButtonNav, index: number) => {
    return (
      <div className={styles.settingsBox} key={uuidv4()}>
        <Draggable index={index} draggableId={`${navItemProperty.text}-${index}`} key={uuidv4()}>
          {provided => (
            <div className={styles.navItemDesc} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
              <div className={styles.navItemName} onClick={handleFormShown(index)} >
                <i className="fas fa-plus"></i>
                <div className={styles.name}>{navItemProperty.text}</div>
              </div>
              <Button shape='round' size='large' onClick={handleDeleteNavItem(index)}>
                Delete
            </Button>
            </div>
          )}
        </Draggable>
      </div>
    );
  };

  const _renderSettingsBox = () => {
    return (
      <>
        {buttonGroup.map((item, index) => formShown === index && <SettingFormButton {...item} nowIndex={index} />)}
      </>
    );
  };

  const _renderAddButton = () => {
    return (
      <div className={styles.addBtn} onClick={handleAddItem}>
        <p>Add More</p>
      </div>
    );
  };

  return (
    <div className="Form Button Nav">
      <h1>Form Edit Button Nav</h1>
      <div className={styles.editNavItem}>
        <DragDropContext onDragEnd={handleMove} onDragStart={handleHideAll}>
          <Droppable droppableId={`Form_nav`} >
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner}>
                <div className={styles.listNavItems}>
                  {buttonGroup.map((item, index) => _renderLabelLink(item, index))}
                  {buttonGroup.length < 2 && _renderAddButton()}
                </div>
                <div className={styles.form}>
                  {_renderSettingsBox()}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default FormEditButtonNav;
