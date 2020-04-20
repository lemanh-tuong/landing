import { Button } from 'antd';
import 'antd/es/style/css';
import { signOutFirebase } from 'firebase/authentication/signOutFirebase';
import { useMount } from 'hooks/useMount';
import SideBar from 'pages/SettingsPage/components/SideBar/SideBar';
import React, { useRef, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ButtonFunc from './components/ButtonFunc/ButtonFunc';
import RenderSection from './components/RenderSection/RenderSection';
import { Section1Props } from './components/Section1/Section1';
import { Section2Props } from './components/Section2/Section2';
import { Section3Props } from './components/Section3/Section3';
import { Section4Props } from './components/Section4/Section4';
import { reorder } from './reoderFunction';
import { sections, statusRequestElements } from './selectors';
import styles from './SettingsPage.module.scss';
import thunkAddSection from './thunks/thunkAddSection/thunkAddSection';
import thunkGetDataSection from './thunks/thunkGetDataSection/thunkGetDataSection';
import thunkMoveSection from './thunks/thunkMoveSection/thunkMoveSection';
import thunkSaveAll from './thunks/thunkSaveAll/thunkSaveAll';

export interface PageProps {
  pageName: string;
  elements: Option[]
}

export interface Option extends Partial<Section1Props & Section2Props & Section3Props & Section4Props<any>> {
  sectionName: string;
  sectionId: string;
  slider?: boolean;
}

const defaultSection: Option = {
  sectionId: '',
  sectionName: '',
}

const SettingsPage = () => {
  const history = useHistory();
  let prepairAddProperty = useRef<Option>({ ...defaultSection });
  //State
  const [sectionDragging, setSectionDragging] = useState(-1);

  // Selector
  const elements = useSelector(sections);
  const statusRequestSection = useSelector(statusRequestElements);

  // Dispatch
  const getData = thunkGetDataSection();
  const saveAll = thunkSaveAll();
  const moveSection = thunkMoveSection();
  const addSection = thunkAddSection();

  //Handle
  const handlePrepairAdd = (option: Omit<Option, 'sectionId'>) => {
    return () => {
      prepairAddProperty.current = {
        ...option,
        sectionId: uuidv4()
      };
    };
  };

  const handleAdd = (indexSection?: number) => {
    if (!!prepairAddProperty.current.sectionId) {
      addSection({ arg: { ...prepairAddProperty.current }, index: indexSection });
      prepairAddProperty.current = Object.assign({}, defaultSection);
    }
  }

  // const handleDragStart = (index: number) => {
  //   // setSectionDragging(index);
  // }

  const handleDragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;
    if (draggableId.includes('Btn Section')) {
      handleAdd(destination?.index);
    } else {
      if (source.droppableId === '2') {
        setSectionDragging(-1)
        if (!result.destination) {
          return;
        }
        const newElements = reorder<Option>(
          elements,
          result.source.index,
          result.destination.index
        );
        moveSection(newElements);
      }
    }
  }

  const handleSaveAll = () => {
    saveAll();
    signOutFirebase();
    history.push('/');
  }

  // Render
  const _renderSection = (element: Option, indexSection: number) => {
    const { sectionId } = element;
    return (
      <Draggable draggableId={sectionId} index={indexSection} key={sectionId} >
        {provided => {
          return (
            <div className={`${styles.section} `}
              ref={provided.innerRef}
              {...provided.dragHandleProps} {...provided.draggableProps} key={sectionId}
            >
              <div className={styles.sectionTop}>
                {sectionDragging === indexSection ? null : <ButtonFunc nowIndexSection={indexSection} elementProperty={element} />}
              </div>
              <div className="content" style={sectionDragging === indexSection ? { width: 300, height: 300, overflow: 'hidden' } : {}}>
                {RenderSection({ option: element, isBuilder: true, nowIndexSecion: indexSection })}
              </div>
              <div className={styles.sectionBottom}>
                <Button className={styles.addComponentBtn}>
                  <Link to='/new'>
                    <i className="fas fa-plus"></i>
                  </Link>
                </Button>
              </div>
            </div>
          );
        }}
      </Draggable>
    )
  };

  const renderSuccess = () => {
    return (
      <DragDropContext onDragEnd={handleDragEnd} >
        <SideBar onEvent={handlePrepairAdd} />
        <Droppable droppableId="2">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.mainContent} >
              {elements.map((element: any, index: number) => _renderSection(element, index))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext >
    );
  }

  const _renderSwitch = () => {
    switch (statusRequestSection) {
      case 'loading':
        return <div>Loading</div>;
      case 'failure':
        return <div>Something went wrong</div>
      case 'success':
        return renderSuccess();
      default:
        return null;
    }
  }
  // Lifecycle
  useMount(() => {
    getData({ pageName: 'HomePage' });
  })

  return (
    <>
      {_renderSwitch()}
      <Button onClick={handleSaveAll} shape='circle-outline' size='large' style={{ position: 'fixed', zIndex: 9999, right: 10, bottom: 10 }}>
        <i className="fas fa-save"></i>
      </Button>

    </>
  )
}

export default SettingsPage;
