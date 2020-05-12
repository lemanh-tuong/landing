import { Button } from 'antd';
import { NavItemType } from 'components/Nav/Nav';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { navItems } from 'pages/SettingsPage/selectors';
import thunkAddNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkAddNavItem/thunkAddNavItem';
import thunkDeleteNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkDeleteNavItem/thunkDeleteNavItem';
import thunkMoveNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkMoveNavItem/thunkMoveNavItem';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './FormEditNavLink.module.scss';
import SettingFormNavLink from './SettingFormNavLink';

export const navItemDefault: NavItemType = {
  href: '#',
  text: 'Item',
  id: uuidv4(),
};

const FormEditNavLink = () => {
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
  const navData = useSelector(navItems);

  // Dispatch
  const moveNavItem = thunkMoveNavItem();
  const addNavItem = thunkAddNavItem();
  const deleteNavItem = thunkDeleteNavItem();

  // Handle
  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newData = reorder(
      navData,
      result.source.index,
      result.destination.index
    );
    moveNavItem({ navData: newData, type: 'navItems' });
  };

  const handleAddNavItem = () => {
    addNavItem({ newItem: navItemDefault, indexInsert: navData.length, type: 'navItems' });
  };

  const handleDeleteNavItem = (index: number) => {
    return () => deleteNavItem({ indexDelete: index, type: 'navItems' });
  };

  // Render
  const _renderLabelLink = (navItemProperty: NavItemType, index: number) => {
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
        {navData.map((item, index) => formShown === index && <SettingFormNavLink {...item} nowIndex={index} />)}
      </>
    );
  };

  const _renderAddButton = () => {
    return (
      <div className={styles.addBtn} onClick={handleAddNavItem}>
        <p>Add More</p>
      </div>
    );
  };

  return (
    <div className="Form Nav Item">
      <h1>Form Edit Nav Link</h1>
      <div className={styles.editNavItem}>
        <DragDropContext onDragEnd={handleMove} onDragStart={handleHideAll}>
          <Droppable droppableId={`Form_nav`} >
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner}>
                <div className={styles.listNavItems}>
                  {navData.map((navItemProperty, index) => _renderLabelLink(navItemProperty, index))}
                  {navData.length < 4 && _renderAddButton()}
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

export default FormEditNavLink;
