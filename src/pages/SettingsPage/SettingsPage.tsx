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
import SideBar from 'pages/SettingsPage/components/SideBar/SideBar';
import React, { useRef, useState } from 'react';
import { DragDropContext, DragStart, DropResult } from 'react-beautiful-dnd';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import getQuery from 'utils/functions/getQuery';
import { v4 as uuidv4 } from 'uuid';
import { Section1Props } from '../../components/Section1/Section1';
import { Section2Props } from '../../components/Section2/Section2';
import { Section3Props } from '../../components/Section3/Section3';
import { Section4Props } from '../../components/Section4/Section4';
import MainContent from './components/MainContent/MainContent';
import NavEditable from './components/NavEditable/NavEditable';
import { reorder } from './DragDropFunction';
import { listPage, patternSection, sections } from './selectors';
import styles from './SettingsPage.module.scss';
import thunkAddSection from './thunks/thunksSection/thunkAddSection/thunkAddSection';
import thunkMoveSection from './thunks/thunksSection/thunkMoveSection/thunkMoveSection';

export interface PageProps {
  pageName: string;
  pathName: string;
  id: string;
  elements: Option[];
}

export interface Option
  extends Partial<
    Section1Props &
      Section2Props &
      Section3Props &
      Section4Props &
      Section5Props &
      Section6Props &
      Section7Props &
      Section8Props &
      Secction9Props &
      Section10Props &
      Section11Props &
      Section12Props &
      Section13Props
  > {
  sectionName: string;
  sectionId: string;
}

const defaultSection: Option = {
  sectionId: '',
  sectionName: '',
};

const SettingsPage = () => {
  const history = useHistory();
  const prepairAddProperty = useRef<Option>({ ...defaultSection });
  const nowPageEditingParams = history.location.search;

  const { id } = getQuery(nowPageEditingParams, ['id']);

  //State
  const [sectionDragging, setSectionDragging] = useState(-1);
  const [active, setActive] = useState(true);
  const [startDrag, setStartDrag] = useState(false);

  const handleSetStartDrag = (value: boolean) => {
    setStartDrag(value);
  };

  const handleActive = () => {
    setActive(!active);
  };

  // Selector
  const patterns = useSelector(patternSection);
  const elements = useSelector(sections);
  const pages = useSelector(listPage);

  const pageNameEditing = pages.find(page => page.id === id)?.pageName as string;

  // Dispatch
  const moveSection = thunkMoveSection();
  const addSection = thunkAddSection();

  //Handle
  const handlePrepairAdd = (option: Omit<Option, 'sectionId'>) => {
    prepairAddProperty.current = {
      ...option,
      sectionId: uuidv4(),
    };
  };

  const handleAdd = (indexSection?: number) => {
    if (!!prepairAddProperty.current.sectionId) {
      addSection({ newSection: { ...prepairAddProperty.current }, index: indexSection });
      prepairAddProperty.current = Object.assign({}, defaultSection);
    }
  };

  const handleDragStart = (result: DragStart) => {
    const { draggableId } = result;
    const patternProperty = patterns.find(pattern => pattern.id === draggableId);
    setStartDrag(true);
    if (!!patternProperty) {
      handlePrepairAdd({ ...patternProperty, sectionName: patternProperty.sectionName });
    }
    if (result.source.droppableId === '2') {
      setSectionDragging(result.source.index);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;
    setStartDrag(false);
    if (draggableId.includes('Btn Section') && destination?.droppableId === '2') {
      handleAdd(destination?.index);
    } else {
      if (source.droppableId === '2') {
        setSectionDragging(-1);
        if (!result.destination) {
          return;
        }
        const newElements = reorder<Option>(elements, result.source.index, result.destination.index);
        moveSection(newElements);
      }
    }
  };

  if (!id) {
    history.push('/admin/list');
    return null;
  }

  return (
    <div className={styles.settingsPage}>
      <Helmet>
        <title>{pageNameEditing || ''} Builder</title>
      </Helmet>
      <Button
        onClick={handleActive}
        shape="circle"
        icon={<i className="fas fa-chevron-right"></i>}
        className={`${styles.openSideBar} ${active ? styles.actived : null}`}
      />
      <div className="header">
        <NavEditable />
      </div>
      <div className="body">
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className={`${styles.sideBar} ${active ? styles.active : null}`}>
            <SideBar />
          </div>
          <div className={`${styles.mainContent} ${active ? styles.active : null}`}>
            <MainContent onDragStart={handleSetStartDrag} sectionDragging={sectionDragging} startDrag={startDrag} />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default SettingsPage;
