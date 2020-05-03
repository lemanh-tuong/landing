import { Button } from 'antd';
import 'antd/es/style/css';
import { Section10Props } from 'components/Section10/Section10';
import { Section11Props } from 'components/Section11/Section11';
import { Section12Props } from 'components/Section12/Section12';
import { Section13Props } from 'components/Section13/Section13';
import { Section5Props } from 'components/Section5/Section5';
import { Section6Props } from 'components/Section6/Section6';
import { Section7Props } from 'components/Section7/Section7';
import { Section8Props } from 'components/Section8/Section8';
import { Secction9Props } from 'components/Section9/Section9';
import { signOutFirebase } from 'firebase/authentication/signOutFirebase';
import { useMount } from 'hooks/useMount';
import SideBar from 'pages/SettingsPage/components/SideBar/SideBar';
import React, { useRef, useState } from 'react';
import { DragDropContext, Draggable, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Section1Props } from '../../components/Section1/Section1';
import { Section2Props } from '../../components/Section2/Section2';
import { Section3Props } from '../../components/Section3/Section3';
import { Section4Props } from '../../components/Section4/Section4';
import ButtonFunc from './components/ButtonFunc/ButtonFunc';
import RenderSection from './components/RenderSection/RenderSection';
import { getListStyle, reorder } from './DragDropFunction';
import { patternSection, sections, statusRequestElements } from './selectors';
import styles from './SettingsPage.module.scss';
import thunkAddSection from './thunks/thunksSection/thunkAddSection/thunkAddSection';
import thunkGetDataSection from './thunks/thunksSection/thunkGetDataSection/thunkGetDataSection';
import thunkMoveSection from './thunks/thunksSection/thunkMoveSection/thunkMoveSection';
import thunkSaveAll from './thunks/thunksSection/thunkSaveAll/thunkSaveAll';

export interface PageProps {
  pageName: string;
  elements: Option[]
}

export interface Option extends Partial<Section1Props
  & Section2Props & Section3Props & Section4Props
  & Section5Props & Section6Props & Section7Props
  & Section8Props & Secction9Props & Section10Props
  & Section11Props & Section12Props & Section13Props> {
  sectionName: string;
  sectionId: string;
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
  const patterns = useSelector(patternSection);
  const elements = useSelector(sections);
  const statusRequestSection = useSelector(statusRequestElements);

  // Dispatch
  const getData = thunkGetDataSection();
  const saveAll = thunkSaveAll();
  const moveSection = thunkMoveSection();
  const addSection = thunkAddSection();

  //Handle
  const handlePrepairAdd = (option: Omit<Option, 'sectionId'>) => {
    prepairAddProperty.current = {
      ...option,
      sectionId: uuidv4()
    };
  };

  const handleAdd = (indexSection?: number) => {
    if (!!prepairAddProperty.current.sectionId) {
      addSection({ nowSections: elements, arg: { ...prepairAddProperty.current }, index: indexSection });
      prepairAddProperty.current = Object.assign({}, defaultSection);
    }
  }

  const handleDragStart = (result: DragStart) => {
    const { draggableId } = result;
    const patternProperty = patterns.find(pattern => pattern.id === draggableId);
    if (!!patternProperty) {
      handlePrepairAdd({ ...patternProperty, sectionName: patternProperty.sectionName });
    }
    if (result.source.droppableId === '2') {
      setSectionDragging(result.source.index);
    }
  }

  const handleDragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;
    if (draggableId.includes('Btn Section') && destination?.droppableId === '2') {
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
    saveAll({ sections: elements });
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
              <div className={`content ${sectionDragging === indexSection ? styles.dragging : null}`}>
                {RenderSection({ option: element, isBuilder: true, nowIndexSection: indexSection })}
              </div>
              <div className={styles.sectionBottom}>
                {sectionDragging === indexSection ? null :
                  <Button className={styles.addComponentBtn}>
                    <Link to={`/admin/component?nowIndexSection=${indexSection}`}>
                      <i className="fas fa-plus"></i>
                    </Link>
                  </Button>
                }
              </div>
            </div>
          );
        }}
      </Draggable>
    )
  };

  const renderSuccess = () => {
    return (
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} >
        <div className={styles.settingsPage}>
          <div className={styles.sideBar}>
            <SideBar />
          </div>
          <div className={styles.mainContent}>
            <Droppable droppableId="2">
              {(provided, snapshot) => (
                <div ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  {elements.map((element: any, index: number) => _renderSection(element, index))}
                </div>
              )}
            </Droppable>
          </div>
        </div>
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
