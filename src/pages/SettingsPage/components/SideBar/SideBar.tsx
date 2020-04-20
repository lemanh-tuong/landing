import Text from 'components/Text/Text';
import { useMount } from 'hooks/useMount';
import { messageRequestPatternSection, patternSection, statusRequestPatternSection } from 'pages/SettingsPage/selectors';
import thunkGetDataSideBar from 'pages/SettingsPage/thunks/thunkGetDataSideBar/thunkGetDataSideBar';
import React, { CSSProperties, FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Option } from '../../SettingsPage';
import styles from './SideBar.module.scss';

export interface SideBarProps {
  onEvent: (option: Omit<Option, 'sectionId'>) => () => void;
  className?: string;
  style?: CSSProperties;
}

export interface ItemSideBar extends Omit<Option, 'sectionId'> {
  id: string;
}

const SideBar: FC<SideBarProps> = ({ className, style, onEvent }) => {
  //Selector
  const pattern = useSelector(patternSection);
  const status = useSelector(statusRequestPatternSection);
  const message = useSelector(messageRequestPatternSection);

  //Dispatch
  const getPatternSection = thunkGetDataSideBar();
  const _renderItem = (property: ItemSideBar, key: number) => {
    return (
      <Draggable draggableId={property.id} index={key} key={uuidv4()}>
        {provided => (
          <div onMouseDown={onEvent(property)} className={styles.link} ref={provided.innerRef} key={key} {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={styles.text}>
              <Text text={property.sectionName} />
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  const _renderSuccess = () => {
    return (
      <Droppable droppableId="1">
        {provided => (
          <div className={`${styles.sideBar} ${className}`} ref={provided.innerRef} {...provided.droppableProps} style={style}>
            <div className={styles.menuGroup}>
              <div className={styles.menuName}>
                Section
              </div>
              <ul className={styles.nav}>
                {pattern.map((item, index) => _renderItem(item, index))}
              </ul>
            </div>
          </div>
        )}
      </Droppable>
    );
  }

  useMount(() => {
    getPatternSection();
  })

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
  }

  return _renderSwitch();
};

export default SideBar;
