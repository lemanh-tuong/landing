import Text from 'components/Text/Text';
import React, { CSSProperties, FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Option } from '../../pages/SettingsPage/SettingsPage';
import styles from './SideBar.module.scss';

export interface SideBarProps {
  onEvent: Function;
  className?: string;
  style?: CSSProperties;
}

const data: (Option & { id: string })[] = [
  {
    sectionName: 'Section 1',
    mainTitle: 'Title 1',
    alignMainTitle: 'left',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'Text',
    alignText: 'left',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: '1'
  },
  {
    sectionName: 'Section 2',
    mainTitle: 'Title 2',
    alignMainTitle: 'left',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'Text',
    alignText: 'left',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: '2'
  },
  {
    sectionName: 'Section 3',
    mainTitle: 'Title 3',
    alignMainTitle: 'left',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'Text',
    alignText: 'left',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: '3'
  },
  {
    sectionName: 'Section 4',
    mainTitle: 'Title 4',
    alignMainTitle: 'left',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'Text',
    alignText: 'left',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: '4'
  },
];


const SideBar: FC<SideBarProps> = ({ className, style, onEvent }) => {
  const _renderItem = (property: Option & { id: string }, key: any) => {
    return (
      <Draggable draggableId={property.id} index={key} key={key}>
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
  return (
    <Droppable isDropDisabled={true} droppableId="1" type='Test'>
      {provided => (
        <div className={`${styles.sideBar} ${className}`} ref={provided.innerRef} {...provided.droppableProps} style={style}>
          <div className={styles.menuGroup}>
            <div className={styles.menuName}>
              Section
            </div>
            <ul className={styles.nav}>
              {data.map((item, index) => _renderItem(item, index))}
            </ul>
          </div>
        </div>
      )}
    </Droppable>
  );

};

export default SideBar;
