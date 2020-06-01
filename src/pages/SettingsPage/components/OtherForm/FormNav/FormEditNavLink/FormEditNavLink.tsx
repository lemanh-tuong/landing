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
    addNavItem({
      newItem: {
        id: uuidv4(),
        href: '#',
        text: 'item'
      }, indexInsert: navData.length, type: 'navItems'
    });
  };

  const handleDeleteNavItem = (index: number) => {
    return () => deleteNavItem({ indexDelete: index, type: 'navItems' });
  };

  // Render
  const _renderLabelLink = (navItemProperty: NavItemType, index: number) => {
    return (
      <Draggable index={index} draggableId={`${navItemProperty.text}-${index}`} key={navItemProperty.id}>
        {provided => (
          <div className={styles.formNavItem} ref={provided.innerRef}  {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={`${styles.navItemDesc} ${index === formShown ? styles.active : ''}`}>
              <div className={styles.navItemName} onClick={handleFormShown(index)} >
                <i className="fas fa-plus"></i>
                <div className={styles.name}>{navItemProperty.text}</div>
              </div>
              <Button shape='round' size='large' onClick={handleDeleteNavItem(index)}>
                Delete
               </Button>
            </div>
            {index === formShown && _renderSettingsBox(index)}
          </div>
        )}
      </Draggable>
    );
  };

  const _renderSettingsBox = (nowIndex: number) => {
    return <SettingFormNavLink nowIndex={nowIndex} />
  };

  const _renderAddButton = () => {
    return (
      <div className={styles.addBtn} onClick={handleAddNavItem}>
        <p>Add More</p>
      </div>
    );
  };

  return (
    <div className={styles.formNavLink}>
      <h3>Form Edit Nav Link</h3>
      <div className={styles.editNavItem}>
        <DragDropContext onDragEnd={handleMove} onDragStart={handleHideAll}>
          <Droppable droppableId={`Form_nav`} >
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner}>
                <div className={styles.listNavItems}>
                  {navData.map((navItemProperty, index) => _renderLabelLink(navItemProperty, index))}
                  {navData.length < 4 && _renderAddButton()}
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
