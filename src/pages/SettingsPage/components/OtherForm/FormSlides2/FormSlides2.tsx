import { Button } from 'antd';
import img1 from 'assets/img/settings/advanced-rating-and-reviews.png';
import Form, { OnChangeFuncArg } from 'components/Form/Form';
import { Section3Props } from 'components/Section3/Section3';
import { reorder } from 'pages/SettingsPage/DragDropFunction';
import { sections } from 'pages/SettingsPage/selectors';
import thunkChangeCheckBox from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeCheckBox/thunkChangeCheckBox';
import thunkChangeInput from 'pages/SettingsPage/thunks/thunksInFormSection/thunkChangeInput/thunkChangeInput';
import thunkAddSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkAddSlide2/thunkAddSlide2';
import thunkDeleteSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkDeleteSlide2/thunkDeleteSlide2';
import thunkMoveSlide2 from 'pages/SettingsPage/thunks/thunkSlide2/thunkMoveSlide2/thunkMoveSlide2';
import React, { FC, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormSlide2 from '../FormSlide2/FormSlide2';
import styles from './FormSlides2.module.scss';

export interface FormSlides2Props {
  nowIndexSection: number;
  draggableField: boolean;
}

const slidePropertyDefault: Omit<Section3Props, 'sectionid'> = {
  imageSectionCol: { imgSrc: img1 },
  sectionId: '1',
  mainTitle: 'App Term Boxes Settings',
  alignMainTitle: 'left',
  hasDivider: true,
  dividerColor: '#000',
  reverse: true,
  text: 'Insert Listing Locations and Listing Categories block to your app by using App Term Boxes shortcode.',
};

const FormSlides2: FC<FormSlides2Props> = ({ nowIndexSection, draggableField }) => {
  // State;
  const [nowTab, setTab] = useState<'general' | 'detail'>('general');
  const [formShown, setFormShown] = useState(-1);

  const _handleChangeTab = (tabName: 'general' | 'detail') => {
    return () => setTab(tabName);
  };

  const handleFormShown = (nowIndexSlide: number) => {
    return () => setFormShown(nowIndexSlide);
  };

  // Selector
  const element = useSelector(sections)[nowIndexSection];

  // Destructoring
  const { sliderSection, fluid, itemShow, margin, draggable } = element;

  // Dispatch
  const changeCheckBox = thunkChangeCheckBox();
  const changeItemShow = thunkChangeInput();
  const addSlide = thunkAddSlide2();
  const deleteSlide = thunkDeleteSlide2();
  const moveSlide = thunkMoveSlide2();

  const handleAddSlide = (nowIndexSlide: number) => {
    return () => addSlide({ slideProperty: slidePropertyDefault, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  const handleDelete = (nowIndexSlide: number) => {
    return () => deleteSlide({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide });
  };

  const handleMove = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newElements = sliderSection ? reorder(
      sliderSection,
      result.source.index,
      result.destination.index
    ) : [];
    moveSlide({ data: newElements, nowIndexSection: nowIndexSection });
  };

  const handleChangeForm = ({ fieldName, fieldType }: OnChangeFuncArg) => {
    return (result: any) => {
      if (fieldType === 'checkbox') {
        changeCheckBox({ fieldName: fieldName, checked: result, nowIndexSection: nowIndexSection });
      }
      if (fieldType === 'input' || fieldType === 'number') {
        changeItemShow({ fieldName: fieldName, nowIndexSection: nowIndexSection, value: result });
      }
    };
  };

  //Render
  const _renderLabel = (sliderProperty: Section3Props, nowIndexSlide: number) => {
    const { mainTitle } = sliderProperty;
    return (
      <Draggable index={nowIndexSlide} draggableId={`card-${nowIndexSlide}`}>
        {provided => (
          <div className={styles.sliderSection} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} onClick={handleFormShown(nowIndexSlide)}>
            <div className={styles.sectionDesc} >
              <i className="fas fa-plus"></i>
              <div className={styles.sectionMainTitle}>{mainTitle}</div>
            </div>
            <Button shape='round' size='large' onClick={handleDelete(nowIndexSlide)} >
              Delete
            </Button>
          </div>
        )}
      </Draggable>
    );
  };

  const _renderGeneralSettings = () => {
    return (
      <Form
        onChange={handleChangeForm}
        fields={[
          {
            fieldId: 'slides-input-1',
            fieldName: 'itemShow',
            fieldType: 'number',
            defaultNumber: itemShow,
          },
          {
            fieldId: 'slides-input-2',
            fieldName: 'margin',
            fieldType: 'number',
            defaultNumber: margin,
          },
          {
            fieldId: 'slides-checkbox-1',
            fieldName: 'fluid',
            fieldType: 'checkbox',
            defaultChecked: fluid,
          },
          {
            fieldId: 'draggable-slides-2',
            fieldName: 'draggable',
            fieldType: 'checkbox',
            defaultChecked: draggable,
            hidden: !draggableField
          }
        ]}
      >
        <Button shape='round' size='large' danger>
          <Link to={`/gallery?type=sliderImgs&nowIndexSection=${nowIndexSection}&multiple=true`}>
            Change Image
          </Link>
        </Button>
      </Form>
    );
  };

  const _renderDetailSettings = () => {
    return (
      <div className={styles.detailSettings}>
        <DragDropContext onDragEnd={handleMove}>
          <Droppable droppableId={'form-slides-2'} type="sliderSection drop">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.inner} >
                <div className={styles.listLabel}>
                  {sliderSection?.map((sectionProperty, index) => _renderLabel(sectionProperty, index))}
                  <Button onClick={sliderSection && handleAddSlide(sliderSection?.length)} shape='circle' size='large' style={{ marginTop: 10 }}>
                    <i className="fas fa-plus" />
                  </Button>
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className={styles.detailForm}>
          {sliderSection?.map((sliderProperty, index) => index === formShown && <FormSlide2 sectionProperty={sliderProperty} nowIndexSection={nowIndexSection} nowIndexSlide={formShown} />)}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.formSlides}>
      <div className={styles.formSlidesTop}>
        <div className={`${styles.tabList} ${nowTab === 'general' ? styles.tab1 : styles.tab2}`}>
          <div className={styles.tab} onClick={_handleChangeTab('general')}>
            General Settings
          </div>
          <div className={styles.tab} onClick={_handleChangeTab('detail')}>
            Detail Settings
          </div>
        </div>
      </div>
      <div className={styles.formSlidesContent}>
        {nowTab === 'general' ? _renderGeneralSettings() : _renderDetailSettings()}
      </div>
    </div>
  );
};

export default FormSlides2;
