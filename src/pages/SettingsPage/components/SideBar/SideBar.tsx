import Image from 'components/Image/Image';
import { useMount } from 'hooks/useMount';
import { messageRequestPatternSection, patternSection, statusRequestPatternSection } from 'pages/SettingsPage/selectors';
import thunkGetDataSideBar from 'pages/SettingsPage/thunks/thunksSideBar/thunkGetDataSideBar/thunkGetDataSideBar';
import React, { CSSProperties, FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Option } from '../../SettingsPage';
import styles from './SideBar.module.scss';

export interface SideBarProps {
  className?: string;
  style?: CSSProperties;
}

export interface ItemSideBar extends Omit<Option, 'sectionId'> {
  id: string;
}

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 20,
});

const SideBar: FC<SideBarProps> = ({ className }) => {
  //Selector
  const pattern = useSelector(patternSection);
  const status = useSelector(statusRequestPatternSection);
  const message = useSelector(messageRequestPatternSection);

  //Dispatch
  const getPatternSection = thunkGetDataSideBar();
  const _renderItem = (property: ItemSideBar & { previewImg: string }, key: number) => {
    return (
      <Draggable draggableId={property.id} index={key} key={uuidv4()}>
        {provided => (
          <div className={styles.sidebarItem}
            ref={provided.innerRef}
            key={key}
            {...provided.dragHandleProps}
            {...provided.draggableProps}>
            <Image type='tagImg' imgSrc={property.previewImg} />
          </div>
        )}
      </Draggable>
    );
  };

  const _renderSuccess = () => {
    return (
      <Droppable droppableId="1">
        {(provided, snapshot) => (
          <div className={`${styles.sideBar} ${className}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <div className={styles.menuGroup}>
              <div className={styles.menuName}>
                Section
              </div>
              <ul className={styles.nav}>
                {pattern.map((item, index) => _renderItem(item, index))}
              </ul>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  useMount(() => {
    getPatternSection();
  });

  const _renderSwitch = () => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'success':
        return _renderSuccess();
      case 'failure':
        return <div>{message}</div>;
      default:
        return null;
    }
  };

  return _renderSwitch();
};

export default SideBar;
