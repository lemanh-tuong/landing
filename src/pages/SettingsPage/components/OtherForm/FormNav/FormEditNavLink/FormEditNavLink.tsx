import FormDropDown from 'components/FormDropDown/FormDropDown';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { navItems } from 'pages/SettingsPage/selectors';
import thunkAddNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkAddNavItem/thunkAddNavItem';
import thunkDeleteNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkDeleteNavItem/thunkDeleteNavItem';
import thunkMoveNavItem from 'pages/SettingsPage/thunks/thunksNav/thunkMoveNavItem/thunkMoveNavItem';
import React from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './FormEditNavLink.module.scss';
import SettingFormNavLink from './SettingFormNavLink';

const FormEditNavLink = () => {
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
    const newData = reorder(navData, result.source.index, result.destination.index);
    moveNavItem({ navData: newData, type: 'navItems' });
  };

  const handleAddNavItem = () => {
    addNavItem({
      newItem: {
        id: uuidv4(),
        href: '#',
        text: 'item',
      },
      indexInsert: navData.length,
      type: 'navItems',
    });
  };

  const handleDeleteNavItem = (index: number) => {
    return () => deleteNavItem({ indexDelete: index });
  };

  const _renderSettingsBox = (nowIndex: number) => {
    return <SettingFormNavLink nowIndex={nowIndex} />;
  };

  return (
    <div className={styles.formNavLink}>
      <h3>Form Edit Nav Link</h3>
      <div className={styles.editNavItem}>
        <FormDropDown
          draggableId={'nav-link'}
          droppableId="nav-link"
          label={navData.map(item => item.text) as any}
          onAdd={handleAddNavItem}
          onDelete={handleDeleteNavItem}
          renderForm={_renderSettingsBox}
          onMoveEnd={handleMove}
        />
      </div>
    </div>
  );
};

export default FormEditNavLink;
