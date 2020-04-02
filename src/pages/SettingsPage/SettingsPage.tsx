import SideBar from 'pages/SettingsPage/components/SideBar/SideBar';
import React, { useRef, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import styles from './SettingsPage.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Section2Props } from 'components/Section2/Section2';
import { Section1Props } from 'components/Section1/Section1';
import { Section3Props } from 'components/Section3/Section3';
import { Section4Props } from 'components/Section4/Section4';
import { sections, statusRequestElements } from './selectors';
import thunkAddSection from './thunks/thunkAddSection/thunkAddSection';
import thunkDeleteSection from './thunks/thunkDeleteSection/thunkDeleteSection';
import thunkMoveUpSection from './thunks/thunkMoveUpSection/thunkMoveUpSection';
import thunkMoveDownSection from './thunks/thunkMoveDownSection/thunkMoveDownSection';
import { Button } from 'antd';
import 'antd/es/style/css';
import RenderSection from './components/RenderSection/RenderSection';
import FormSection2 from './components/FormSection2/FormSection2';
import PopUp from 'components/PopUp/PopUp';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import thunkMoveSection from './thunks/thunkMoveSection/thunkMoveSection';
import FormSection1 from './components/FormSection1/FormSection1';
import FormSection3 from './components/FormSection3/FormSection3';
import FormSection4 from './components/FormSection4/FormSection4';
import { reorder } from './reoderFunction';
import { useMount } from 'hooks/useMount';
import thunkGetDataSection from './thunks/thunkGetDataSection/thunkGetDataSection';
import thunkSaveAll from './thunks/thunkSaveAll/thunkSaveAll';

export interface PageProps {
  pageName: string;
  elements: Option[]
}

export interface Option extends Partial<Section1Props<any> & Section2Props & Section3Props & Section4Props<any>> {
  sectionName: string;
  sectionId: string;
  slider?: boolean;
}

const SettingsPage = () => {
  //Hook Ref
  const defaultSection: Option = {
    sectionId: '',
    sectionName: '',
  }
  let prepairAddProperty = useRef<Option>({ ...defaultSection });

  //State
  const [sectionDragging, setSectionDragging] = useState('');
  // Selector
  const elements = useSelector(sections);
  const statusRequestSection = useSelector(statusRequestElements);

  //Dispatch
  const addSection = thunkAddSection();
  const moveSection = thunkMoveSection();
  const deleteSection = thunkDeleteSection();
  const moveUpSection = thunkMoveUpSection();
  const moveDownSection = thunkMoveDownSection();
  const getData = thunkGetDataSection();
  const saveAll = thunkSaveAll();

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
    return () => {
      if (!!prepairAddProperty.current.sectionId) {
        !!(indexSection === 0 || indexSection) ? addSection({ ...prepairAddProperty.current }, indexSection) : addSection({ ...prepairAddProperty.current });
        prepairAddProperty.current = Object.assign({}, defaultSection);
      }
    }
  }
  const handleDragging = (sectionId: string) => {
    return () => {
      setSectionDragging(sectionId);
    }
  }
  const handleDragEnd = (result: any) => {
    !!sectionDragging && handleDragging('')();
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
  const handleDelete = (arg: Option, indexSection: number) => {
    return () => {
      deleteSection(arg)
    }
  }
  const handleMoveUpSection = (nowIndexSection: number) => {
    return () => {
      moveUpSection(nowIndexSection);
    }
  }
  const handleMoveDownSection = (nowIndexSection: number) => {
    return () => {
      moveDownSection(nowIndexSection);
    }
  }
  const handleDuplicate = (element: Option, nowIndexSection: number) => {
    return () => {
      handlePrepairAdd(element)();
      handleAdd(nowIndexSection)();
    }
  }

  // Render
  const _renderSettingBoxSwitch = (option: Option, indexSection: number) => {
    switch (option.sectionName) {
      case 'Section 1':
        return <FormSection1 nowIndexSection={indexSection} />
      case "Section 2":
        return <FormSection2 nowIndexSection={indexSection} />;
      case 'Section 3':
        return <FormSection3 nowIndexSection={indexSection} />
      case "Section 4":
        return <FormSection4 nowIndexSection={indexSection} />;
      default:
        return null;
    }
  }
  const _renderSettingsBox = (option: Option, index: number) => {
    return (
      <PopUp id={option.sectionId}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          {_renderSettingBoxSwitch(option, index)}
        </div>
      </PopUp>
    );
  };

  const _renderSection = (element: Option, indexSection: number) => {
    const { sectionId } = element;
    // const focusing = sectionId === sectionFocusing ? styles.focusing : null;
    const dragging = sectionId === sectionDragging ? styles.dragging : null;

    return (
      <Draggable draggableId={sectionId} index={indexSection} key={sectionId} >
        {(provided, snapshot) => {
          return (
            <div className={`${styles.section}  ${dragging} `}
              ref={provided.innerRef}
              {...provided.dragHandleProps} {...provided.draggableProps} key={sectionId}
            // onMouseDown={!!sectionFocusing.includes(sectionId) ? handleDragging(sectionId) : undefined}
            // onDoubleClick={!!sectionFocusing.includes(sectionId) ? undefined : handleFocusing(sectionId)}
            >
              <div className={styles.sectionTop}>
                <ButtonGroup style={{ display: 'flex' }} align='right'>
                  <Button className={styles.buttonFunc} onClick={handleMoveUpSection(indexSection)} shape='circle' size='large' >
                    <i className="fas fa-angle-up" />
                  </Button>
                  <Button className={styles.buttonFunc} onClick={handleMoveDownSection(indexSection)} shape='circle' size='large' >
                    <i className="fas fa-angle-down" />
                  </Button>
                  <Button className={styles.buttonFunc} onClick={handleDuplicate(element, indexSection)} shape='circle' size='large' >
                    <i className="fas fa-copy" />
                  </Button>
                  <Button className={styles.buttonFunc} onClick={PopUp.show(sectionId)} shape='circle' size='large'>
                    <i className="fas fa-cog" />
                  </Button>
                  <Button className={styles.buttonFunc} onClick={handleDelete({ ...element }, indexSection)} shape='circle' size='large' >
                    <i className="fas fa-times" />
                  </Button>
                </ButtonGroup>
              </div>
              {RenderSection({ ...element })}
              {_renderSettingsBox({ ...element }, indexSection)}
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
        <div className={styles.mainContent} onMouseUp={handleAdd()}>
          <Droppable droppableId="2" type="Main Content">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {elements.map((element: any, index: number) => _renderSection(element, index))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
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
    getData('HomePage');
  })

  return (
    <>
      {_renderSwitch()}
      <Button onClick={saveAll} shape='circle-outline' size='large' style={{ position: 'fixed', zIndex: 9999, right: 10, bottom: 10 }}>
        <i className="fas fa-save"></i>
      </Button>
    </>
  )
}




export default SettingsPage;
