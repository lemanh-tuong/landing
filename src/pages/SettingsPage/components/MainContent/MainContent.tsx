import { Button, Popover } from 'antd';
import Loading from 'components/Loading/Loading';
import { getListStyle } from 'pages/SettingsPage/DragDropFunction';
import { listPage, messageRequestElements, sections, statusRequestElements } from 'pages/SettingsPage/selectors';
import thunkGetDataSection from 'pages/SettingsPage/thunks/thunksSection/thunkGetDataSection/thunkGetDataSection';
import thunkSaveAll from 'pages/SettingsPage/thunks/thunksSection/thunkSaveAll/thunkSaveAll';
import React, { FC, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import getQuery from 'utils/functions/getQuery';
import { Option } from '../../SettingsPage';
import ButtonFunc from '../ButtonFunc/ButtonFunc';
import RenderSection from '../RenderSection/RenderSection';
import styles from './MainContent.module.scss';

export interface MainContentProps {
  startDrag: boolean;
  sectionDragging: number;
  onDragStart: (value: boolean) => void;
}

const MainContent: FC<MainContentProps> = ({ onDragStart, sectionDragging, startDrag }) => {
  const history = useHistory();
  const nowPageEditing = history.location.search;
  const { pathName } = getQuery(nowPageEditing, ['pathName']);

  // Selector
  const pages = useSelector(listPage);
  const elements = useSelector(sections);
  const statusRequestSection = useSelector(statusRequestElements);
  const messageRequestSection = useSelector(messageRequestElements);
  // Dispatch

  const getData = thunkGetDataSection();
  const saveAll = thunkSaveAll();

  //Handle

  const handleSaveAll = () => {
    saveAll();
    const isHome = pages.find(page => page.pathName === pathName)?.isHome;
    history.push(isHome ? '/' : pathName);
  };

  const _renderSection = (element: Option, indexSection: number) => {
    const { sectionId } = element;
    return (
      <Draggable draggableId={sectionId} index={indexSection} key={sectionId}>
        {provided => {
          return (
            <div
              className={`${styles.section} ${startDrag ? styles.startDrag : null}`}
              key={sectionId}
              {...provided.dragHandleProps}
              {...(startDrag ? provided.draggableProps : {})}
              ref={provided.innerRef}
            >
              <div className={styles.sectionTop}>
                {sectionDragging === indexSection ? null : (
                  <ButtonFunc onStartDrag={onDragStart} nowIndexSection={indexSection} elementProperty={element} />
                )}
              </div>
              <div className={`content ${sectionDragging === indexSection ? styles.dragging : null}`}>
                {RenderSection({ option: element, nowIndexSection: indexSection })}
              </div>
              <div className={styles.sectionBottom}>
                {sectionDragging === indexSection ? null : (
                  <Button className={styles.addComponentBtn}>
                    <Link to={`/admin/component?pageName=HomePage&nowIndexSection=${indexSection}`}>
                      <i className="fas fa-plus"></i>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  };

  const renderSuccess = () => {
    return (
      <div className={`${styles.mainContent}`}>
        <Droppable droppableId="2">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={elements.length === 0 ? styles.empty : ''}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {elements.map((element: any, index: number) => _renderSection(element, index))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  };

  const _renderSwitch = () => {
    switch (statusRequestSection) {
      case 'loading':
        return <Loading />;
      case 'success':
        return renderSuccess();
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageRequestSection }} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    getData({ pathName: pathName });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <>
      {_renderSwitch()}
      <Popover content="Save All">
        <Button onClick={handleSaveAll} className={styles.saveBtn} shape="circle-outline" size="large">
          <i className="fas fa-save"></i>
        </Button>
      </Popover>
    </>
  );
};

export default MainContent;
