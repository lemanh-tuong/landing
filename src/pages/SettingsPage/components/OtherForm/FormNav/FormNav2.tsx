import { Button } from 'antd';
import Image from 'components/Image/Image';
import { NavItemType } from 'components/Nav/Nav';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { logoImg, navItems } from 'pages/SettingsPage/selectors';
import thunkAddNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkAddNavItem/thunkAddNavItem';
import thunkDeleteNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkDeleteNavItem/thunkDeleteNavItem';
import thunkMoveNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkMoveNavItem/thunkMoveNavItem';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FormNav from './FormNav';
import styles from './FormNav2.module.scss';

const navItemDefault: NavItemType = {
  href: '#',
  text: 'Item',
  id: uuidv4(),
};

const FormNav2 = () => {
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
  const logo = useSelector(logoImg);
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
    moveNavItem({ navData: newData });
  };

  const handleAddNavItem = () => {
    if (navData.length < 4) {
      addNavItem({ newItem: navItemDefault, indexInsert: navData.length });
    }
  };

  const handleDeleteNavItem = (index: number) => {
    return () => deleteNavItem({ indexDelete: index });
  };

  // Render
  const _renderLabel = (navItemProperty: NavItemType, index: number) => {
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
        {formShown === index && <FormNav nowIndex={index} />}
      </div>
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
    <div className="Form Nav 2">
      <div className={styles.editNavItem}>
        <DragDropContext onDragEnd={handleMove} onDragStart={handleHideAll}>
          <Droppable droppableId={`Form_nav`} >
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner}>
                <div className={styles.listNavItems}>
                  {navData.map((navItemProperty, index) => _renderLabel(navItemProperty, index))}
                  {navData.length < 4 && _renderAddButton()}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className={styles.editLogo}>
        <Link to='/gallery?type=logoImg&multiple=false'>
          <Image type='tagImg' imgSrc={logo.imgSrc} />
        </Link>
      </div>
    </div>
  );
};

export default FormNav2;
